import React, { useState } from 'react'
import { cn } from '../../lib/utils'
import { BarProps } from '../../interfaces/taskbar'
import { BiSolidGrid } from "react-icons/bi";
import Start from './start';
import { useDisclosure } from '../../hooks/useDisclosure';
function Bar({ className }: BarProps) {
  const { isOpen, onToggle, } = useDisclosure()

  return (
    <div className={cn('bg-dark-base glass relative', className)}>
      <div className="mt-2 flex flex-col items-center">
        <div role='button' onClick={() => onToggle()} className="">
          <BiSolidGrid className='text-white pr-1' size={30} />
        </div>
      </div>
      <Start isOpened={isOpen} onToggle={onToggle} />
    </div>
  )
}

export default Bar