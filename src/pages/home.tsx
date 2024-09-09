import React from 'react'
import { Button } from '../components/ui/button'
import Bar from '../components/taskbar/bar'
import bg from '../assets/bg.jpeg'
import Desktop from '../components/home/home'
function Home() {
  return (
    <div className='w-[100vw] h-[100vh] bg-dark-base relative'>
      <Bar className='z-20 w-[50px] top-0 left-0 fixed h-full' />
      <Desktop />
      <img src={bg} className='object-fill  w-full h-full -z-50' />
    </div>
  )
}

export default Home