import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    getFeaturedProjects,
    getProjectCategories,
    getProjectStats,
    projectsData,
} from '@/data/projects'
import { getYearsInBusiness } from '@/lib/utils'
import Link from 'next/link'

export default function ProjectsPage() {
    const stats = getProjectStats()
    const categories = getProjectCategories()
    const featuredProjects = getFeaturedProjects()

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Our Projects
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Showcasing our successful environmental and safety
                            projects
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Project Statistics */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-green-700 mb-8">
                                Project Statistics
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center p-6 bg-green-50 rounded-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        {stats.totalProjects}+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Successful Projects
                                    </div>
                                </div>
                                <div className="text-center p-6 bg-green-50 rounded-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        50+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Multi-national Clients
                                    </div>
                                </div>
                                <div className="text-center p-6 bg-green-50 rounded-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        13
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Business Sectors
                                    </div>
                                </div>
                                <div className="text-center p-6 bg-green-50 rounded-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        {getYearsInBusiness()}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Years Experience
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Categories */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-green-700 mb-8">
                                Project Categories
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {categories.map((category, index) => {
                                    const IconComponent = category.icon
                                    return (
                                        <Card
                                            key={index}
                                            className="border-green-200 bg-green-50/50 hover:shadow-lg transition-all"
                                        >
                                            <CardContent className="p-4 text-center">
                                                <div className="flex justify-center mb-2">
                                                    <IconComponent className="h-6 w-6 text-green-600" />
                                                </div>
                                                <h3 className="font-semibold text-green-700 text-sm">
                                                    {category.name}
                                                </h3>
                                                <p className="text-xs text-gray-600">
                                                    {category.count} project
                                                    {category.count !== 1
                                                        ? 's'
                                                        : ''}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Featured Projects */}
                        <div>
                            <h2 className="text-3xl font-bold text-green-700 mb-8">
                                Featured Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredProjects.map((project, index) => {
                                    const IconComponent = project.icon
                                    return (
                                        <Card
                                            key={project.id}
                                            className="border-green-200 hover:shadow-lg transition-all"
                                        >
                                            <CardHeader>
                                                <div className="flex items-center justify-between mb-2">
                                                    <Badge
                                                        variant="outline"
                                                        className="text-xs"
                                                    >
                                                        {project.category}
                                                    </Badge>
                                                    <span className="text-xs text-gray-500">
                                                        {project.year}
                                                    </span>
                                                </div>
                                                <CardTitle className="text-lg text-green-700">
                                                    {project.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center mb-3">
                                                    <IconComponent className="h-4 w-4 text-green-600 mr-2" />
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {project.client}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    {project.description}
                                                </p>
                                                <div className="mt-3">
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {project.type}
                                                    </Badge>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>

                        {/* All Projects Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-green-700 mb-8">
                                All Projects ({stats.totalProjects})
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projectsData.map((project) => {
                                    const IconComponent = project.icon
                                    return (
                                        <Card
                                            key={project.id}
                                            className="border-green-200 hover:shadow-lg transition-all"
                                        >
                                            <CardHeader>
                                                <div className="flex items-center justify-between mb-2">
                                                    <Badge
                                                        variant="outline"
                                                        className="text-xs"
                                                    >
                                                        {project.category}
                                                    </Badge>
                                                    <span className="text-xs text-gray-500">
                                                        {project.year}
                                                    </span>
                                                </div>
                                                <CardTitle className="text-base text-green-700">
                                                    {project.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center mb-3">
                                                    <IconComponent className="h-4 w-4 text-green-600 mr-2" />
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {project.client}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600 mb-3">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-1">
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {project.type}
                                                    </Badge>
                                                    <Badge
                                                        variant="outline"
                                                        className="text-xs"
                                                    >
                                                        {project.folder}
                                                    </Badge>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="text-center bg-green-50 rounded-lg p-8 mt-12">
                            <h3 className="text-2xl font-bold text-green-700 mb-4">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-lg mb-6">
                                Contact our team of experts for consultation and
                                support on your environmental and safety needs.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
