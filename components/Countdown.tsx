// components/Countdown.tsx
"use client"
import { useEffect, useState } from "react"

function getTimeLeft(targetDate: Date) {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()
  
  // Si la fecha ya pasó, retornar ceros
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const totalSeconds = Math.floor(difference / 1000)

  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

export default function Countdown() {
  // Crear la fecha objetivo a las 6:00 PM (18:00) del día especificado
  const [targetDate, setTargetDate] = useState<Date>(new Date())
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Configurar la fecha objetivo a las 18:00 del día deseado
    const date = new Date("2025-05-23T18:00:00")
    setTargetDate(date)
    setTimeLeft(getTimeLeft(date))
    
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(date))
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  // Evitar renderizado en el servidor para prevenir hydration mismatch
  if (!isClient) {
    return (
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">¡Faltan...</h2>
        <div className="flex justify-center gap-6 text-2xl font-semibold">
          <div><span className="block text-4xl">--</span>días</div>
          <div><span className="block text-4xl">--</span>horas</div>
          <div><span className="block text-4xl">--</span>min</div>
          <div><span className="block text-4xl">--</span>seg</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">¡Faltan...</h2>
      <div className="flex justify-center gap-6 text-2xl font-semibold">
        <div><span className="block text-4xl">{timeLeft.days}</span>días</div>
        <div><span className="block text-4xl">{timeLeft.hours}</span>horas</div>
        <div><span className="block text-4xl">{timeLeft.minutes}</span>min</div>
        <div><span className="block text-4xl">{timeLeft.seconds}</span>seg</div>
      </div>
    </section>
  )
}