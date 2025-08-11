'use client'

import { Button } from '@/components/ui/button'
import { companyInfo } from '@/data'
import { ArrowRight, Award, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const sliderData = [
    {
        id: 1,
        image: '/images/projects/Acoustic-Noise-TS-Environment-Technology-Addis-Ababa-Ethiopia.jpg',
        title: 'Acoustic Noise Study',
        subtitle: 'Comprehensive environmental noise assessment and monitoring',
        description:
            'Professional acoustic noise studies for environmental compliance and community protection.',
    },
    {
        id: 2,
        image: '/images/projects/AIR-QUALITY-STUDY-TS-Environment-Technology-Addis-Ababa-Ethiopia.jpg',
        title: 'Air Quality Assessment',
        subtitle: 'Advanced air quality monitoring and analysis',
        description:
            'State-of-the-art air quality studies to ensure environmental protection and regulatory compliance.',
    },
    {
        id: 3,
        image: '/images/projects/AoE-Plants-Biodiversity-Identification.jpg',
        title: 'Biodiversity Study',
        subtitle: 'Comprehensive biodiversity assessment and conservation',
        description:
            'Expert biodiversity studies to protect ecosystems and ensure sustainable development.',
    },
    {
        id: 4,
        image: '/images/projects/BASELINE-ENVIRONMENTAL-STUDY-FOR-CORBETTI-GEOTHERMAL-PROJECT-PHASE-1-OPERATIONS-Illustration.jpg',
        title: 'Environmental Baseline Studies',
        subtitle: 'Comprehensive environmental impact assessments',
        description:
            'Thorough baseline environmental studies for major infrastructure and development projects.',
    },
]

export function HeroSlider() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Swiper Slider */}
            <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                loop={true}
                className="w-full h-full"
            >
                {sliderData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={slide.id === 1}
                                sizes="100vw"
                                quality={90}
                            />
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex flex-col items-center justify-center text-center">
                                        {/* Main Heading */}
                                        <div className="max-w-4xl mx-auto mb-8">
                                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                                                {companyInfo.name}
                                            </h1>
                                            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
                                                {companyInfo.tagline}
                                            </p>
                                        </div>

                                        {/* Call to Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
                                            >
                                                <Link href="/contact">
                                                    Get Started
                                                    <ArrowRight className="ml-2 h-5 w-5" />
                                                </Link>
                                            </Button>
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="lg"
                                                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
                                            >
                                                <Link href="/services">
                                                    Our Services
                                                </Link>
                                            </Button>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-4xl">
                                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                                <div className="flex justify-center mb-4">
                                                    <Award className="h-12 w-12 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2 text-white">
                                                    18+ Years
                                                </h3>
                                                <p className="text-white/80">
                                                    In Business
                                                </p>
                                            </div>
                                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                                <div className="flex justify-center mb-4">
                                                    <Shield className="h-12 w-12 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2 text-white">
                                                    500+
                                                </h3>
                                                <p className="text-white/80">
                                                    Successful Projects
                                                </p>
                                            </div>
                                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                                <div className="flex justify-center mb-4">
                                                    <Users className="h-12 w-12 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2 text-white">
                                                    50+
                                                </h3>
                                                <p className="text-white/80">
                                                    Multi-national Clients
                                                </p>
                                            </div>
                                            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                                <div className="flex justify-center mb-4">
                                                    <Award className="h-12 w-12 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2 text-white">
                                                    13
                                                </h3>
                                                <p className="text-white/80">
                                                    Business Sectors
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
                .swiper {
                    height: 100vh !important;
                    width: 100% !important;
                }
                .swiper-slide {
                    height: 100vh !important;
                    width: 100% !important;
                    position: relative !important;
                }
                .swiper-slide img {
                    object-fit: cover !important;
                    width: 100% !important;
                    height: 100% !important;
                }
                .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.7 !important;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    background: white !important;
                }
                .swiper-button-next,
                .swiper-button-prev {
                    color: white !important;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    width: 50px !important;
                    height: 50px !important;
                    backdrop-filter: blur(10px);
                    z-index: 20 !important;
                }
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
                .swiper-button-next::after,
                .swiper-button-prev::after {
                    font-size: 20px !important;
                }
                .swiper-pagination {
                    z-index: 20 !important;
                }
            `}</style>
        </section>
    )
}
