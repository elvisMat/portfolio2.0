import React from 'react'
import { HomeItemProps } from '../../interfaces/taskbar'
import { cn } from '../../lib/utils'
import { useIsHovered } from '../../hooks/useIsHovered'
function HomeItem({ image, title }: HomeItemProps) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered()
  return (
    <div onMouseEnter={() => _onMouseEnter()} onMouseLeave={() => _onMouseLeave()}
      className={cn('flex items-center justify-center flex-col  cursor-pointer z-30')}>
      <img src={image} className={cn('w-[40px]', hovered ?
        'opacity-80' : 'opacity-100')} alt="Chrome icon" />
      <div className={cn("text-white mt-1")}>{title}</div>
    </div>
  )
}
export default HomeItem