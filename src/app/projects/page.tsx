import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getYearsInBusiness } from '@/lib/utils'
import { Award, Building, Globe, Leaf, Mountain, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
    const projects = [
        {
            title: 'ESIA Study for Africa Oil Ethiopia Hamessa 1 Exploratory Drilling',
            client: 'Africa Oil Ethiopia B.V',
            category: 'ESIA Studies',
            year: '2023',
            description:
                'Comprehensive environmental and social impact assessment for exploratory drilling operations.',
            icon: Globe,
        },
        {
            title: 'ESG Action Plan Implementation for YES Food and Beverages Brands',
            client: 'YES Food and Beverages',
            category: 'ESG Implementation',
            year: '2023',
            description:
                'Environmental, Social, and Governance action plan development and implementation.',
            icon: Leaf,
        },
        {
            title: 'RAPID Biodiversity Study for Reykjavik Geothermal Tulu Moye Project',
            client: 'Reykjavík Geothermal / VSO Consulting',
            category: 'Biodiversity Studies',
            year: '2023',
            description:
                'Rapid biodiversity assessment for geothermal power project development.',
            icon: Leaf,
        },
        {
            title: 'ESIA Study for Calub-Hilala Gas Gathering and Treatment operations',
            client: 'China Petroleum Pipeline Engineering Company (CPPEC)',
            category: 'ESIA Studies',
            year: '2023',
            description:
                'Environmental impact assessment for gas gathering and treatment operations.',
            icon: Globe,
        },
        {
            title: 'Occupational Safety and Health (OSH) Training for SIEMENS Ethiopia',
            client: 'SIEMENS Ethiopia',
            category: 'Training',
            year: '2023',
            description:
                'Comprehensive occupational safety and health training program implementation.',
            icon: Award,
        },
        {
            title: 'Study of 132kV Transmission Line at Preparatory Survey on the Project for ALTO LANGANO 35 MW Geothermal Power Generation in Ethiopia',
            client: 'West Japan Engineering Consultants, INC',
            category: 'Infrastructure Studies',
            year: '2023',
            description:
                'Transmission line study for geothermal power generation project.',
            icon: Zap,
        },
        {
            title: 'Baseline Environmental Study for Corbetti Geothermal Project, Phase 1 Operations',
            client: 'Corbetti Geothermal',
            category: 'Environmental Studies',
            year: '2023',
            description:
                'Baseline environmental assessment for geothermal project operations.',
            icon: Mountain,
        },
        {
            title: 'Environmental Impact Assessment for ASCOM Mining Ethiopia Dish Mountain Gold Project',
            client: 'ASCOM Mining Ethiopia',
            category: 'Mining EIA',
            year: '2023',
            description:
                'Environmental impact assessment for gold mining project.',
            icon: Building,
        },
    ]

    const projectCategories = [
        { name: 'ESIA Studies', count: 2, icon: Globe },
        { name: 'Biodiversity Studies', count: 1, icon: Leaf },
        { name: 'ESG Implementation', count: 1, icon: Leaf },
        { name: 'Training', count: 1, icon: Award },
        { name: 'Infrastructure Studies', count: 1, icon: Zap },
        { name: 'Environmental Studies', count: 1, icon: Mountain },
        { name: 'Mining EIA', count: 1, icon: Building },
    ]

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
                                        500+
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
                                {projectCategories.map((category, index) => {
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
                                {projects.map((project, index) => {
                                    const IconComponent = project.icon
                                    return (
                                        <Card
                                            key={index}
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
