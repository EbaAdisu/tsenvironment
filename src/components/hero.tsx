'use client'

import { Button } from '@/components/ui/button'
import { companyInfo } from '@/data'
import { getYearsInBusiness } from '@/lib/utils'
import { ArrowRight, Award, Shield, Users } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
                    {/* Main Heading */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            {companyInfo.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            {companyInfo.tagline}
                        </p>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button asChild size="lg" className="text-lg px-8 py-6">
                            <Link href="/contact">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 py-6"
                        >
                            <Link href="/services">Our Services</Link>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-4xl">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Award className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">
                                {getYearsInBusiness()} Years
                            </h3>
                            <p className="text-muted-foreground">In Business</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Shield className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">500+</h3>
                            <p className="text-muted-foreground">
                                Successful Projects
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Users className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">50+</h3>
                            <p className="text-muted-foreground">
                                Multi-national Clients
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Award className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">13</h3>
                            <p className="text-muted-foreground">
                                Business Sectors
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>
        </section>
    )
}
