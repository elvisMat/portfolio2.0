import React, { useEffect, useRef, useState } from 'react'

import { StartProps } from '../../interfaces/taskbar'
import TaskbarItem from './taskbar-item';
import { cn } from '../../lib/utils';
import {
  Calculator, Chrome, VSCode, FileManager

  , Spotify, Terminal, Youtube, Trash
} from './images';
import { Input } from '../ui/IconInput'
import useDebounce from '../../hooks/useDebouncedValue';

const taskbarItems = [
  { id: 1, image: Calculator, title: 'Calculator' },
  { id: 2, image: FileManager, title: 'About Rapelang' },
  { id: 3, image: Chrome, title: 'Google Chrome' },
  { id: 4, image: VSCode, title: 'Visual studio code' },
  { id: 5, image: Youtube, title: 'Youtube' },
  { id: 6, image: Spotify, title: 'Spotify' },
  { id: 7, image: Terminal, title: 'Terminal' },
  // { id: 8, image: CogWheel, title: 'Settings' },
  { id: 9, image: Trash, title: 'Trash' }
];


function Start({ isOpened, onToggle }: StartProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  //Focus on input when start menu is shown
  useEffect(() => {
    if (isOpened && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpened])

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [items, setItems] = useState(taskbarItems)

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Filter taskbarItems by checking if the title contains the search term
      setItems(taskbarItems.filter((el) =>
        el.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      ));
      console.log('Search term:', debouncedSearchTerm);
      console.log(taskbarItems.filter((el) =>
        el.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      ));
    } else {
      // If no search term, show all items
      setItems(taskbarItems);
    }
  }, [debouncedSearchTerm]);

  const renderTaskbarItem = (el: typeof taskbarItems[0]) => <TaskbarItem key={el.id} image={el.image} title={el.title} />;

  return (
    <div className={cn("text-primary-accent bg-dark-highlight w-[410px] overflow-auto absolute z-50 left-[50px] h-[460px] rounded-lg top-[10px]", isOpened ? "block" : "hidden")}>
      <div className="grid grid-cols-12 ">
        <div className="col-span-7 h-[380px] pb-2  m-3 bg-dark-base flex-col flex">
          {items.map(renderTaskbarItem)}
        </div>
        <div className="col-span-5 bg-dark-highlight m-3">
          Raps
        </div>
        <div className="h-[30px] mx-4 col-span-7">
          <Input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} ref={inputRef} placeholder='Search' className=' h-[30px] focus:outline-none border-primary-accent bg-dark-base' />
        </div>
      </div>
    </div>
  )
}

export default Start