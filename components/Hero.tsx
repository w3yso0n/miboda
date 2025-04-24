// components/Hero.tsx
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-auto min-h-[80vh] bg-cover bg-center flex flex-col items-center justify-center px-4 py-12 text-white" style={{ backgroundImage: 'url("/fondo2.jpg")' }}>
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/fondo2.jpg"
            alt="Ma Teresa y Jose Luis mirándose"
            width={1080}
            height={1082}
            className="w-full h-auto object-cover"
          />
        </div>

        <Card className="bg-white/20 backdrop-blur-md border-white/30 text-center w-full md:w-1/2 p-6 text-white shadow-lg">
          <CardContent>
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">¡25 Años de Amor!</h1>
            <p className="text-lg md:text-xl">Acompáñanos a celebrar nuestra boda de plata de</p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">Ma Teresa Leyva Nolasco & Jose Luis Avila Romo</h2>
            <p className="mt-4 text-base">23 de mayo del 2025</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
