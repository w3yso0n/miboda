// app/page.tsx
import Hero from "@/components/Hero"
import Countdown from "@/components/Countdown"
import Info from "@/components/Info"
import RSVPForm from "@/components/RSVPForm"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
      <Countdown />
      <Info />
      <RSVPForm />
      <Footer />
    </main>
  )
}