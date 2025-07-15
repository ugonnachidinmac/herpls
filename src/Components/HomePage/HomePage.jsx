import React from 'react'
import Hero from '../Hero/Hero'
import RecentLists from '../RecentLists/RecentLists'
import Testimony from '../Testimony/Testimony'

const HomePage = () => {
  return (
   <>
   <section className='bg-background'>
    <div>
        <Hero /> 
        <RecentLists />
        <Testimony />
    </div>
   </section>
   </>
  )
}

export default HomePage