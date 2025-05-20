import React from "react";
import { Chrome, Calculator, FileManager } from "../taskbar/images";
import HomeItem from "./home-item";

function Home() {
  return (
    <div className="absolute left-[60px] top-[5px]">
      <div className="grid gap-6">
        <HomeItem image={FileManager} title="About Rapelang" />
        <HomeItem image={Chrome} title="Chrome" />
        <HomeItem image={Calculator} title="Calculator" />
      </div>
    </div>
  );
}

export default Home;
