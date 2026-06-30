
import React, { useEffect, useRef, useState } from "react";

import { ItemProps, StartProps } from "../../interfaces/taskbar";
import TaskbarItem from "./taskbar-item";
import { cn } from "../../lib/utils";
import { Calculator, Chrome, FileManager } from "./images";
import { Input } from "../ui/IconInput";
import useDebounce from "../../hooks/useDebouncedValue";
import { useClickAway } from "../../hooks/useClickAway";
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
  const ref = useClickAway(
    () => {
      if (isOpened) {
        console.log("click away");
        onToggle();
        setSearchTerm("");
      }
    },
    (x, y) => x < 300 && y < 80
  );

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
        "absolute left-[50px] top-[10px] w-[410px] h-[460px] rounded-lg overflow-auto",
        "bg-dark-highlight text-primary-accent shadow-2xl shadow-stone-900",
        "origin-top-left transition-all duration-200 ease-in",
        isOpened
          ? "opacity-100 scale-100 translate-x-0 translate-y-0"
          : "opacity-0 scale-0 -translate-x-2 -translate-y-2 pointer-events-none"
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
