// components/RSVPForm.tsx
"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">¿Nos acompañas?</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <Input type="text" placeholder="Tu nombre completo" required />
          <Input type="number" placeholder="Número de acompañantes" required min={0} />
          <Textarea placeholder="¿Quieres dejarnos un mensaje?" />
          <Button type="submit">Confirmar asistencia</Button>
        </form>
      ) : (
        <p className="text-xl text-green-600">¡Gracias por confirmar! ❤️</p>
      )}
    </section>
  )
}
