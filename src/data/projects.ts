import {
    Activity,
    Building,
    Droplets,
    Gauge,
    Globe,
    Leaf,
    Shield,
    Target,
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
        case 'bd':
            return Leaf
        case 'wpa':
            return Droplets
        case 'air quality':
            return Gauge
        case 'emission':
            return Building
        case 'audit':
            return Activity
        case 'other':
            return Building
        default:
            return Building
    }
}

// Process and enhance the extracted projects data
export const projectsData = extractedProjects.projects.map((project) => ({
    id: project.id,
    title: project.title || project.name,
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
    const byCategory = extractedProjects.stats.byCategory
    const byType = extractedProjects.stats.byType
    const byYear = extractedProjects.stats.byYear
    const byClient = extractedProjects.stats.byClient

    return {
        totalProjects,
        byCategory,
        byType,
        byYear,
        byClient,
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

// Get projects by client
export const getProjectsByClient = (client: string) => {
    return projectsData.filter((project) => project.client === client)
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
    const categories = extractedProjects.stats.byCategory
    return Object.entries(categories).map(([name, count]) => ({
        name,
        count,
        icon: getCategoryIcon(name),
    }))
}

// Get project types with counts
export const getProjectTypes = () => {
    const types = extractedProjects.stats.byType
    return Object.entries(types).map(([name, count]) => ({
        name,
        count,
        icon: getProjectIcon(name),
    }))
}

// Get project years with counts
export const getProjectYears = () => {
    const years = extractedProjects.stats.byYear
    return Object.entries(years).map(([name, count]) => ({
        name,
        count,
    }))
}

// Get project clients with counts
export const getProjectClients = () => {
    const clients = extractedProjects.stats.byClient
    return Object.entries(clients).map(([name, count]) => ({
        name,
        count,
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
        case 'Biodiversity Assessment':
            return Leaf
        case 'Environmental Management':
            return Target
        case 'Water Assessment':
            return Droplets
        case 'Air Quality':
            return Gauge
        case 'Audit & Compliance':
            return Activity
        case 'Due Diligence':
            return Building
        case 'Other Services':
            return Building
        default:
            return Building
    }
}

// Export the raw extracted data for reference
export { extractedProjects }
