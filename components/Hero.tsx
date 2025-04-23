// components/Hero.tsx
import { Card, CardContent } from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: 'url("/fondo.png")' }}>
      <div className="absolute inset-0 bg-opacity-60" />
      <Card className="relative z-10 p-6 text-center bg-white/20 backdrop-blur-md border-white/30">
        <CardContent>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">¡25 Años de Amor!</h1>
          <p className="text-lg md:text-xl">Acompáñanos a celebrar nuestra boda de plata de</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">Ma Teresa Leyva Nolasco & Jose Luis Avila Romo</h2>
          <p className="mt-4 text-base">23 de mayo del 2025</p>
        </CardContent>
      </Card>
    </section>
  )
}
