// import React from 'react'
import { useIsHovered } from '../../hooks/useIsHovered'
import { cn } from '../../lib/utils'
import { HiChevronUpDown, } from 'react-icons/hi2'
import { WindowButtonProps } from "./types";
import { LuChevronsDownUp } from "react-icons/lu";
function ExpandButton({ onClick, isMaximized }: WindowButtonProps& { isMaximized?: boolean }) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered()
  return (
    <div onClick={onClick} onMouseEnter={() => _onMouseEnter()} onMouseLeave={() => _onMouseLeave()} className={cn("rounded-full flex items-center justify-center w-[28px] h-[28px]", hovered ? "bg-slate-600" : "")}>
      {isMaximized ? (
        <LuChevronsDownUp className={cn('stroke-[3px] rotate-45', hovered ? "text-primary-accent" : "")} size={16} />
      ) : (
        <HiChevronUpDown className={cn('rotate-45 stroke-1', hovered ? "text-primary-accent" : "")} size={20} />
      )}
    </div>
  )
}

export default ExpandButton