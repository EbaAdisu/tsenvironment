import { trainingCourses } from '@/data'
import { BookOpen, GraduationCap, Shield, Users } from 'lucide-react'

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Sami Safety and Sustainability (3S)
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Professional training institute for safety,
                            environment, and sustainability
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
                                <strong>
                                    Sami Safety and sustainability (3S)
                                </strong>
                                Training Institute is an Ethiopian based
                                corporate training firm located at around Bole,
                                Addis Ababa. We are a training Institute in
                                Safety, Environment, and sustainability. We
                                offer more than 30 safety and
                                Environment-related courses at our different
                                training centers. Our highly experienced
                                "Safety, Environment and sustanability Expert
                                Team" comprises over 27 leading professionals
                                with more than 15 years of experience in making
                                a healthier and safer workplace environment. We
                                provide individuals with improved employment
                                opportunities and access to specialized
                                internationally accepted safety, Environment and
                                sustainability training.
                            </p>

                            {/* What We Provide */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Users className="mr-3 h-8 w-8" />
                                    What We Provide
                                </h2>
                                <p className="mb-4">
                                    Our General certification in Occupational
                                    Health and Safety programs are designed for
                                    the following industries:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4">
                                    <li>Telecom and construction,</li>
                                    <li>mining,</li>
                                    <li>oil and gas,</li>
                                    <li>manufacturing,</li>
                                    <li>food, and beverage industries,</li>
                                    <li>Agriculture …etc.</li>
                                </ul>
                                <p>
                                    TS (3S) Training Institute is accredited by
                                    a wide range of industry bodies, including
                                    the Addis Ababa TVET, EPA, OSHA…etc.
                                </p>
                            </div>

                            {/* Course Design and Benefits */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <BookOpen className="mr-3 h-8 w-8" />
                                    Course Designed and Benefits
                                </h2>
                                <p className="mb-4">
                                    Relevant to every workplace, the Sami Safety
                                    OSH Certificate is ideal for managers,
                                    Engineers, supervisors and anybody with
                                    Safety and Health management
                                    responsibilities. It's also perfect for
                                    those embarking on a health and safety
                                    career and gives you a stepping stone to
                                    success.
                                </p>
                                <p>
                                    Our training program combines activities,
                                    learning and interactive materials to
                                    provide you with an interesting and engaging
                                    experience. It focuses on key skills that
                                    mean you can instantly apply the knowledge
                                    you gain and add value to your organization.
                                </p>
                            </div>

                            {/* Training Topics */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Shield className="mr-3 h-8 w-8" />
                                    Training Topics
                                </h2>
                                <p className="mb-4">
                                    The most common OSH Certificate course are:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-8">
                                    <li>Safety culture and leadership</li>
                                    <li>OSH management</li>
                                    <li>
                                        Hazard Identification and Risk
                                        Assessment
                                    </li>
                                    <li>Construction Safety</li>
                                    <li>working at height</li>
                                    <li>Confined Space</li>
                                    <li>
                                        Hazardous material and Chemical safety
                                    </li>
                                    <li>Electrical safety</li>
                                    <li>Fire prevention and rescue</li>
                                    <li>First aid and Other</li>
                                </ul>
                                <p>
                                    Our full training packages will cover the
                                    most relevant Unit of Competencies from NTQF
                                    Certificate programs and are listed below.
                                </p>
                            </div>

                            {/* Training Courses Table */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <GraduationCap className="mr-3 h-8 w-8" />
                                    Our Training Courses
                                </h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-green-50">
                                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                                    Code
                                                </th>
                                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                                    Title / For Module name
                                                </th>
                                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                                    Unit title
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {trainingCourses.map(
                                                (course, index) => (
                                                    <tr
                                                        key={index}
                                                        className="hover:bg-gray-50"
                                                    >
                                                        <td className="border border-gray-300 px-4 py-3 font-mono text-sm">
                                                            {course.code}
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-3 font-medium">
                                                            {course.title}
                                                        </td>
                                                        <td className="border border-gray-300 px-4 py-3 text-sm">
                                                            {course.description}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="text-center bg-green-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-green-700 mb-4">
                                    Ready to Get Started?
                                </h3>
                                <p className="text-lg mb-6">
                                    Join our professional training programs and
                                    enhance your safety and sustainability
                                    skills.
                                </p>
                                <a
                                    href="https://forms.gle/hRFkVtEZDtfhiU3b6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
