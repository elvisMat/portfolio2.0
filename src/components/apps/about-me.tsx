import { FileChartColumn, UserIcon, WorkflowIcon } from "lucide-react";
import NavLink from "./about-me/nav-link";
import MainSection from "./about-me/main-section";
import React from "react";

export default function AboutMe() {
  const [section, setSection] = React.useState<
    "main" | "resume" | "experience"
  >("main");

  const getSections = React.useMemo(() => {
    switch (section) {
      case "main":
        return <MainSection />;
      default:
        return null;
    }
  }, [section]);
  return (
    <div className=" bg-dark-base text-white flex">
      <aside className="w-64 bg p-2 space-y-2 border-r-2  border-dark-highlight">
        <nav className=" text-sm space-y-1">
          <NavLink
            onClick={() => setSection("main")}
            isActive={section === "main"}
            icon={<UserIcon size={"18"} />}
            title="About Me"
          />
          <NavLink
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

          <div className="flex items-center gap-2 text-white pl-1">
            Experience
          </div>
          <div className="flex items-center gap-2 text-white">📖 Education</div>
          <div className="flex items-center gap-2 text-white">🛠 Skills</div>
          <div className="flex items-center gap-2 text-white">📱 Projects</div>
        </nav>
      </aside>

      {getSections}
    </div>
  );
}
