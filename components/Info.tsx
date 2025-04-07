import { CalendarDays, Clock, MapPin } from "lucide-react"

export default function Info() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Detalles del Evento</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-4">
          <CalendarDays className="w-6 h-6" />
          <span className="text-lg">Sábado 24 de mayo de 2025</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Clock className="w-6 h-6" />
          <span className="text-lg">Ceremonia: 5:00 PM | Recepción: 7:00 PM</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <MapPin className="w-6 h-6" />
          <span className="text-lg">[Dirección del evento o salón de fiestas]</span>
        </div>
      </div>
    </section>
  )
}