"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"

type Invitado = {
  id: string
  nombre: string
  confirmado: boolean
  familia: string
}

type DatosInvitacion = Invitado & {
  mensaje_personalizado?: string
  mesa?: string
}

export default function InvitacionPersonalizada() {
  const params = useParams()
  const id = params?.id as string
const [data, setData] = useState<DatosInvitacion | null>(null)
  const [familia, setFamilia] = useState<Invitado[]>([])

  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      const { data, error } = await supabase.from("rsvp").select("*").eq("id", id).single()
      if (!error && data) {
        setData(data)
        if (data.familia) {
          const { data: familiaData } = await supabase
            .from("rsvp")
            .select("id, nombre, confirmado, familia")
            .eq("familia", data.familia)
          setFamilia(familiaData || [])
        }
      } else {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  if (!data) return <p className="text-center p-10">Cargando invitación...</p>

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 text-center py-12 px-4 font-serif">
      <motion.div
        className="max-w-2xl mx-auto p-8 bg-white/90 rounded-2xl shadow-lg border border-rose-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-[#9A3324] mb-4">¡Estás invitado!</h1>
        <motion.p
          className="text-xl text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Querido(a) <span className="font-semibold">{data.familia || data.nombre}</span>
        </motion.p>

        {data.mensaje_personalizado ? (
          <motion.p
            className="italic text-lg text-rose-700 bg-rose-50 p-4 rounded-md shadow-inner mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            “{data.mensaje_personalizado}”
          </motion.p>
        ) : (
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Nos emociona compartir este día contigo. Gracias por acompañarnos y celebrar nuestro amor.
          </motion.p>
        )}

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-lg font-medium">🎉 Mesa asignada:</p>
          <p className="text-2xl font-bold text-[#9A3324]">{data.mesa || "Por confirmar"}</p>
        </motion.div>

        {familia.length > 0 && (
          <motion.div
            className="text-left bg-white/70 p-4 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-xl font-bold text-[#9A3324] mb-2">Integrantes de la familia:</h2>
            <ul className="space-y-2">
              {familia.map((f) => (
                <li key={f.id} className="flex items-center justify-between border-b pb-1">
                  <span>{f.nombre}</span>
                  <span className={`text-sm font-semibold ${f.confirmado ? "text-green-600" : "text-red-500"}`}>
                    {f.confirmado ? "✅ Confirmado" : "❌ No confirmado"}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        <p className="mt-8 text-gray-500 text-sm italic">Con amor, Familia Avila Romo y Leyva Nolaso 💐</p>
      </motion.div>
    </main>
  )
}
