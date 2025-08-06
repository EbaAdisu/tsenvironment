'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { companyInfo } from '@/data'
import { Globe, Mail, MapPin, Phone, Send } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Get in touch with our team of experts
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-3xl font-bold text-green-700 mb-8">
                                    Our Offices
                                </h2>

                                {/* Ethiopia/East Africa */}
                                <Card className="mb-6 border-green-200">
                                    <CardHeader>
                                        <CardTitle className="text-green-700 flex items-center">
                                            <MapPin className="mr-2 h-5 w-5" />
                                            Ethiopia/East Africa
                                        </CardTitle>
                                        <p className="text-sm text-gray-600">
                                            Addis Ababa, Ethiopia
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm mb-4">
                                            TS Environment Technology,
                                            Bole-Sub-City, TK International, 2nd
                                            building, 4th floor, African Avenue
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center">
                                                <Phone className="mr-2 h-4 w-4 text-green-600" />
                                                <span className="font-semibold">
                                                    Tel:
                                                </span>
                                                <span className="ml-2">
                                                    +251 966 68 5863
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <Mail className="mr-2 h-4 w-4 text-green-600" />
                                                <span className="font-semibold">
                                                    Email:
                                                </span>
                                                <span className="ml-2">
                                                    info@tsenvironment.com
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <Globe className="mr-2 h-4 w-4 text-green-600" />
                                                <span className="font-semibold">
                                                    Website:
                                                </span>
                                                <span className="ml-2">
                                                    {companyInfo.url}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* North America */}
                                <Card className="mb-6 border-green-200">
                                    <CardHeader>
                                        <CardTitle className="text-green-700 flex items-center">
                                            <MapPin className="mr-2 h-5 w-5" />
                                            North America
                                        </CardTitle>
                                        <p className="text-sm text-gray-600">
                                            Maryland, USA
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm mb-4">
                                            TS Environment Technology, 8808
                                            Lanier Drive # 104, Silver Spring,
                                            Maryland 20910
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center">
                                                <Phone className="mr-2 h-4 w-4 text-green-600" />
                                                <span className="font-semibold">
                                                    Tel:
                                                </span>
                                                <span className="ml-2">
                                                    +1(202)679-6177
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <Mail className="mr-2 h-4 w-4 text-green-600" />
                                                <span className="font-semibold">
                                                    Email:
                                                </span>
                                                <span className="ml-2">
                                                    h.solomon@tsenvironment.com
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <Globe className="mr-2 h-4 w-4 text-green-600" />
                                                <span className="font-semibold">
                                                    Website:
                                                </span>
                                                <span className="ml-2">
                                                    {companyInfo.url}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Middle East and Asia */}
                                <Card className="mb-6 border-green-200">
                                    <CardHeader>
                                        <CardTitle className="text-green-700 flex items-center">
                                            <MapPin className="mr-2 h-5 w-5" />
                                            Middle East and Asia
                                        </CardTitle>
                                        <p className="text-sm text-gray-600">
                                            Dubai/Shanghai
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm mb-4">
                                            TS Environment Technology
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center">
                                                <Globe className="mr-2 h-4 w-4 text-green-600" />
                                                <span className="font-semibold">
                                                    Website:
                                                </span>
                                                <span className="ml-2">
                                                    {companyInfo.url}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-green-700 mb-8">
                                    Send us a message
                                </h2>
                                <Card className="border-green-200">
                                    <CardContent className="pt-6">
                                        <form className="space-y-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Full Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    className="w-full"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Email
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    className="w-full"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="subject"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Subject
                                                </label>
                                                <Input
                                                    id="subject"
                                                    type="text"
                                                    placeholder="Enter subject"
                                                    className="w-full"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="message"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Your Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Enter your message"
                                                    rows={6}
                                                    className="w-full"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full bg-green-600 hover:bg-green-700"
                                            >
                                                <Send className="mr-2 h-4 w-4" />
                                                Submit
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="mt-12">
                            <Card className="border-green-200">
                                <CardHeader>
                                    <CardTitle className="text-green-700">
                                        Business Hours
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-2">
                                                Ethiopia Office
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Monday - Friday: 8:00 AM - 6:00
                                                PM
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Saturday: 9:00 AM - 1:00 PM
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-2">
                                                North America Office
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Monday - Friday: 9:00 AM - 5:00
                                                PM EST
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Weekend: Closed
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
