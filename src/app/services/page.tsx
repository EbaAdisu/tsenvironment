import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Award,
    GraduationCap,
    Leaf,
    Shield,
    TestTube,
    Users,
} from 'lucide-react'

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

const comingSoonServices = [
    {
        title: 'Environmental Laboratory Services',
        description:
            'Our laboratory has been certified by the Ethiopian National Accreditation Office (ENAO). We are currently in the process of expanding our services to meet international standards, including ISO/IEC 17025 accreditation. While these services are not yet fully operational, we are actively working to bring them online soon.',
        icon: TestTube,
        status: 'Coming Soon',
    },
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            <Header />
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

                {/* Coming Soon Services */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">
                                Coming Soon
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Services we are actively working to bring online
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {comingSoonServices.map((service, index) => {
                                const IconComponent = service.icon
                                return (
                                    <Card
                                        key={index}
                                        className="border-0 bg-card/50 backdrop-blur-sm opacity-75"
                                    >
                                        <CardHeader>
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                    <IconComponent className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg">
                                                        {service.title}
                                                    </CardTitle>
                                                    <div className="mt-2">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                            {service.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription className="text-sm leading-relaxed">
                                                {service.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                )
                            })}
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
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Contact Us
                                </a>
                                <a
                                    href="/training"
                                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    View Training Programs
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
