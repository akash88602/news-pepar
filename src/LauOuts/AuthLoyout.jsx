import React from 'react'
import Navbar from '../components/Navber'
import { Outlet } from 'react-router'

export default function AuthLoyout() {
  return (
  
        <div className='bg-base-200 min-h-screen' >
            <header className=''>
                <Navbar></Navbar>
            </header>
            <main className=''>
                <Outlet></Outlet>
            </main>
        </div>
    
  )
}
