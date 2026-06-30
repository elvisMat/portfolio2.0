import React, { useContext } from "react";
import Bar from "../components/taskbar/bar";
import bg from "../assets/bg.jpeg";
import Desktop from "../components/home/home";
import { WindowContext } from "../context/window-context";
import { TopBar } from "../components/top-bar/container";
import AppWindow from "@/components/window/window";
function Home() {
  const appContext = useContext(WindowContext);
  const appContextArray = Object.values(appContext?.windowConfig || {});
  return (
    <div className="w-[100vw] overflow-hidden h-[100vh] bg-dark-base relative">
      {/* <TopBar /> */}
      <Bar className="z-[50] w-[50px]  left-0 fixed h-full " />
      <Desktop />
      {/* <div className="absolute right-6 top-[30px]  p-3  z-[50]">
        Debug <br />
        <pre>{JSON.stringify(appContext?.windowConfig, null, 1)}</pre>
      </div> */}
      {appContextArray?.map((app) => (
        <AppWindow key={app.appId} {...app} />
      ))}
      <img src={bg} className="object-fill  w-full h-full -z-50" />
    </div>
  );
}

export default Home;
