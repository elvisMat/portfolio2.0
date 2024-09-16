import React, { useContext } from 'react'

import { cn } from '../../lib/utils'
import { useIsHovered } from '../../hooks/useIsHovered'
import { WindowContext } from '../../context/window-context'
function TabItem({ image, isActive }: { image: string, isActive: boolean }) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered()
  const appContext = useContext(WindowContext)

  const _onClick = () => {
    if (isActive) {
      return
    }
    else {
      appContext?.setWindowConfig?.(appContext?.windowConfig?.map((el) => {
        if (el.icon === image) {
          return { ...el, isActive: true, zIndex: 41 }
        }
        return { ...el, isActive: false, zIndex: 40 }
      }))
    }
  }
  return (
    <div
      onClick={_onClick}
      onMouseEnter={() => _onMouseEnter()} onMouseLeave={() => _onMouseLeave()}
      className={cn('flex items-center justify-center flex-col relative  cursor-pointer z-30')}>
      {isActive ? <div className="w-1 h-[110%] bg-primary-accent absolute -left-3"></div> :
        <div className="w-1 h-1 rounded-full bg-primary-accent absolute -left-3 top-[30%]"></div>}
      <img src={image} className={cn('w-[23px]', hovered ?
        'opacity-80' : 'opacity-100')} alt="Chrome icon" />
    </div>
  )
}
export default TabItem