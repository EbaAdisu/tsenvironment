const mammoth = require('mammoth')
const fs = require('fs')
const path = require('path')

// Function to extract text from a Word document
async function extractTextFromDocx(filePath) {
    try {
        const result = await mammoth.extractRawText({ path: filePath })
        return result.value
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message)
        return null
    }
}

// Function to extract project information from text
function extractProjectInfo(fileName, text) {
    // Extract project name from filename
    const projectName = fileName
        .replace('.docx', '')
        .replace(/PW\d+\.\d+/, '')
        .replace(/PW\d+/, '')
        .trim()

    // Try to extract more information from the text content
    const lines = text.split('\n').filter((line) => line.trim())

    // Look for common patterns in project documents
    let client = ''
    let projectType = ''
    let year = ''
    let description = ''

    // Extract year from filename or content
    const yearMatch = fileName.match(/(\d{4})/)
    if (yearMatch) {
        year = yearMatch[1]
    }

    // Try to identify project type from filename or content
    if (
        fileName.toLowerCase().includes('esia') ||
        text
            .toLowerCase()
            .includes('environmental and social impact assessment')
    ) {
        projectType = 'ESIA'
    } else if (
        fileName.toLowerCase().includes('emp') ||
        text.toLowerCase().includes('environmental management plan')
    ) {
        projectType = 'EMP'
    } else if (
        fileName.toLowerCase().includes('osh') ||
        text.toLowerCase().includes('occupational safety and health')
    ) {
        projectType = 'OSH'
    } else if (
        fileName.toLowerCase().includes('esg') ||
        text.toLowerCase().includes('environmental social governance')
    ) {
        projectType = 'ESG'
    } else if (
        fileName.toLowerCase().includes('wpa') ||
        text.toLowerCase().includes('waste management plan')
    ) {
        projectType = 'WPA'
    } else if (
        fileName.toLowerCase().includes('audit') ||
        text.toLowerCase().includes('environmental audit')
    ) {
        projectType = 'Environmental Audit'
    } else if (
        fileName.toLowerCase().includes('biodiversity') ||
        text.toLowerCase().includes('biodiversity')
    ) {
        projectType = 'Biodiversity Study'
    } else if (
        fileName.toLowerCase().includes('air') ||
        text.toLowerCase().includes('air quality')
    ) {
        projectType = 'Air Quality Study'
    } else if (
        fileName.toLowerCase().includes('water') ||
        text.toLowerCase().includes('water resource')
    ) {
        projectType = 'Water Resource Study'
    } else if (
        fileName.toLowerCase().includes('noise') ||
        text.toLowerCase().includes('acoustic')
    ) {
        projectType = 'Noise Study'
    } else if (
        fileName.toLowerCase().includes('emission') ||
        text.toLowerCase().includes('emission')
    ) {
        projectType = 'Emission Study'
    } else {
        projectType = 'Environmental Study'
    }

    // Try to extract client name from first few lines
    for (let i = 0; i < Math.min(10, lines.length); i++) {
        const line = lines[i].trim()
        if (
            line &&
            line.length > 3 &&
            line.length < 100 &&
            !line.includes('TS Environment') &&
            !line.includes('Page')
        ) {
            client = line
            break
        }
    }

    // Create description from project type and client
    if (client && projectType) {
        description = `${projectType} for ${client}`
    } else if (projectType) {
        description = projectType
    } else {
        description = 'Environmental Study'
    }

    return {
        id: fileName.replace('.docx', ''),
        name: projectName || client || 'Environmental Project',
        client: client || 'Various Clients',
        type: projectType,
        year: year || '2020-2023',
        description: description,
        fileName: fileName,
        category: getProjectCategory(projectType),
        status: 'Completed',
    }
}

// Function to categorize projects
function getProjectCategory(projectType) {
    if (['ESIA', 'EMP', 'Environmental Audit'].includes(projectType)) {
        return 'Environmental Assessment'
    } else if (['OSH', 'Safety'].includes(projectType)) {
        return 'Safety & Health'
    } else if (['ESG', 'ESDD'].includes(projectType)) {
        return 'ESG & Sustainability'
    } else if (
        [
            'Air Quality Study',
            'Water Resource Study',
            'Noise Study',
            'Emission Study',
            'Biodiversity Study',
        ].includes(projectType)
    ) {
        return 'Environmental Studies'
    } else {
        return 'Environmental Services'
    }
}

// Main function to process all documents
async function extractAllProjects() {
    const projects = []

    // Process PW-2023 projects
    const pw2023Path = path.join(__dirname, 'Project', 'Project', 'PW-2023')
    const pw2023Files = fs
        .readdirSync(pw2023Path)
        .filter((file) => file.endsWith('.docx'))

    console.log(`Processing ${pw2023Files.length} projects from PW-2023...`)

    for (const file of pw2023Files) {
        const filePath = path.join(pw2023Path, file)
        const text = await extractTextFromDocx(filePath)

        if (text) {
            const projectInfo = extractProjectInfo(file, text)
            projectInfo.folder = 'PW-2023'
            projects.push(projectInfo)
            console.log(`✓ Processed: ${file}`)
        }
    }

    // Process PW-2018 projects
    const pw2018Path = path.join(__dirname, 'Project', 'Project', 'PW -2018')
    const pw2018Files = fs
        .readdirSync(pw2018Path)
        .filter((file) => file.endsWith('.docx'))

    console.log(`Processing ${pw2018Files.length} projects from PW-2018...`)

    for (const file of pw2018Files) {
        const filePath = path.join(pw2018Path, file)
        const text = await extractTextFromDocx(filePath)

        if (text) {
            const projectInfo = extractProjectInfo(file, text)
            projectInfo.folder = 'PW-2018'
            projectInfo.year = '2018'
            projects.push(projectInfo)
            console.log(`✓ Processed: ${file}`)
        }
    }

    // Create summary statistics
    const summary = {
        totalProjects: projects.length,
        byCategory: {},
        byYear: {},
        byType: {},
    }

    projects.forEach((project) => {
        summary.byCategory[project.category] =
            (summary.byCategory[project.category] || 0) + 1
        summary.byYear[project.year] = (summary.byYear[project.year] || 0) + 1
        summary.byType[project.type] = (summary.byType[project.type] || 0) + 1
    })

    // Create the final JSON structure
    const projectData = {
        summary: summary,
        projects: projects,
        extractedAt: new Date().toISOString(),
        totalFiles: pw2023Files.length + pw2018Files.length,
    }

    // Save to JSON file
    const outputPath = path.join(__dirname, 'extracted-projects.json')
    fs.writeFileSync(outputPath, JSON.stringify(projectData, null, 2))

    console.log(`\n✅ Successfully extracted ${projects.length} projects!`)
    console.log(`📁 Output saved to: ${outputPath}`)
    console.log('\n📊 Summary:')
    console.log(`Total Projects: ${summary.totalProjects}`)
    console.log('\nBy Category:')
    Object.entries(summary.byCategory).forEach(([category, count]) => {
        console.log(`  ${category}: ${count}`)
    })
    console.log('\nBy Type:')
    Object.entries(summary.byType).forEach(([type, count]) => {
        console.log(`  ${type}: ${count}`)
    })

    return projectData
}

// Run the extraction
extractAllProjects().catch(console.error)
