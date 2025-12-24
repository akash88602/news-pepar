import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import LatestNews from '../components/LatestNews'
import Navber from '../components/Navber'
import LeftAside from '../components/homelayout/LeftAside'
import RigthAside from '../components/homelayout/RigthAside'
import Footer from '../components/Footer'

export default function HomeLayOut() {
  return (
    <div className=""> 

      <Header />

 
      <section className="w-full px-4 my-3"> 
        <LatestNews />
      </section>

  
      <section className="w-full px-4 my-3  ">
        <Navber />
      </section>


      <main className="w-full px-4 md:px-6 my-3 gap-5 grid grid-cols-1 md:grid-cols-12">
        
      
        <aside className="w-full md:col-span-3 mb-3 md:mb-0 sticky top-0 h-fit">
          <LeftAside />
        </aside>

        <section className="main md:col-span-6 h-[calc(130vh)] md:h-[1650px] overflow-y-auto">
          <Outlet />
        </section>

      
        <aside className="w-full md:col-span-3 mb-3 md:mb-0  sticky top-0 h-fit">
          <RigthAside />
        </aside>
      </main>

    
      <Footer />
    </div>
  )
}
