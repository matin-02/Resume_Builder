import HeroSection from '../components/Home/HeroSection'
import FeaturesSection from '../components/Home/FeaturesSection'
import TemplatePreview from '../components/Home/TemplatePreview'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TemplatePreview />
    </div>
  )
}