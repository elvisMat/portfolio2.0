import React, { useContext } from "react";
import Bar from "../components/taskbar/bar";
import bg from "../assets/bg.jpeg";
import Desktop from "../components/home/home";
import { WindowContext } from "../context/window-context";
import { TopBar } from "../components/top-bar/container";
function Home() {
  const appContext = useContext(WindowContext);

  const appContextArray = Object.values(appContext?.windowConfig || {});
  return (
    <div className="w-[100vw] overflow-hidden h-[100vh] bg-dark-base relative">
      <TopBar />
      <Bar className="z-[50] w-[50px]  left-0 fixed h-full " />
      <Desktop />
      {appContextArray?.map((app) => (
        <React.Fragment key={app.title}>{app.children}</React.Fragment>
      ))}
      <img src={bg} className="object-fill  w-full h-full -z-50" />
    </div>
  );
}

export default Home;
