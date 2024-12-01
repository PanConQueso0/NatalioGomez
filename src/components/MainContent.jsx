import React from 'react'

const MainContent = () => {
  return (
    <main className="container mx-auto my-10 px-4">
      {/* Sección de Fotos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Galería de Fotos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reemplaza con tus imágenes */}
          <img src="ruta/a/imagen1.jpg" alt="Recuerdo 1" className="rounded-lg shadow-md" />
          <img src="ruta/a/imagen2.jpg" alt="Recuerdo 2" className="rounded-lg shadow-md" />
          <img src="ruta/a/imagen3.jpg" alt="Recuerdo 3" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* Sección de Videos */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Videos en Recuerdo</h2>
        <div className="flex justify-center">
          <video controls className="w-full md:w-2/3 rounded-lg shadow-md">
            <source src="ruta/a/video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
      </section>

      {/* Sección de Texto */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Palabras de Amor y Recuerdos</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          [Aquí puedes incluir textos conmemorativos, anécdotas, cartas o reflexiones sobre la vida del familiar]
        </p>
      </section>
    </main>
  )
}

export default MainContent