import React from "react";
import { BiHome, BiRefresh } from "react-icons/bi";
import { Input } from "../../ui/input";

function UrlBar({
  displayUrl = "https://wwww.google.com",
  onClick,
}: {
  displayUrl?: string;
  onClick: () => void;
}) {
  return (
    <div className="grid grid-cols-12 items-center p-2">
      <div className="col-span-1 flex justify-center gap-3">
        <BiRefresh
          className="cursor-pointer"
          onClick={() => onClick()}
          size={23}
        />
        <BiHome className="cursor-pointer" size={20} />
      </div>
      <div className="col-span-10 ml-6">
        <Input
          value={displayUrl}
          onChange={() => {}}
          className="h-[28px] text-sm rounded-full bg-dark-base"
        />
      </div>
    </div>
  );
}

export default UrlBar;
