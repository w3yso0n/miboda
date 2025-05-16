"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Confirmado = {
  id: string
  nombre: string
  invitados_extra: number
  created_at: string
  familia: string | null
  mesa: string | null
  mensaje_personalizado: string | null
}

export default function Confirmados() {
  const [confirmados, setConfirmados] = useState<Confirmado[]>([])

  const fetchConfirmados = async () => {
    const { data, error } = await supabase
      .from("rsvp")
      .select("id, nombre, invitados_extra, created_at, familia, mesa, mensaje_personalizado")
      .eq("confirmado", true)
      .order("created_at", { ascending: false })

    if (!error && data) {
      setConfirmados(data)
    } else {
      console.error("Error al cargar confirmados:", error)
    }
  }

  useEffect(() => {
    fetchConfirmados()
  }, [])

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("¿Estás seguro de eliminar este registro?")
    if (!confirm) return

    const { error } = await supabase.from("rsvp").delete().eq("id", id)

    if (!error) {
      setConfirmados((prev) => prev.filter((c) => c.id !== id))
    } else {
      console.error("Error al eliminar:", error)
      alert("Ocurrió un error al eliminar. Intenta de nuevo.")
    }
  }

  const handleUpdate = async (
    id: string,
    field: keyof Confirmado,
    value: string
  ) => {
    const { error } = await supabase
      .from("rsvp")
      .update({ [field]: value })
      .eq("id", id)

    if (!error) {
      setConfirmados((prev) =>
        prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
      )
    } else {
      console.error("Error al actualizar:", error)
      alert("No se pudo actualizar el campo")
    }
  }

  const totalPersonas = confirmados.reduce(
    (acc, curr) => acc + 1 + (curr.invitados_extra || 0),
    0
  )

  return (
    <section className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Lista de Confirmados</h1>
      <p className="text-lg text-center mb-6">
        Total de personas confirmadas:{" "}
        <span className="font-semibold">{totalPersonas}</span>
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Nombre</th>
              <th className="p-3 border">Familia</th>
              <th className="p-3 border">Mesa</th>
              <th className="p-3 border">Mensaje Personalizado</th>
              <th className="p-3 border">Acompañantes</th>
              <th className="p-3 border">Fecha</th>
              <th className="p-3 border">Total</th>
              <th className="p-3 border text-center">Acciones</th>
              <th className="p-3 border">Invitación</th>
            </tr>
          </thead>
          <tbody>
            {confirmados.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50 align-top">
                <td className="p-3 border">
                  <input
                    type="text"
                    value={c.nombre}
                    onChange={(e) =>
                      setConfirmados((prev) =>
                        prev.map((x) =>
                          x.id === c.id ? { ...x, nombre: e.target.value } : x
                        )
                      )
                    }
                    onBlur={(e) => handleUpdate(c.id, "nombre", e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none"
                  />
                </td>
                <td className="p-3 border">
                  <input
                    type="text"
                    value={c.familia || ""}
                    onChange={(e) =>
                      setConfirmados((prev) =>
                        prev.map((x) =>
                          x.id === c.id ? { ...x, familia: e.target.value } : x
                        )
                      )
                    }
                    onBlur={(e) => handleUpdate(c.id, "familia", e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none"
                  />
                </td>
                <td className="p-3 border">
                  <input
                    type="text"
                    value={c.mesa || ""}
                    onChange={(e) =>
                      setConfirmados((prev) =>
                        prev.map((x) =>
                          x.id === c.id ? { ...x, mesa: e.target.value } : x
                        )
                      )
                    }
                    onBlur={(e) => handleUpdate(c.id, "mesa", e.target.value)}
                    className="w-full bg-transparent border-b border-gray-300 focus:outline-none"
                  />
                </td>
                <td className="p-3 border">
                  <textarea
                    value={c.mensaje_personalizado || ""}
                    onChange={(e) =>
                      setConfirmados((prev) =>
                        prev.map((x) =>
                          x.id === c.id
                            ? { ...x, mensaje_personalizado: e.target.value }
                            : x
                        )
                      )
                    }
                    onBlur={(e) =>
                      handleUpdate(c.id, "mensaje_personalizado", e.target.value)
                    }
                    rows={2}
                    className="w-full bg-transparent border border-gray-300 p-1 rounded resize-none"
                    placeholder="Sin mensaje"
                  />
                </td>
                <td className="p-3 border">{c.invitados_extra}</td>
                <td className="p-3 border">
                  {new Date(c.created_at).toLocaleDateString()}
                </td>
                <td className="p-3 border">
                  {1 + (c.invitados_extra || 0)}
                </td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Eliminar
                  </button>
                </td>
                <td className="p-3 border">
                  <a
                    href={`http://localhost:3000/invitacion/${c.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Ver invitación
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
