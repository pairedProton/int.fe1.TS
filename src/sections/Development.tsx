import React from "react";
import yellowstars from '../assets/images/yellowstars.png'

// Array of skill objects
const skills = [
  { text: "React", bgColor: "bg-blue-100", textColor: "text-blue-700" },
  { text: "TypeScript", bgColor: "bg-yellow-100", textColor: "text-yellow-700" },
  { text: "Node.js", bgColor: "bg-green-100", textColor: "text-green-700" },
  { text: "Tailwind CSS", bgColor: "bg-cyan-100", textColor: "text-cyan-700" },
  { text: "Git", bgColor: "bg-gray-200", textColor: "text-gray-800" },
  { text: "Redux", bgColor: "bg-purple-100", textColor: "text-purple-700" },
  { text: "HTML5", bgColor: "bg-orange-100", textColor: "text-orange-700" },
  { text: "CSS3", bgColor: "bg-pink-100", textColor: "text-pink-700" },
];

const Development: React.FC = () => {
  return (
    <section id="development" className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-full flex flex-col lg:flex-row-reverse gap-4 justify-center items-center mb-8" >
          <img src={yellowstars} className=" w-50 h-50  lg:w-24 lg:h-24 " alt="" />
          <h2 className="text-3xl font-bold  text-gray-800 headings">Development Stack</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill.text}
              className={`${skill.bgColor} ${skill.textColor} px-4 py-2 rounded-full font-semibold text-lg`}
            >
              {skill.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Development; 