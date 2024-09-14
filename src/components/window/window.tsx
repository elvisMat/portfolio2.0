import React, { CSSProperties, ReactNode } from 'react'
import CloseButton from './close-button'
import ExpandButton from './expand-button'
import MenuButton from './menu-button'
import MinimiseButton from './minimise-button'
import { cn } from '../../lib/utils'
// 412B22
// 32211A
interface Props extends CSSProperties {
  children: ReactNode,
  width?: number,
  height?: number,
  className?: string,
  xOffset?: number,
  yOffset?: number,
  title?: string
}
function Window({ children,
  width = 795, height = 560,
  className,
  xOffset = 60,
  yOffset = 20,
  zIndex = 40,
  title
}: Props) {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    top: `${yOffset}px`,
    left: `${xOffset}px`,
    zIndex: zIndex
  }
  return (
    <div style={styles} className={cn(' border border-stone-700  rounded-2xl  bg-dark-highlight  absolute text-primary-accent', className)}>
      <div className="flex justify-between items-center ml-2">
        <div className="cursor-move text-center flex-1 font-medium">{title}</div>
        <div className=" m-2 flex gap-2 items-center mr-3 justify-end">
          <MenuButton />
          <MinimiseButton />
          <ExpandButton />
          <CloseButton />
        </div>
      </div>
      {children}
    </div>
  )
}

export default Window