import React, { useContext } from "react";
import { cn } from "../../../lib/utils";
import { WindowContext } from "../../../context/window-context";

interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  grade?: string;
}

const educations: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science (CS)",
    institution: "University of Botswana (UB)",
    location: "Gaborone, Botswana",
    date: "2016-Present",
  },
  // {
  //   degree: "Botswana General Certificate of Secondary Education (BGCSE)",
  //   institution: "Molefi Secondary School",
  //   location: "Mochudi, Botswana",
  //   date: "2014-2015",
  // },
];

const EducationSection = () => {
  const appContext = useContext(WindowContext);
  const appConfig = appContext?.allWindowConfig.find(
    (app) => app.title === "About Rapelang"
  );

  return (
    <section
      style={{ height: `${appConfig?.height}px` }}
      className="py-2 px-4  sm:px-6 lg:px-8 bg-dark-base w-full"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <h1 className=" text-center text-3xl py-2 mb-3 font-bold">Education</h1>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-1 bg-gray-700"></div>
          {educations.map((edu, index) => (
            <div
              key={index}
              className={cn(
                "relative mb-12",
                index !== educations.length - 1 &&
                  "pb-12 border-b border-gray-700" // Add border except for the last item
              )}
            >
              {/* Circle */}
              <div
                className={cn(
                  "absolute w-8 h-8 rounded-full bg-highlight left-0 sm:left-4 md:left-8 top-1/2 -translate-y-1/2",
                  "border-2 border-gray-950"
                )}
              ></div>

              <div
                className={cn(
                  "pl-12 sm:pl-16 md:pl-20",
                  index % 2 === 0 ? "text-left" : "text-right sm:text-left"
                )}
              >
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-400">
                  {edu.institution}, {edu.location}
                </p>
                <p className="text-gray-500">{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
