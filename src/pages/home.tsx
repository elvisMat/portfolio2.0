import React, { useContext } from 'react'
import Bar from '../components/taskbar/bar'
import bg from '../assets/bg.jpeg'
import Desktop from '../components/home/home'
import Window from '../components/window/window'
import { CurrentWindowContext } from '../context/current-window-context'
function Home() {
  const appContext = useContext(CurrentWindowContext)
  console.log(appContext?.windowConfig)
  return (
    <div className='w-[100vw] h-[100vh] bg-dark-base relative'>
      <Bar className='z-[50] w-[50px] top-0 left-0 fixed h-full ' />
      <Desktop />
      {appContext?.windowConfig?.map((window) => (
        <Window key={window.title} {...window}>
          {window.children}
        </Window>
      ))}
      <img src={bg} className='object-fill  w-full h-full -z-50' />
    </div>
  )
}

export default Home