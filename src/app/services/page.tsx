import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Award, GraduationCap, Leaf, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        title: 'Environment and Safety Consulting',
        description:
            'TS Environment is a private company established to provide technical and consultancy services related to environmental planning, natural resource management, sustainability studies, ESIA studies and climate change issues. We provide straightforward, commercially aware and technically robust advice to clients in the Built Environment sector.',
        icon: Shield,
        features: [
            'ESIA Studies',
            'Biodiversity Studies',
            'Water Resources',
            'Acoustic Noise Studies',
            'Air Quality Studies',
            'Archaeology & Heritage',
            'Mapping & Surveying',
            'Environmental Management',
        ],
        color: 'text-blue-600',
        link: '/services/consulting',
    },
    {
        title: 'Environmental Management',
        description:
            "TS Environment operates an Environmental Management Service (EMS) department, under the guidance of the relevant laws of the land, company's business strategy and plan, Environmental Policy, and some international references/standards where they are appropriate (like ISO 14001).",
        icon: Leaf,
        features: [
            'Water and wastewater treatment operation',
            'Solid Waste treatment/disposal',
            'Resource remediation and site restoration',
            'Environmental management plan',
            'Hazardous and non-hazardous waste management',
            'Environmental monitoring',
            'Site restoration and rehabilitation',
        ],
        color: 'text-green-600',
        link: '/services/management',
    },
    {
        title: 'Safety and Sustainability Training',
        description:
            'Sami Safety and Sustainability (3S) Training Institute in Bole, Addis Ababa, offers over 30 safety and environment courses. Our expert team of 27 professionals, each with 15+ years of experience, enhances workplace safety and sustainability.',
        icon: GraduationCap,
        features: [
            'Occupational Health and Safety',
            'Safety Culture and Leadership',
            'Hazard Identification and Risk Assessment',
            'Emergency Preparedness and Response',
            'Fire Safety Training',
            'First Aid Training',
            'Construction Safety',
            'Working at Height',
        ],
        color: 'text-emerald-600',
        link: '/training',
    },
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <main>
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Our Services
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Comprehensive environmental consulting and
                                safety solutions tailored to your needs
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Services */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">
                                Core Services
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Our comprehensive range of environmental and
                                safety services
                            </p>
                        </div>

                        {/* Service Images Section */}
                        <div className="mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/services/About-Us-TS-Environment-Technology.png"
                                        alt="TS Environment Services"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/services/TS-Environment-Technology-Core-Values.png"
                                        alt="Core Values"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => {
                                const IconComponent = service.icon
                                return (
                                    <Card
                                        key={index}
                                        className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        <CardHeader>
                                            <div className="flex items-center space-x-4">
                                                <div
                                                    className={`p-3 rounded-lg bg-primary/10 ${service.color}`}
                                                >
                                                    <IconComponent className="h-8 w-8" />
                                                </div>
                                                <CardTitle className="text-xl">
                                                    {service.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-base mb-6">
                                                {service.description}
                                            </CardDescription>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-sm mb-3">
                                                    Key Features:
                                                </h4>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {service.features.map(
                                                        (
                                                            feature,
                                                            featureIndex
                                                        ) => (
                                                            <div
                                                                key={
                                                                    featureIndex
                                                                }
                                                                className="flex items-center space-x-2"
                                                            >
                                                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                                                <span className="text-sm text-muted-foreground">
                                                                    {feature}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Environmental Studies Showcase */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">
                                Environmental Studies
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Comprehensive environmental assessments and
                                studies
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative h-80 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/services/Water-Resource-Study-TS-Environment-Technology-Addis-Ababa-Ethiopia.jpg"
                                    alt="Water Resource Study"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-end">
                                    <div className="p-6 text-white">
                                        <h3 className="text-xl font-bold mb-2">
                                            Water Resource Studies
                                        </h3>
                                        <p className="text-sm">
                                            Comprehensive water resource
                                            assessment and management
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-80 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/services/Air-Quality-Study-TS-Environment-Technology-Company-Addis-Ababa-Ethiopia.jpg"
                                    alt="Air Quality Study"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-end">
                                    <div className="p-6 text-white">
                                        <h3 className="text-xl font-bold mb-2">
                                            Air Quality Studies
                                        </h3>
                                        <p className="text-sm">
                                            Air quality monitoring and
                                            assessment services
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold mb-4">
                                    Why Choose TS Environment?
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    Our commitment to excellence and
                                    environmental stewardship
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex justify-center mb-4">
                                            <Award className="h-12 w-12 text-primary" />
                                        </div>
                                        <CardTitle>
                                            18+ Years Experience
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Decades of experience in
                                            environmental consulting and safety
                                            management
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex justify-center mb-4">
                                            <Users className="h-12 w-12 text-primary" />
                                        </div>
                                        <CardTitle>Expert Team</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            Multi-disciplinary professionals
                                            with extensive practical experience
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="text-center border-0 bg-card/50 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex justify-center mb-4">
                                            <Shield className="h-12 w-12 text-primary" />
                                        </div>
                                        <CardTitle>
                                            Certified & Accredited
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            AAEPA certified and working towards
                                            international standards
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Contact our team of experts for consultation and
                                support on your environmental and safety needs
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/training"
                                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    View Training Programs
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safety Equipment Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">
                                Safety Equipment & Products
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Professional safety equipment and protection
                                products
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/images/services/fall-protection-products-supplier-in-ethiopia.jpg"
                                        alt="Fall Protection Equipment"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Fall Protection
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm leading-relaxed">
                                        Comprehensive fall protection equipment
                                        and systems for workplace safety.
                                    </CardDescription>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/images/services/head-protection-products-supplier-in-ethiopia.jpg"
                                        alt="Head Protection Equipment"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Head Protection
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm leading-relaxed">
                                        Professional head protection equipment
                                        including helmets and hard hats.
                                    </CardDescription>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/images/services/hearing-protection-products-supplier-in-ethiopia.jpg"
                                        alt="Hearing Protection Equipment"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Hearing Protection
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm leading-relaxed">
                                        Advanced hearing protection equipment
                                        for noise control and safety.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
