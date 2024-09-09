import React from 'react'
import { HomeItemProps } from '../../interfaces/taskbar'

function HomeItem({ image, title }: HomeItemProps) {
  return (
    <div className='flex items-center justify-center flex-col hover:opacity-100 opacity-80 cursor-pointer'>
      <img src={image} className='w-[40px] ' alt="Chrome icon" />
      <div className="text-white mt-1 opacity-100">{title}</div>
    </div>
  )
}

export default HomeItem