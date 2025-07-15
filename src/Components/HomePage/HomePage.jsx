import React from 'react'
import Hero from '../Hero/Hero'
import RecentLists from '../RecentLists/RecentLists'

const HomePage = () => {
  return (
   <>
   <section className='bg-background'>
    <div>
        <Hero /> 
        <RecentLists />
    </div>
   </section>
   </>
  )
}

export default HomePage