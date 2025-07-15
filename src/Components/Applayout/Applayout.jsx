import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

const Applayout = ({children}) => {
  return (
    
   <>
    <NavBar />
       
{children}
 <Footer/>
   </>
  )
}

export default Applayout