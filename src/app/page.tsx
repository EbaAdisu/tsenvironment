import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'

export default function HomePage() {
    return (
        <main>
            <Hero />
            <Services />
            <Projects />
        </main>
    )
}
