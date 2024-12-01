import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} En memoria de [Nombre del Familiar]. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer