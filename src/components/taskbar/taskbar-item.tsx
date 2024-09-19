import React from 'react'
import { TaskbarItemProps } from '../../interfaces/taskbar'
import { WindowContext } from '../../context/window-context'
import { AppConfig } from '../../app-config'

function TaskbarItem({ image, title }: TaskbarItemProps) {
  const appContext = React.useContext(WindowContext)

  function _onLaunch() {
    let newAppConfig = appContext?.windowConfig
    const app = AppConfig.find((app) => app.title === title)
    console.log(app)
    if (newAppConfig) {
      const activeAppIndex = newAppConfig.findIndex((app) => app.title === title)
      if (activeAppIndex != -1) {
        let activeApp = appContext?.windowConfig[activeAppIndex]
        if (!activeApp?.isActive) {
          activeApp = { ...activeApp!, isActive: true }
        }
        newAppConfig[activeAppIndex] = activeApp

        appContext?.setWindowConfig(newAppConfig)
      }
      else {
        if (app) {
          newAppConfig.push(app)

          appContext?.setWindowConfig(newAppConfig)
        }
      }
    }
  }
  return (
    <div onClick={() => _onLaunch()} className="flex gap-2 items-center cursor-pointer hover:bg-highlight hover:text-dark-base p-2">
      <img src={image} className='w-[13%]' alt={`Image of ${title}`} />
      <div className="">{title}</div>
    </div>
  )
}

//Memo help it not redownload images
export default React.memo(TaskbarItem)