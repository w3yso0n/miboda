// components/RSVPForm.tsx
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const nombre = form.nombre.value
    const invitados_extra = parseInt(form.invitados.value)
    const mensaje = form.mensaje.value
  
    const { error } = await supabase.from("rsvp").insert([
      { nombre, invitados_extra, mensaje, confirmado: true }
    ])
  
    if (!error) {
      setSubmitted(true)
    } else {
      console.error(error)
      alert("Ocurrió un error al confirmar. Intenta de nuevo.")
    }
  }

  return (
    <section id="rsvp" className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">¿Nos acompañas?</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <Input name="nombre" type="text" placeholder="Tu nombre completo" required />
        <Input name="invitados" type="number" placeholder="Número de acompañantes" value={0} hidden />
        <Textarea name="mensaje" placeholder="¿Quieres dejarnos un mensaje?" hidden/>
        <Button type="submit">Confirmar asistencia</Button>
      </form>
      ) : (
        <p className="text-xl text-green-600">¡Gracias por confirmar! ❤️</p>
      )}
    </section>
  )
}
