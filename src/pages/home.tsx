import React from 'react'
import { Button } from '../components/ui/button'
import Bar from '../components/taskbar/bar'
import bg from '../assets/bg.jpeg'
import Desktop from '../components/home/home'
import Window from '../components/window/window'
import Chrome from '../components/apps/chrome'
function Home() {
  return (
    <div className='w-[100vw] h-[100vh] bg-dark-base relative'>
      <Bar className='z-[50] w-[50px] top-0 left-0 fixed h-full ' />
      <Desktop />
      <Window yOffset={70} xOffset={70} title={'Calculator'} zIndex={60} width={355} height={405}>
        <div className="p-4">
          Calculator
        </div>
      </Window>
      <Window title="Chrome">
        <Chrome url={'https://www.google.com/webhp?igu=1'} />
      </Window>
      <img src={bg} className='object-fill  w-full h-full -z-50' />
    </div>
  )
}

export default Home