import { companyInfo } from '@/data'
import {
    Award,
    Globe,
    Heart,
    Lightbulb,
    Target,
    TrendingUp,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    const coreValues = [
        {
            title: 'Integrity',
            description:
                'we observe and follow legal, ethical and moral standards.',
            icon: Award,
        },
        {
            title: 'Transparency',
            description:
                'we foster an open and frank engagement with our clients, regulators and among our employee.',
            icon: Globe,
        },
        {
            title: 'Excellence',
            description:
                'we strive to produce a superior product and service at every juncture.',
            icon: Award,
        },
        {
            title: 'Safety',
            description:
                'We not only provide safety as our product, we do live by it. It is our first consideration before we embark on any activity.',
            icon: Target,
        },
        {
            title: 'Passion and Devotion',
            description:
                'We love what we do and we practice that by paying attention to every little detail.',
            icon: Heart,
        },
        {
            title: 'Innovation',
            description:
                'we aspire to be the best by being ahead of the curve and employing cutting-edge technology.',
            icon: Lightbulb,
        },
        {
            title: 'Entrepreneurial Spirit',
            description:
                'A passion for constant improvement and a drive to capitalize on opportunities to meet our vision.',
            icon: TrendingUp,
        },
    ]

    const keyFacts = [
        { number: '18+', label: 'Years in Business' },
        { number: '500+', label: 'Successful Projects' },
        { number: '50+', label: 'Multi-national Clients Served' },
        { number: '13', label: 'Business Sectors' },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            About Us
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Leading environmental, social, health/safety, and
                            sustainability consulting company
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg leading-relaxed mb-8">
                                TS Environment Technology operates in the
                                environmental and sustainability consulting and
                                technology sector, specializing in compliance,
                                monitoring, and advisory services. Globally, ESG
                                adoption is accelerating, driven by climate
                                change, investor pressure, and regulation.
                                Nationally, ESG is emerging through policies and
                                green development goals. TS has a strong local
                                presence but needs to scale into ESG-focused
                                services to capture emerging opportunities.
                            </p>

                            <p className="text-lg leading-relaxed mb-8">
                                {companyInfo.description}
                            </p>

                            {/* Our Purpose */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Target className="mr-3 h-8 w-8" />
                                    Our Purpose
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    At TS Environment Technology, our purpose is
                                    to steward the natural, built and social
                                    environment by preserving, protecting and
                                    retaining it for the next generation
                                    alongside by fostering sustainable
                                    development to meet the current generation
                                    need. As a profit generating company we do
                                    also need to make an income for our
                                    employees and shareholders, but we are
                                    committed never to compromise profit with
                                    protecting our environment.
                                </p>
                            </div>

                            {/* Key Facts */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6">
                                    Key Facts
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {keyFacts.map((fact, index) => (
                                        <div
                                            key={index}
                                            className="text-center p-6 bg-green-50 rounded-lg"
                                        >
                                            <div className="text-3xl font-bold text-green-600 mb-2">
                                                {fact.number}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {fact.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Core Values */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6">
                                    Our Core Values
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {coreValues.map((value, index) => {
                                        const IconComponent = value.icon
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                                            >
                                                <div className="p-2 rounded-lg bg-green-100">
                                                    <IconComponent className="h-6 w-6 text-green-600" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-green-700 mb-2">
                                                        {value.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Our Team Section */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6">
                                    Our Team
                                </h2>
                                <div className="mb-8">
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden mb-6">
                                        <Image
                                            src="/images/people/OUR-PEOPLE-scaled.jpg"
                                            alt="TS Environment Team"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="text-lg leading-relaxed text-center">
                                        Our dedicated team of environmental and
                                        safety professionals brings together
                                        decades of combined experience to
                                        deliver exceptional results for our
                                        clients.
                                    </p>
                                </div>

                                {/* Training Sessions */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-green-700 mb-4">
                                        Training & Development
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative h-64 rounded-lg overflow-hidden">
                                            <Image
                                                src="/images/people/Training-1-scaled.jpg"
                                                alt="Training Session 1"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="relative h-64 rounded-lg overflow-hidden">
                                            <Image
                                                src="/images/people/Training-2-scaled.jpg"
                                                alt="Training Session 2"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="relative h-64 rounded-lg overflow-hidden">
                                            <Image
                                                src="/images/people/Training-3-scaled.jpg"
                                                alt="Training Session 3"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="relative h-64 rounded-lg overflow-hidden">
                                            <Image
                                                src="/images/people/Training-4-scaled.jpg"
                                                alt="Training Session 4"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed text-center mt-6">
                                        We invest in continuous training and
                                        development to ensure our team stays at
                                        the forefront of environmental and
                                        safety practices.
                                    </p>
                                </div>

                                {/* Team Members */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-green-700 mb-4">
                                        Meet Our Experts
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                                                <Image
                                                    src="/images/people/sam.png"
                                                    alt="Team Member"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h4 className="font-semibold text-green-700">
                                                Samuel Hailu
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Founder & CEO
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                                                <Image
                                                    src="/images/people/ram.png"
                                                    alt="Team Member"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h4 className="font-semibold text-green-700">
                                                Ram
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Senior Consultant
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Expertise Section */}
                            <div className="mb-12">
                                <p className="text-lg leading-relaxed mb-6">
                                    As an environmental, social, health/safety,
                                    and sustainability consulting and service
                                    providing company TS Environment always goes
                                    above and beyond to meet your demanding real
                                    world challenges by delivering on time and
                                    on budget solutions. Our team of
                                    multi-disciplinary professionals and experts
                                    have good working knowledge and experiences
                                    in Environmental Impact Assessments,
                                    Environmental Compliance Audits,
                                    Environmental Management Support Services,
                                    Training and Consulting Services, Management
                                    System Improvement Activities, operational
                                    Quality Control and Assurance, renewable
                                    energy, Mining and Chemical Processing,
                                    Hazardous and Non-hazardous Waste
                                    Management, Safety, Health and Environment
                                    management and in other related fields.
                                </p>

                                <p className="font-semibold mb-4">
                                    We are proud to provide you:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-6">
                                    <li>
                                        Well respected top-notch experts with
                                        multi-year practical experience
                                    </li>
                                    <li>
                                        An objective analysis of the issue and a
                                        firm commitment to satisfy your need
                                    </li>
                                    <li>
                                        A comprehensive solution that
                                        incorporate an attention to fine details
                                    </li>
                                    <li>
                                        A support network that extend after
                                        project implementation as well as
                                        meeting regulatory demands and more.
                                    </li>
                                </ul>

                                <p className="text-lg leading-relaxed mb-6">
                                    We serve our clients with utmost care and
                                    sensitivities to their need, we pride
                                    ourselves only when our clients are
                                    satisfied with our services. Nothing is
                                    reassuring to our professional commitment
                                    and quality service deliverance than a
                                    satisfied client. Working for and with a
                                    number of world class mining and
                                    environmental companies, makes as unique in
                                    the field of Environmental projects. Our
                                    success is built through close involvement
                                    in projects over many years and with a very
                                    good reputation of high quality services,
                                    both in the Ethiopia and East Africa.
                                </p>

                                <p className="text-lg leading-relaxed">
                                    Whether you have a small project that need a
                                    feasibility study or environmental impacts
                                    assessment or larger project that require a
                                    multi-disciplinary expert involvement, our
                                    company is here to help. We have the
                                    practical experience as well as the
                                    necessary talent pool to carry the most
                                    challenging and rigorous undertakings and
                                    for that we have a proven track record. For
                                    any information regarding our services and
                                    products please feel free to{' '}
                                    <Link
                                        href="/contact"
                                        className="text-green-600 hover:text-green-700 underline"
                                    >
                                        contact us
                                    </Link>
                                    , and we will gladly respond to you on time.
                                </p>
                            </div>

                            {/* CTA Section */}
                            <div className="text-center bg-green-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-green-700 mb-4">
                                    Ready to Work With Us?
                                </h3>
                                <p className="text-lg mb-6">
                                    Contact our team of experts for consultation
                                    and support on your environmental and safety
                                    needs.
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
