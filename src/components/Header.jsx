import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center min-h-screen  px-4 sm:px-8 lg:px-20 pt-8">
    <h1 className="text-7xl md:text-8xl font-bold text-center text-gray-800">
    En memoria de Natalio Alejandro Gomez Muñoz
    </h1>
    <p className="text-4xl text-center text-gray-500 mt-4">
    11-06-1979 - 16-02-2023
    </p>

    <img
        src={assets.Tionato3} // Cambia 'yourImage' por el nombre de tu imagen
        alt="Descripción de la imagen"
        className="w-full h-auto rounded-full max-w-3xl mt-8" // Cambia 'max-w' según lo necesites
      />
  </header>
  )
}

export default Header