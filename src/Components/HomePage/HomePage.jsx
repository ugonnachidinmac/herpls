import React from 'react'
import Hero from '../Hero/Hero'
import RecentLists from '../RecentLists/RecentLists'
import Testimony from '../Testimony/Testimony'
import SearchAndExplore from '../SearchAndExplore/SearchAndExplore'

const HomePage = () => {
  return (
   <>
   <section className='bg-background'>
    <div>
        <Hero /> 
        <RecentLists />
        <Testimony /> 
        <SearchAndExplore />
    </div>
   </section>
   </>
  )
}

export default HomePage