import React from "react";
import purplering from '../assets/images/purplering.png'


const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-4 justify-center items-center" >
          <img src={purplering} className=" w-50 h-50  lg:w-24 lg:h-24  " alt="" />

        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 headings">Blog</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h3 className="bold text-xl mb-2 text-blue-700 font-bold">How to Build a Modern Portfolio with React</h3>
            <p className="text-gray-600">A step-by-step guide to creating a beautiful, responsive portfolio website using React and Tailwind CSS.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h3 className="text-xl mb-2 text-blue-700 font-bold">Top 5 Performance Tips for Web Apps</h3>
            <p className="text-gray-600">Discover essential techniques to make your web applications faster and more efficient for users.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h3 className="font-bold text-xl mb-2 text-blue-700">Designing for User Delight</h3>
            <p className="text-gray-600">Learn how to create engaging user experiences that keep people coming back to your products.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog; 