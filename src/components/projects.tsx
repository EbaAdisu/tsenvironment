'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { getFeaturedProjects, getProjectStats } from '@/data/projects'
import { getYearsInBusiness } from '@/lib/utils'
import Image from 'next/image'

// Project images mapping
const projectImages = [
    '/images/projects/Acoustic-Noise-TS-Environment-Technology-Addis-Ababa-Ethiopia.jpg',
    '/images/projects/AIR-QUALITY-STUDY-TS-Environment-Technology-Addis-Ababa-Ethiopia.jpg',
    '/images/projects/AoE-Plants-Biodiversity-Identification.jpg',
    '/images/projects/BASELINE-ENVIRONMENTAL-STUDY-FOR-CORBETTI-GEOTHERMAL-PROJECT-PHASE-1-OPERATIONS-Illustration.jpg',
    '/images/projects/RAPID-Biodiversity-Study-for-Reykjavik-Geothermal-Tulu-Moye-Project-TS-Environment-Technology-Addis-Ababa-Ethiopia.jpg',
    '/images/projects/Water-Resource-Study-TS-Environment-Technology-Addis-Ababa-Ethiopia.jpg',
]

export function Projects() {
    const featuredProjects = getFeaturedProjects()
    const stats = getProjectStats()

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover our successful projects across various sectors
                        and industries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.slice(0, 6).map((project, index) => {
                        const imageIndex = index % projectImages.length
                        return (
                            <Card
                                key={project.id}
                                className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105 overflow-hidden"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={projectImages[imageIndex]}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <CardTitle className="text-lg">
                                                    {project.title}
                                                </CardTitle>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                    <div className="mt-3 flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">
                                            {project.client}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {project.year}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Project Showcase Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold mb-4">
                            Environmental Studies Portfolio
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Comprehensive environmental assessments and studies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative h-64 rounded-lg overflow-hidden group">
                            <Image
                                src="/images/projects/Water-Resource-Study-TS-Environment-Technology-Addis-Ababa-Ethiopia-2.jpg"
                                alt="Water Resource Study"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                                <div className="p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">
                                        Water Resource Studies
                                    </h4>
                                    <p className="text-sm opacity-90">
                                        Comprehensive water resource assessment
                                        and management
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-64 rounded-lg overflow-hidden group">
                            <Image
                                src="/images/projects/Noise-Quality-Study-TS-Environment-Technology-Company-Addis-Ababa-Ethiopia.jpg"
                                alt="Noise Quality Study"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                                <div className="p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">
                                        Noise Quality Studies
                                    </h4>
                                    <p className="text-sm opacity-90">
                                        Professional acoustic noise assessment
                                        and monitoring
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-64 rounded-lg overflow-hidden group">
                            <Image
                                src="/images/projects/RAPID-Biodiversity-Study-for-Reykjavik-Geothermal-Tulu-Moye-Project-TS-Environment-Technology-Addis-Ababa-Ethiopia-2.jpg"
                                alt="Biodiversity Study"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                                <div className="p-6 text-white">
                                    <h4 className="text-xl font-bold mb-2">
                                        Biodiversity Studies
                                    </h4>
                                    <p className="text-sm opacity-90">
                                        Expert biodiversity assessment and
                                        conservation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        We&apos;ve successfully completed {stats.totalProjects}+
                        projects across multiple sectors
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {getYearsInBusiness()} Years of Experience •{' '}
                        {stats.totalProjects}+ Projects • 50+ Clients
                    </p>
                </div>
            </div>
        </section>
    )
}
