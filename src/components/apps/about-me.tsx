import {
  BookCopy,
  FileChartColumn,
  Gamepad2Icon,
  UserIcon,
  WorkflowIcon,
} from "lucide-react";
import NavLink from "./about-me/nav-link";
import MainSection from "./about-me/main-section";
import React from "react";
import Resume from "./about-me/resume";
import ExperienceSection from "./about-me/experience";
import EducationSection from "./about-me/education";

export default function AboutMe() {
  const [section, setSection] = React.useState<
    "main" | "resume" | "experience" | "education" | "projects" | "skills"
  >("main");

  const getSections = React.useMemo(() => {
    switch (section) {
      case "main":
        return <MainSection />;
      case "resume":
        return <Resume />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      default:
        return null;
    }
  }, [section]);
  return (
    <div className=" bg-dark-base text-white flex">
      <aside className="min-w-64 bg p-2 space-y-2 border-r-2  border-dark-highlight">
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
          />
        </nav>
      </aside>

      {getSections}
    </div>
  );
}
