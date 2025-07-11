import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="Developer Avatar"
        className="w-32 h-32 rounded-full shadow-lg object-cover mb-4 md:mb-0"
      />
      <div>
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Hi, I'm Alex Doe 👋</h2>
        <p className="text-gray-600 text-lg max-w-xl">
          I'm a passionate full-stack developer crafting modern web experiences for startups and agencies. I love building scalable, performant, and beautiful digital products using the latest technologies.
        </p>
      </div>
    </section>
  );
}

export default About; 