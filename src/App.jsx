import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'


function App() {
  
  return (
    <>
      <div className="bg-stone-100">
        <Header />
        <Content/>
      </div>
    </>
  )
}

export default App
