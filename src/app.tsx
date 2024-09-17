import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { IWindowContext, CurrentWindowContext, IWindow } from './context/current-window-context'
import { AppConfig } from './app-config'

function App({ children }: { children?: ReactNode }) {

  const [windowConfig, setWindowConfig] = useState<IWindow[]>([])

  useEffect(() => {
    setWindowConfig(AppConfig)
    // PRE_PROCUCTION: Uncomment the code below to persist window configuration 
    // const data = localStorage.getItem('window-config')
    // if (!data) {
    //   setWindowConfig(AppConfig)
    //   localStorage.setItem('window-config', JSON.stringify(AppConfig))
    // }
    // else {
    //   setWindowConfig(JSON.parse(data))
    // }
  }, [])
  return (
    <CurrentWindowContext.Provider value={{ windowConfig, setWindowConfig }}>
      {children}
    </CurrentWindowContext.Provider>
  )
}

export default App