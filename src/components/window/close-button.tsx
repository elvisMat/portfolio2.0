import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { useIsHovered } from '../../hooks/useIsHovered'
import { cn } from '../../lib/utils'

function CloseButton({ onClick }: { onClick?: () => void }) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered()

  return (
    <div role='button' onClick={onClick} onMouseEnter={() => _onMouseEnter()} onMouseLeave={() => _onMouseLeave()} className={cn("rounded-full flex items-center justify-center w-[28px] h-[28px]", hovered ? "bg-[#412B22]" : "")}>
      <BiPlus className={cn('rotate-45 font-bold stroke-1', hovered ? "text-red-400" : "")} size={18} />
    </div>

  )
}

export default CloseButton