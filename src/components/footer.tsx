'use client'

import { Separator } from '@/components/ui/separator'
import { Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/TS-Environment-Technology-Logo-New.png"
                                alt="TS Environment Technology Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="text-lg font-bold text-primary">
                                TS Environment Technology
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Leading environmental, social, health/safety, and
                            sustainability consulting services in Ethiopia since
                            2006.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <div className="space-y-2">
                            <Link
                                href="/"
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/services"
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="/news"
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                News & Events
                            </Link>
                            <Link
                                href="/projects"
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/training"
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Training
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            Contact Information
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-primary" />
                                <div>
                                    <p className="text-sm font-medium">
                                        Mobile
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        +251 966 685 863
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-primary" />
                                <div>
                                    <p className="text-sm font-medium">
                                        Office
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        +251 118 681 779
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-primary" />
                                <div>
                                    <p className="text-sm font-medium">Email</p>
                                    <a
                                        href="mailto:info@tsenvironment.com"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        info@tsenvironment.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Globe className="h-4 w-4 text-primary" />
                                <div>
                                    <p className="text-sm font-medium">
                                        Website
                                    </p>
                                    <a
                                        href="https://www.tsenvironment.com"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        www.tsenvironment.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-primary mt-1" />
                                <div>
                                    <p className="text-sm font-medium">
                                        Address
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        TK International, 2nd building, 4th
                                        floor, Bole Road (African Avenue), Addis
                                        Ababa, Ethiopia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Partners Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center mb-8">
                        <h3 className="text-lg font-semibold mb-4">
                            Our Partners & Clients
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Trusted by leading organizations across various
                            sectors
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <div className="flex items-center justify-center w-32 h-16">
                            <Image
                                src="/images/partners/Africa-Oil-Corp.jpg"
                                alt="Africa Oil Corporation"
                                width={120}
                                height={60}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center justify-center w-32 h-16">
                            <Image
                                src="/images/partners/EC-Logo-e1685703522288.png"
                                alt="EthioChicken"
                                width={120}
                                height={60}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                <Separator />
                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <p className="text-sm text-muted-foreground">
                            © 2025 TS Environment Technology PLC. All rights
                            reserved.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://www.linkedin.com/company/ts-environment-technology/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <p className="text-sm text-muted-foreground">
                            Website Design and Hosting:{' '}
                            <a
                                href="https://epioncss.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition-colors"
                            >
                                Epion Computer Solutions
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
