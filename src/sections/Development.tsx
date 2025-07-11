import React from "react";
import yellowstars from '../assets/images/yellowstars.png'

const Development: React.FC = () => {
  return (
    <section id="development" className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="w-full flex flex-col lg:flex-row-reverse gap-4 justify-center items-center mb-8" >

          <img src={yellowstars} className=" w-50 h-50  lg:w-24 lg:h-24 " alt="" />

          <h2 className="text-3xl font-bold  text-gray-800 headings">Development Stack</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-lg">React</span>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-lg">TypeScript</span>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-lg">Node.js</span>
          <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-semibold text-lg">Tailwind CSS</span>
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold text-lg">Git</span>
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold text-lg">Redux</span>
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-lg">HTML5</span>
          <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold text-lg">CSS3</span>
        </div>
      </div>
    </section>
  );
}

export default Development; 