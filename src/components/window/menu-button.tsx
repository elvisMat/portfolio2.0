import React from 'react'
import { useIsHovered } from '../../hooks/useIsHovered'
import { cn } from '../../lib/utils'
import { BiMenu } from 'react-icons/bi'

function MenuButton() {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered()
  return (
    <div onMouseEnter={() => _onMouseEnter()} onMouseLeave={() => _onMouseLeave()} className={cn(" rounded-lg mr-2 bg-slate-700 flex items-center justify-center w-[28px] h-[28px]", hovered ? "bg-slate-600" : "")}>
      <BiMenu className={cn('stroe-1', hovered ? "text-primary-accent" : "")} size={15} />
    </div>
  )
}
export default MenuButton