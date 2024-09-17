import React, { useContext, useState } from 'react'
import { cn } from '../../lib/utils'
import { BarProps } from '../../interfaces/taskbar'
import { BiSolidGrid } from "react-icons/bi";
import Start from './start';
import { useDisclosure } from '../../hooks/useDisclosure';
import { CurrentWindowContext } from '../../context/current-window-context';
import TabItem from '../home/tab-item';
function Bar({ className }: BarProps) {
  const { isOpen, onToggle, } = useDisclosure()
  const appContext = useContext(CurrentWindowContext)
  return (
    <div className={cn('bg-dark-base glass relative', className)}>
      <div className="mt-2 flex flex-col items-center">
        <div role='button' onClick={() => onToggle()} className="">
          <BiSolidGrid className='text-white ' size={30} />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {appContext?.windowConfig?.map((el) => (
            <TabItem title={el.title!} isActive={el.isActive!} image={el.icon!} />
          ))}
        </div>
      </div>
      <Start isOpened={isOpen} onToggle={onToggle} />
    </div>
  )
}

export default Bar