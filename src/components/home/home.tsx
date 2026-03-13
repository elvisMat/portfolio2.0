// import React from "react";
import { Chrome, Calculator, FileManager } from "../taskbar/images";
import HomeItem from "./home-item";

function Home() {
  return (
    <div className="absolute left-[60px] top-[35px]">
      <div className="grid gap-6">
        <HomeItem image={FileManager} windowId="about-me" />
        <HomeItem image={Chrome} windowId="chrome" />
        <HomeItem image={Calculator} windowId="calculator" />
      </div>
    </div>
  );
}

export default Home;
