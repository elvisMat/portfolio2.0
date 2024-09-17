import React from 'react'
import { TaskbarItemProps } from '../../interfaces/taskbar'

function TaskbarItem({ image, title }: TaskbarItemProps) {
  return (
    <div className="flex gap-2 items-center cursor-pointer hover:bg-highlight hover:text-dark-base p-2">
      <img src={image} className='w-[13%]' alt={`Image of ${title}`} />
      <div className="">{title}</div>
    </div>
  )
}

//Memo help it not redownload images
export default React.memo(TaskbarItem)