// components/Countdown.tsx
"use client"
import { useEffect, useState } from "react"

function getTimeLeft(targetDate: Date) {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()
  const totalSeconds = Math.floor(difference / 1000)

  const days = Math.floor(totalSeconds / (3600 * 24))
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

export default function Countdown() {
  const targetDate = new Date("2025-05-23T00:00:00")
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

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
