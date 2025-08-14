'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    getProjectCategories,
    getProjectStats,
    projectsData,
} from '@/data/projects'
import { getYearsInBusiness } from '@/lib/utils'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function ProjectsPage() {
    const stats = getProjectStats()
    const categories = getProjectCategories()

    // State for filtering and pagination
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedType, setSelectedType] = useState('all')
    const [selectedYear, setSelectedYear] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const projectsPerPage = 9

    // Get unique project types and years
    const projectTypes = useMemo(() => {
        const types = [...new Set(projectsData.map((project) => project.type))]
        return types.sort()
    }, [])

    const projectYears = useMemo(() => {
        const years = [...new Set(projectsData.map((project) => project.year))]
        return years.sort((a, b) => b.localeCompare(a)) // Sort descending
    }, [])

    // Filter projects based on search and filters
    const filteredProjects = useMemo(() => {
        return projectsData.filter((project) => {
            const matchesSearch =
                searchTerm === '' ||
                project.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                project.client
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                project.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())

            const matchesCategory =
                selectedCategory === 'all' ||
                project.category === selectedCategory
            const matchesType =
                selectedType === 'all' || project.type === selectedType
            const matchesYear =
                selectedYear === 'all' || project.year === selectedYear

            return (
                matchesSearch && matchesCategory && matchesType && matchesYear
            )
        })
    }, [searchTerm, selectedCategory, selectedType, selectedYear])

    // Pagination
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
    const startIndex = (currentPage - 1) * projectsPerPage
    const endIndex = startIndex + projectsPerPage
    const currentProjects = filteredProjects.slice(startIndex, endIndex)

    // Reset pagination when filters change
    const handleFilterChange = () => {
        setCurrentPage(1)
    }

    const clearFilters = () => {
        setSearchTerm('')
        setSelectedCategory('all')
        setSelectedType('all')
        setSelectedYear('all')
        setCurrentPage(1)
    }

    const hasActiveFilters =
        searchTerm ||
        selectedCategory !== 'all' ||
        selectedType !== 'all' ||
        selectedYear !== 'all'

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
                    <div className="max-w-7xl mx-auto">
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
                                            className="border-green-200 bg-green-50/50 hover:shadow-lg transition-all cursor-pointer"
                                            onClick={() => {
                                                setSelectedCategory(
                                                    category.name
                                                )
                                                handleFilterChange()
                                            }}
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

                        {/* Filters and Search */}
                        <div className="mb-8">
                            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                                <h2 className="text-3xl font-bold text-green-700">
                                    Projects ({filteredProjects.length})
                                </h2>
                                {hasActiveFilters && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={clearFilters}
                                        className="flex items-center gap-2"
                                    >
                                        <X className="h-4 w-4" />
                                        Clear Filters
                                    </Button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                                {/* Search */}
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                        placeholder="Search projects..."
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value)
                                            handleFilterChange()
                                        }}
                                        className="pl-10"
                                    />
                                </div>

                                {/* Category Filter */}
                                <Select
                                    value={selectedCategory}
                                    onValueChange={(value: string) => {
                                        setSelectedCategory(value)
                                        handleFilterChange()
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Categories
                                        </SelectItem>
                                        {categories.map((category) => (
                                            <SelectItem
                                                key={category.name}
                                                value={category.name}
                                            >
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {/* Type Filter */}
                                <Select
                                    value={selectedType}
                                    onValueChange={(value: string) => {
                                        setSelectedType(value)
                                        handleFilterChange()
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Types
                                        </SelectItem>
                                        {projectTypes.map((type) => (
                                            <SelectItem key={type} value={type}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {/* Year Filter */}
                                <Select
                                    value={selectedYear}
                                    onValueChange={(value: string) => {
                                        setSelectedYear(value)
                                        handleFilterChange()
                                    }}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Years
                                        </SelectItem>
                                        {projectYears.map((year) => (
                                            <SelectItem key={year} value={year}>
                                                {year}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Projects Grid */}
                        {currentProjects.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                    {currentProjects.map((project) => {
                                        const IconComponent = project.icon
                                        return (
                                            <Card
                                                key={project.id}
                                                className="border-green-200 hover:shadow-lg transition-all group"
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
                                                    <CardTitle className="text-lg text-green-700 group-hover:text-green-600 transition-colors">
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
                                                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
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

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                setCurrentPage(
                                                    Math.max(1, currentPage - 1)
                                                )
                                            }
                                            disabled={currentPage === 1}
                                        >
                                            Previous
                                        </Button>

                                        <div className="flex items-center gap-1">
                                            {Array.from(
                                                { length: totalPages },
                                                (_, i) => i + 1
                                            ).map((page) => (
                                                <Button
                                                    key={page}
                                                    variant={
                                                        currentPage === page
                                                            ? 'default'
                                                            : 'outline'
                                                    }
                                                    size="sm"
                                                    onClick={() =>
                                                        setCurrentPage(page)
                                                    }
                                                    className="w-10 h-10"
                                                >
                                                    {page}
                                                </Button>
                                            ))}
                                        </div>

                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                setCurrentPage(
                                                    Math.min(
                                                        totalPages,
                                                        currentPage + 1
                                                    )
                                                )
                                            }
                                            disabled={
                                                currentPage === totalPages
                                            }
                                        >
                                            Next
                                        </Button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <Search className="h-16 w-16 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                    No projects found
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    Try adjusting your search criteria or
                                    filters
                                </p>
                                <Button
                                    onClick={clearFilters}
                                    variant="outline"
                                >
                                    Clear All Filters
                                </Button>
                            </div>
                        )}

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
