import React from 'react'

import { cn } from '../../lib/utils'
import { useIsHovered } from '../../hooks/useIsHovered'
function TabItem({ image, }: { image: string }) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered()
  return (
    <div onMouseEnter={() => _onMouseEnter()} onMouseLeave={() => _onMouseLeave()}
      className={cn('flex items-center justify-center flex-col  cursor-pointer z-30')}>
      <img src={image} className={cn('w-[23px]', hovered ?
        'opacity-80' : 'opacity-100')} alt="Chrome icon" />
    </div>
  )
}
export default TabItem