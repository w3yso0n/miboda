import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function Info() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Detalles del Evento</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-4">
          <CalendarDays className="w-6 h-6" />
          <span className="text-lg">Viernes 23 de mayo de 2025</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Clock className="w-6 h-6" />
          <span className="text-lg">
            Ceremonia: 5:00 PM | Recepción: 7:30 PM
          </span>
        </div>

        {/* Ceremonia Religiosa */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#9A3324] mb-2">
            Ceremonia Religiosa
          </h3>
          <div className="flex items-center justify-center gap-4">
            <MapPin className="w-6 h-6" />
            <span className="text-lg">
              Parroquia de Nuestra Señora de Guadalupe, Ramón Martínez Zamora 56-68, Lopez Cotilla, 45615 San Pedro Tlaquepaque, Jal.
            </span>
          </div>
          <div className="mt-4 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.335132427419!2d-103.3636525140655!3d20.57436715416175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad5580702bbb%3A0x26919a2088716251!2sRam%C3%B3n%20Mart%C3%ADnez%20Zamora%2056-68%2C%20Lopez%20Cotilla%2C%2045615%20San%20Pedro%20Tlaquepaque%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1745547585066!5m2!1ses-419!2smx"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://maps.app.goo.gl/aZ5GHFdN13FLihPt8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            Ver templo en Google Maps
          </a>
        </div>

        {/* Recepción */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#9A3324] mb-2">
            Recepción / Fiesta
          </h3>
          <div className="flex items-center justify-center gap-4">
            <MapPin className="w-6 h-6" />
            <span className="text-lg">
              Quinta la Esperanza. 45654, Tlaquepaque, 45654 Tlajomulco de Zúñiga, Jal.
            </span>
          </div>
          <div className="mt-4 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200920.2062747701!2d-103.50424941128402!3d20.6544833045286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f53ff0b0a83cd%3A0x2563eb182533b276!2sQuinta%20la%20Esperanza!5e0!3m2!1ses-419!2smx!4v1745437775314!5m2!1ses-419!2smx"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://maps.app.goo.gl/dk9P8WD4kawUUQaY7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            Ver recepción en Google Maps
          </a>
        </div>

        {/* Indicaciones adicionales */}
        <p className="text-lg mt-10">
          <strong>Vestimenta:</strong> Formal
        </p>
        <p className="text-lg text-red-600">
          <strong>
            Por favor confirma tu asistencia en el formulario al final de la página.
          </strong>
        </p>
      </div>
    </section>
  );
}
