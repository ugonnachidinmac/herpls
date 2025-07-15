import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage/HomePage.jsx'
import Applayout from './Components/Applayout/Applayout.jsx'

function App() {
  return (
    <>

   
    <Applayout><HomePage /></Applayout>
    
      {/* <h1 className="text-[24px] font-bold underline text-[#1B00CC]">
      Hello world!
    </h1> */}
    </>
  )
}

export default App
