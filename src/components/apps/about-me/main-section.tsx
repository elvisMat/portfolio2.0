// import React from "react";
// import Me from "../../../assets/me.jpg";
import { useThemeColors } from "@/hooks/useColorScheme";
import MeASCII from "../../../assets/ascii-art.png";

function MainSection() {
    const { accent } = useThemeColors();
  
  return (
    <div className="flex-1 p-10 flex flex-col items-center text-center">
      <img
        src={MeASCII}
        alt="Profile"
        className="w-32 h-32 bg-black rounded-full object-cover border-4 border-white"
      />
      <div className=""></div>
      <h1 className="text-3xl mt-4">
        Hi there, I'm <span className="font-bold">Rapelang!</span> 👋
      </h1>
      <h2 className="text-xl mt-2">
        A passionate{" "}
        <span className={` ${accent} mr-2 px-2 text-dark-base font-semibold`}>
          React Developer
        </span>
        ⚛️✨
      </h2>

      <div className="mt-6 max-w-2xl text-left space-y-4">
        <p>
          I’m a React Developer with{" "}
          <span className={` ${accent} px-2 text-dark-base font-semibold`}>
            5 years of hands-on experience
          </span>{" "}
          building dynamic web applications. I thrive on turning ideas into
          interactive user interfaces and constantly push the boundaries of
          what’s possible on the web.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className={` ${accent} px-2 text-dark-base font-semibold`}>
              React & TypeScript Enthusiast:
            </span>{" "}
            Dedicated to building scalable and maintainable UIs.
          </li>
          <li>
            <span className={` ${accent} px-2 text-dark-base font-semibold`}>
              Fast Learner:
            </span>{" "}
            Always exploring new libraries and techniques to improve development
            workflows.
          </li>
          <li>
            <span className={` ${accent} px-2 text-dark-base font-semibold`}>
              Hackathon Champion:
            </span>{" "}
            Thrives under pressure and loves building innovative solutions in
            short timeframes.
          </li>
          <li>
            <span className={` ${accent} px-2 text-dark-base font-semibold`}>
              Team Player:
            </span>{" "}
            Enjoys collaborating and contributing to developer communities.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainSection;
