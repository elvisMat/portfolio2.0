import React from 'react'
import CloseButton from './close-button'
import ExpandButton from './expand-button'
import MenuButton from './menu-button'
import MinimiseButton from './minimise-button'
import UrlBar from './url-bar'


// 412B22
// 32211A
function Window() {
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

      <iframe src={'https://www.google.com/webhp?igu=1'} className="w-full h-[473px]" id="chrome-screen" frameBorder="0" title="Ubuntu Chrome Url"></iframe>

    </div>
  )
}

export default Window