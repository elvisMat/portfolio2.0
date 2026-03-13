import  { useContext } from "react";
import { Badge } from "../../../components/ui/badge";
import { cn } from "../../../lib/utils";
import { WindowContext } from "../../../context/window-context";
interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Africort Investments",
    location: "Gaborone, Botswana",
    date: "APR 2024 - PRESENT",
    description: `Africort Investments is known for developing the Work and Residence Permit System for the One Government Platform, a national digital service initiative. The system enables users to apply for work and residence permits online through a streamlined, secure, and user-friendly interface. Built with modern technologies and industry best practices, the platform emphasizes performance, reliability, and maintainability. In my role, I contributed to the development and optimization of key system components, ensuring high availability and seamless user interactions. `,
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Redux",
      "Zustand",
      "React Query",
      "Django",
      "MySQL",
      "Docker",
      "Jira",
      "Shad cn",
      "Tailwind CSS",
      "Jest",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Xavier Africa",
    location: "Gaborone, Botswana",
    date: "FEB 2024 - APR 2024",
    description: `Xavier Africa is a leading provider of digital solutions in the region. The company specializes in developing innovative software applications that cater to various industries, including finance, healthcare, and logistics. As a Frontend Developer, I was responsible for creating user-friendly interfaces and ensuring seamless interactions between users and the software applications. My role involved collaborating with designers and backend developers to deliver high-quality products that meet client requirements.`,

    technologies: [
      "TypeScript",
      "React",
      "Redux",
      "Material UI",
      "Daisy UI",
      "Formik",
      "React Query",
      "Yup",
      "Docker",
      "Jenkins",
    ],
  },
];

const ExperienceSection = () => {
  const appContext = useContext(WindowContext);

  const appConfig = appContext!.allWindowConfig!["about-me"];

  if(!appConfig) return null;

  return (
    <section
      style={{ height: `${appConfig?.height}px` }}
      className="py-2 px-4  sm:px-6 lg:px-8 bg-dark-base overflow-y-scroll overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <h1 className=" text-center text-3xl py-2 mb-3 font-bold">
          Experience
        </h1>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-1 bg-gray-700"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={cn(
                "relative mb-12",
                index !== experiences.length - 1 &&
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
                  {exp.title}
                </h3>
                <p className="text-gray-400">
                  {exp.company}, {exp.location}
                </p>
                <p className="text-gray-500 mb-2">{exp.date}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 justify-start sm:justify-start">
                  {exp.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-800 text-gray-200 border-gray-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
