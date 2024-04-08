import React from 'react'
import { HeroSection } from './sections/hero'
import { StellaSelectionSection } from './sections/stella-section'
import { ComingSoonSection } from './sections/coming-soon'

export const Home = () => {
    return (
        <div>
            <HeroSection />
            <StellaSelectionSection />
            <ComingSoonSection />
        </div>
    )
}
