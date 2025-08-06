import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    CheckCircle,
    Droplets,
    Leaf,
    Settings,
    Shield,
    Trash2,
    Users,
} from 'lucide-react'
import Link from 'next/link'

export default function ManagementPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Environmental Management
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Comprehensive environmental management and safety
                            services
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <div className="mb-8">
                                <ul className="list-disc list-inside space-y-2 mb-6">
                                    <li>
                                        Water and wastewater treatment operation
                                    </li>
                                    <li>Solid Waste treatment/disposal</li>
                                    <li>
                                        Resource remediation and site
                                        restoration
                                    </li>
                                    <li>Environmental management plan</li>
                                </ul>
                                <p>
                                    TS Environment operates an Environmental
                                    Management Service (EMS) department, under
                                    the guidance of the relevant laws of the
                                    land, company&apos;s business strategy and
                                    plan, Environmental Policy, and some
                                    international references/standards where
                                    they are appropriate (like ISO 14001). The
                                    Environmental Policy is periodically
                                    reviewed/audited and updated. In general,
                                    functions of the Environmental Management
                                    Services can broadly be categorized into
                                    four major groups namely,
                                </p>
                            </div>

                            <div className="mb-8">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        Hazardous and none hazardous waste
                                        management and disposal operation,
                                    </li>
                                    <li>
                                        Environmental monitoring function which
                                        include water, air, soil …etc. and
                                    </li>
                                    <li>
                                        Site restoration, rehabilitation,
                                        reclamation and closure
                                    </li>
                                    <li>
                                        Water and waste water system design, and
                                        treatment
                                    </li>
                                </ul>
                            </div>

                            {/* TS Safety Services */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Shield className="mr-3 h-8 w-8" />
                                    TS Safety Services
                                </h2>
                                <p className="mb-4">
                                    The safety and health management services
                                    can broadly categorized into four major
                                    groups.
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Safety consulting and system design</li>
                                    <li>
                                        Safety staffing and management support
                                    </li>
                                    <li>
                                        Compliance auditing and Inspection(site
                                        audit, system audit, equipment
                                        inspection and installation …etc)
                                    </li>
                                    <li>
                                        Health screening and risk management
                                        services
                                    </li>
                                </ul>
                            </div>

                            {/* Key Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <Card className="border-green-200 bg-green-50/50">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 rounded-lg bg-green-100">
                                                <Droplets className="h-6 w-6 text-green-600" />
                                            </div>
                                            <CardTitle className="text-green-700">
                                                Water & Wastewater
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600">
                                            Comprehensive water and wastewater
                                            treatment operations, system design,
                                            and environmental monitoring
                                            services.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-green-200 bg-green-50/50">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 rounded-lg bg-green-100">
                                                <Trash2 className="h-6 w-6 text-green-600" />
                                            </div>
                                            <CardTitle className="text-green-700">
                                                Waste Management
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600">
                                            Hazardous and non-hazardous waste
                                            management, disposal operations, and
                                            environmental compliance.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-green-200 bg-green-50/50">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 rounded-lg bg-green-100">
                                                <Leaf className="h-6 w-6 text-green-600" />
                                            </div>
                                            <CardTitle className="text-green-700">
                                                Site Restoration
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600">
                                            Resource remediation, site
                                            restoration, rehabilitation,
                                            reclamation, and closure services.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-green-200 bg-green-50/50">
                                    <CardHeader>
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 rounded-lg bg-green-100">
                                                <Settings className="h-6 w-6 text-green-600" />
                                            </div>
                                            <CardTitle className="text-green-700">
                                                Management Plans
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600">
                                            Environmental management plan
                                            development, implementation, and
                                            ongoing support services.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Safety Services Grid */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-green-700 mb-6">
                                    Safety & Health Management Services
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-700">
                                                Safety Consulting & System
                                                Design
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Expert consultation and
                                                comprehensive safety system
                                                design for your organization.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                                        <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-700">
                                                Safety Staffing & Management
                                                Support
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Professional staffing solutions
                                                and ongoing management support
                                                for safety operations.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                                        <Shield className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-700">
                                                Compliance Auditing & Inspection
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Comprehensive site audits,
                                                system audits, and equipment
                                                inspection services.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-700">
                                                Health Screening & Risk
                                                Management
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Health screening services and
                                                comprehensive risk management
                                                solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="text-center bg-green-50 rounded-lg p-8 mt-12">
                                <h3 className="text-2xl font-bold text-green-700 mb-4">
                                    Ready to Get Started?
                                </h3>
                                <p className="text-lg mb-6">
                                    Contact our team for comprehensive
                                    environmental management and safety
                                    services.
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
                </div>
            </section>
        </div>
    )
}
