// import React from 'react'
import { useIsHovered } from '../../hooks/useIsHovered'
import { cn } from '../../lib/utils'
import { BiMinus } from 'react-icons/bi'
import { WindowButtonProps } from './types'

function MinimiseButton(props: WindowButtonProps) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered()
  return (
    <div onClick={props.onClick} onMouseEnter={() => _onMouseEnter()} onMouseLeave={() => _onMouseLeave()} className={cn("rounded-full flex items-center justify-center w-[28px] h-[28px]", hovered ? "bg-slate-600" : "")}>
      <BiMinus className={cn('stroke - 1', hovered ? "text-primary-accent" : "")} size={16} />
    </div>
  )
}

export default MinimiseButton