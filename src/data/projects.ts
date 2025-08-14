import {
    Activity,
    Building,
    Globe,
    Leaf,
    Mountain,
    Shield,
    Target,
    Zap,
} from 'lucide-react'

// Import the extracted projects data
import extractedProjects from './projects.json'

// Map project types to icons
const getProjectIcon = (type: string) => {
    switch (type.toLowerCase()) {
        case 'esia':
            return Globe
        case 'osh':
            return Shield
        case 'esg':
            return Leaf
        case 'emp':
            return Target
        case 'environmental audit':
            return Activity
        case 'biodiversity study':
            return Leaf
        case 'air quality study':
            return Mountain
        case 'water resource study':
            return Globe
        case 'noise study':
            return Zap
        case 'emission study':
            return Building
        case 'wpa':
            return Target
        default:
            return Building
    }
}

// Process and enhance the extracted projects data
export const projectsData = extractedProjects.projects.map((project) => ({
    id: project.id,
    title: project.name,
    client: project.client,
    category: project.category,
    type: project.type,
    year: project.year,
    description: project.description,
    status: project.status,
    folder: project.folder,
    icon: getProjectIcon(project.type),
}))

// Get project statistics
export const getProjectStats = () => {
    const totalProjects = projectsData.length
    const byCategory = extractedProjects.summary.byCategory
    const byType = extractedProjects.summary.byType
    const byYear = extractedProjects.summary.byYear

    return {
        totalProjects,
        byCategory,
        byType,
        byYear,
    }
}

// Get projects by category
export const getProjectsByCategory = (category: string) => {
    return projectsData.filter((project) => project.category === category)
}

// Get projects by type
export const getProjectsByType = (type: string) => {
    return projectsData.filter((project) => project.type === type)
}

// Get projects by year
export const getProjectsByYear = (year: string) => {
    return projectsData.filter((project) => project.year === year)
}

// Get featured projects (first 12 projects)
export const getFeaturedProjects = () => {
    return projectsData.slice(0, 12)
}

// Get recent projects (last 6 projects)
export const getRecentProjects = () => {
    return projectsData.slice(-6).reverse()
}

// Get project categories with counts
export const getProjectCategories = () => {
    const categories = extractedProjects.summary.byCategory
    return Object.entries(categories).map(([name, count]) => ({
        name,
        count,
        icon: getCategoryIcon(name),
    }))
}

// Map category names to icons
const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Environmental Assessment':
            return Globe
        case 'Safety & Health':
            return Shield
        case 'ESG & Sustainability':
            return Leaf
        case 'Environmental Studies':
            return Mountain
        case 'Environmental Services':
            return Building
        default:
            return Building
    }
}

// Export the raw extracted data for reference
export { extractedProjects }
