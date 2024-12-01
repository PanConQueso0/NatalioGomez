import React from 'react'
import { assets } from '../assets/assets'

const Content = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row mt-20 mb-6 px-10 ">
      {/* Texto grande a la izquierda */}
      <div className="flex-1 flex flex-col text-center lg:text-left items-center justify-center p-4">
        <h2 className="text-6xl font-bold text-gray-800">
          Cada vez que estoy triste, es porque te echo de menos
        </h2>
        <p className="text-xl font-light text-gray-600 mt-2">
          Tu partida dejó un vacío imposible de llenar, pero nos consuela saber que siempre estarás con nosotros en espíritu.
        </p>
      </div>
      {/* Imagen grande a la derecha */}
      <div className="flex-1 flex items-center justify-center p-4">
        <img
          src={assets.Tionato7} 
          alt="Descripción de la imagen"
          className="w-full h-auto max-w-md"
        />
      </div>
    </div>

    <div className='flex flex-col'>
      <div className="flex-1 flex flex-col text-center lg:text-left items-center justify-center p-4">
        <h2 className="text-5xl font-bold text-amber-400">
          Tu familia te echa mucho de menos
        </h2>
        <p className="text-xl font-normal text-gray-600 mt-2 px-2 md:px-20  md:w-11/12 text-center">
          Aunque ya no podemos verte, sentimos tu presencia en cada rincón de nuestras vidas, en cada sonrisa compartida y en cada momento de paz. Tu amor sigue guiándonos, y tu recuerdo es un faro que ilumina incluso los días más oscuros.
        </p>
      </div>

      <div className="flex justify-center items-center h-screen mt-2">
      <div className="w-4/5 md:w-3/4 lg:1/2 h-full ">
        <iframe
          className='w-full h-full rounded-lg'
          src="https://www.youtube.com/embed/yBrnf9mfce4?controls=0&autoplay=1&rel=0&loop=1&playlist=yBrnf9mfce4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>

    <div className='flex flex-col py-8'>
      <div className="flex-1 flex flex-col text-center lg:text-left items-center justify-center p-4">
        <h2 className="text-7xl font-bold text-amber-400 text-center">
          Cada momento contigo fue un regalo que atesoramos eternamente
        </h2>
        <p className="text-xl font-normal text-gray-600 mt-2">
          
        </p>
      </div>

      <div className="flex justify-center items-center h-screen mt-2">
      <div className="w-4/5 md:w-3/4 lg:1/2 h-full ">
        <iframe
          className='w-full h-full rounded-lg'
          src="https://www.youtube.com/embed/PlC5nGD0DoI?controls=0&autoplay=1&rel=0&loop=1&playlist=PlC5nGD0DoI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> {/**aAEPBNhPIKE? */}
    </div>
    </div>
    

    <div className='w-full mt-16 mb-16 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6'>
      <img
          src={assets.Tionato2} 
          alt="Descripción de la imagen"
          className="w-11/12 md:w-4/5 h-full max-w-md mx-auto"
        />

      <img
          src={assets.Tionato4} 
          alt="Descripción de la imagen"
          className="w-11/12 md:w-4/5 h-full max-w-md mx-auto"
        />

      <img
          src={assets.Tionato5} 
          alt="Descripción de la imagen"
          className="w-11/12 md:w-4/5 h-full max-w-md mx-auto"
        />
      <img
          src={assets.Tionato6} 
          alt="Descripción de la imagen"
          className="w-11/12 md:w-4/5 h-full max-w-md mx-auto"
        />
      <img
          src={assets.Tionato1} 
          alt="Descripción de la imagen"
          className="w-11/12 md:w-4/5 h-full max-w-md mx-auto"
        />
      <img
          src={assets.Tionato8} 
          alt="Descripción de la imagen"
          className="w-11/12 md:w-4/5 h-full max-w-md mx-auto"
        />

        
        
      </div>
    </div>

    <div className='flex flex-col'>
      <div className="flex-1 flex flex-col text-center lg:text-left items-center justify-center p-4">
        <h2 className="text-5xl font-bold text-amber-400 text-center">
        El cielo ganó un ángel, pero nosotros nunca perderemos tus recuerdos
        </h2>
        <p className="text-xl font-normal text-gray-600 mt-2">
          Tu mamá aún te extraña mucho, pero tranquilo, siempre te enviará todo su amor hacia el cielo, nunca te olvidará.
        </p>
      </div>

        <div className="flex justify-center items-center h-screen mt-2">
        <div className="w-4/5 md:w-3/4 lg:1/2 h-full ">
          <iframe
            className='w-full h-full rounded-lg'
            src="https://www.youtube.com/embed/aAEPBNhPIKE??controls=0&autoplay=1&rel=0&loop=1&playlist=aAEPBNhPIKE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row px-10 pt-12'>
      <div className='flex-1 flex items-center lg:pl-10 p-4 mx-auto'>
      <video  className='w-full md:w-4/5 h-full max-w-md' autoPlay loop muted playsInline>
          <source type="video/mp4" src={assets.TionatoVideo4} />
        </video>
      </div>
      <div className='flex-1 flex flex-col  text-center lg:text-right justify-center p-4'>
        <h2 className='text-6xl font-bold text-amber-400'>Recuerdo lo afortunado que soy de haberte tenido siempre a mi lado</h2>
        <p className='text-xl font-light text-gray-600 mt-2'>El amor que nos diste sigue siendo nuestra fuerza, incluso en tu ausencia</p>
      </div>
    </div>


   

    
    <div className="flex flex-col">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-10 pt-12">
    <img
      src={assets.Tionato11}
      alt="Descripción de la imagen"
      className="w-11/12 md:w-4/5 h-full object-cover max-w-md"
    />
    <img
      src={assets.Tionato12}
      alt="Descripción de la imagen"
      className="w-11/12 md:w-4/5 h-full object-cover max-w-md"
    />
    <video
      className="w-11/12 md:w-4/5 h-full object-cover max-w-md"
      autoPlay
      loop
      muted
      playsInline
    >
      <source type="video/mp4" src={assets.TionatoVideo1} />
    </video>
    <video
      className="w-11/12 md:w-4/5 h-full  max-w-md"
      autoPlay
      loop
      muted
      playsInline
    >
      <source type="video/mp4" src={assets.TionatoVideo2} />
    </video>
    <img
      src={assets.Tionato17}
      alt="Descripción de la imagen"
      className="w-11/12 md:w-4/5 h-full object-cover max-w-md"
    />
    <img
      src={assets.Tionato18}
      alt="Descripción de la imagen"
      className="w-11/12 md:w-4/5 h-full object-cover max-w-md"
    />
  </div>
</div>

      <div className='flex flex-col'>
      <div className="flex-1 flex flex-col text-center lg:text-left items-center justify-center p-4">
        <h2 className="text-5xl font-bold text-amber-400">
          Tu familia te echa mucho de menos
        </h2>
        <p className="text-xl font-normal text-gray-600 mt-2">
          Tu mamá aún te extraña mucho, pero tranquilo, siempre te enviará todo su amor hacia el cielo, nunca te olvidará.
        </p>
      </div>

        <div className="flex justify-center items-center h-screen mt-2">
        <div className="w-4/5 md:w-3/4 lg:1/2 h-full ">
          <iframe
            className='w-full h-full rounded-lg'
            src="https://www.youtube.com/embed/cBJNFHQJ1m8?controls=0&autoplay=1&rel=0&loop=1&playlist=cBJNFHQJ1m8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
      

    </>
  )
}

export default Content