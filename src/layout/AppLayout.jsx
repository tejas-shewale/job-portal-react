import React from 'react'
import '../App.css'
import { Outlet } from 'react-router-dom'
import Header from '@/components/header'

const AppLayout = () => {
  return (
      <>
        <div className='grid-background'></div>
        <main className='min-h-screen container mx-auto px-[2rem]'>
          <Header />
          <Outlet />
        </main>
        <div className='p-10 text-center bg-gray-800'>Made with 💗 by Tejas</div>
    </>
  )
}

export default AppLayout