import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'TS Environment Technology | Environmental Management and Consulting Services in Ethiopia',
    description:
        'Environmental Management and Consulting Services in Ethiopia | Safety, Health and Environmental Products Supplier Company in Addis Ababa Ethiopia',
    keywords:
        'environmental consulting, safety training, environmental management, Ethiopia, Addis Ababa, ESIA studies, biodiversity, water resources, air quality, archaeology, heritage',
    authors: [{ name: 'TS Environment Technology' }],
    creator: 'TS Environment Technology',
    publisher: 'TS Environment Technology',
    robots: 'index, follow',
    openGraph: {
        title: 'TS Environment Technology',
        description:
            'Environmental Management and Consulting Services in Ethiopia',
        url: 'https://tsenvironment.com',
        siteName: 'TS Environment Technology',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
