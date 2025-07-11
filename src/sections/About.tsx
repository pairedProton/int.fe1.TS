import React from "react";
import aboutImg from '../assets/images/blueabout.png'


const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8 ">
      <img
        src={aboutImg}
        alt="Developer Avatar"
        className="w-40 h-40  object-cover mb-4 md:mb-0"
      />
      <div>
        <h2 className="text-3xl font-bold mb-2 text-gray-800 font-['paytone_one'] ">Hi, I m Vinay Pratap</h2>
        <p className="text-gray-600 text-lg max-w-xl">
          I'm a passionate full-stack developer crafting modern web experiences for startups and agencies. I love building scalable, performant, and beautiful digital products using the latest technologies.
        </p>
      </div>
    </section>
  );
}

export default About; 