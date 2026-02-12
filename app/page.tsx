import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturesGrid from '@/components/FeaturesGrid'
import LiveDataStrip from '@/components/LiveDataStrip'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-st-bg text-white">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <Hero />
        <FeaturesGrid />
        <LiveDataStrip />
        <PricingSection />
      </div>
      <Footer />
    </main>
  )
}
