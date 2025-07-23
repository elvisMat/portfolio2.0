import React, { useEffect, useRef, useState } from "react";

import { ItemProps, StartProps } from "../../interfaces/taskbar";
import TaskbarItem from "./taskbar-item";
import { cn } from "../../lib/utils";
import {
  Calculator,
  Chrome,
  VSCode,
  FileManager,
  Spotify,
  Terminal,
  Youtube,
  Trash,
  CogWheel,
} from "./images";
import { Input } from "../ui/IconInput";
import useDebounce from "../../hooks/useDebouncedValue";
import { useClickAway } from "../../hooks/useClickAway";
import { WindowContext } from "../../context/window-context";
import { searchKeysByTitle } from "../../app-config";

// title must match app title
const taskbarItems: ItemProps[] = [
  { image: Calculator, windowId: "calculator" },
  { image: FileManager, windowId: "about-me" },
  { image: Chrome, windowId: "chrome" },
  // { image: VSCode, windowId: "vs-code" },
  // { image: Youtube, windowId: "youtube" },
  // { image: Spotify, windowId: "spotify" },
  // { image: Terminal, windowId: "terminal" },
  // { image: CogWheel, windowId: "settings" },
  // { image: Trash, windowId: "trash" },
];

function Start({ isOpened, onToggle }: StartProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const ref = useClickAway(() => {
    if (isOpened) onToggle();
  });
  const appContext = React.useContext(WindowContext);

  //Focus on input when start menu is shown
  useEffect(() => {
    if (isOpened && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpened]);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [items, setItems] = useState(taskbarItems);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Search for apps that match the search term
      const apps = searchKeysByTitle(debouncedSearchTerm);
      // Filter taskbar items based on search term
      // If the search term matches any app title, show that item
      // Otherwise, show no items
      setItems(taskbarItems.filter((el) => apps.includes(el.windowId)));
    } else {
      // If no search term, show all items
      setItems(taskbarItems);
    }
  }, [debouncedSearchTerm]);
  const renderTaskbarItem = (el: (typeof taskbarItems)[0]) => (
    <TaskbarItem
      onToggle={onToggle}
      key={el.windowId}
      image={el.image}
      windowId={el.windowId}
    />
  );
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "text-primary-accent shadow-2xl shadow-stone-900 bg-dark-highlight w-[410px] overflow-auto absolute left-[50px] h-[460px] rounded-lg top-[10px]",
        isOpened ? "block" : "hidden"
      )}
    >
      <div className="grid grid-cols-12 ">
        <div className="col-span-7  h-[380px] pb-2  m-3 bg-dark-base flex-col flex">
          {items.map(renderTaskbarItem)}
        </div>
        <div className="col-span-5 bg-dark-highlight m-3">Raps</div>
        <div className="h-[30px] mx-4 col-span-7">
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            ref={inputRef}
            placeholder="Search"
            className=" h-[30px] focus:outline-none border-primary-accent bg-dark-base"
          />
        </div>
      </div>
    </div>
  );
}

export default Start;
