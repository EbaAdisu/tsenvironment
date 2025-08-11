import { HeroSlider } from '@/components/hero-slider'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'

export default function HomePage() {
    return (
        <main>
            <HeroSlider />
            <Services />
            <Projects />
        </main>
    )
}
