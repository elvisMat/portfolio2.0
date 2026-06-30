import NavLink from "./about-me/nav-link";
//import MainSection from "./about-me/main-section";
import React from "react";

import { WindowContext } from "../../context/window-context";
import Appearance from "./settings/appearance";
export default function Settings() {
  const [section, setSection] = React.useState<"appearance">("appearance");

  const appContext = React.useContext(WindowContext);
  if (!appContext) return null;

  const settingsContext = appContext?.windowConfig!["settings"];
  if (!settingsContext) return null;
  const getSections = React.useMemo(() => {
    switch (section) {
      case "appearance":
        return <Appearance />;
      // case "resume":
      //   return <Resume />;
      // case "experience":
      //   return <ExperienceSection />;
      // case "education":
      //   return <EducationSection />;
      default:
        return null;
    }
  }, [section]);
  return (
    <div className="  text-white flex h-[calc(100%-47px)] rounded-b-lg overflow-hidden">
      <aside className="min-w-64  h-full p-2 pt-4 space-y-2 border-r-[1px]  border-accent-blue">
        <nav className=" text-sm space-y-1">
          <NavLink
            onClick={() => setSection("appearance")}
            isActive={section === "appearance"}
            title="Personalize"
          />
          <div className="border-b-[1px]  h-2 w-full py-2 border-accent-blue"></div>
          {/* <NavLink
            isActive={section === "resume"}
            onClick={() => setSection("resume")}
            icon={<FileChartColumn size={"18"} />}
            title="Resume"
          />
          <NavLink
            isActive={section === "experience"}
            onClick={() => setSection("experience")}
            icon={<WorkflowIcon size={"18"} />}
            title="Experience"
          />
          <NavLink
            isActive={section === "education"}
            onClick={() => setSection("education")}
            icon={<BookCopy size={"18"} />}
            title="Education"
          />

          <NavLink
            isActive={section === "projects"}
            onClick={() => setSection("projects")}
            icon={<Gamepad2Icon size={"18"} />}
            title="Projects"
          /> */}
        </nav>
      </aside>

      <div className="p-1 flex-1">{getSections}</div>
    </div>
  );
}
