import React, { ReactNode } from 'react'
import CloseButton from './close-button'
import ExpandButton from './expand-button'
import MenuButton from './menu-button'
import MinimiseButton from './minimise-button'
import UrlBar from './url-bar'
import Chrome from '../apps/chrome'
// 412B22
// 32211A
interface Props { children: ReactNode }
function Window({ children }: Props) {
  return (
    <div className='w-[795px] h-[560px] rounded-2xl left-[60px]  bg-dark-highlight z-40 absolute top-5 text-primary-accent'>
      <div className="flex justify-between items-center ml-2">
        <div className="cursor-move"></div>
        <div className=" m-2 flex gap-2 items-center mr-3 justify-end">
          <MenuButton />
          <MinimiseButton />
          <ExpandButton />
          <CloseButton />
        </div>
      </div>
      <div className="bg-dark-base">
        <UrlBar />
      </div>
      {children}
    </div>
  )
}

export default Window