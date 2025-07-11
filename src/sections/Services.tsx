import React from "react";
import laptop from '../assets/icons/laptop.png'
import mobile from '../assets/icons/mobile.png'
import optimise from '../assets/icons/optimise.png'
import security from '../assets/icons/security.png'

// Card data array
const servicesData = [
  {
    image: laptop,
    title: "Web Development",
    description: "Modern, responsive websites and web apps tailored to your business needs."
  },
  {
    image: optimise,
    title: "Performance Optimization",
    description: "Speed up your site and improve user experience with best practices."
  },
  {
    image: mobile,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement."
  },
  {
    image: security,
    title: "Security Consulting",
    description: "Protect your digital assets with modern security best practices and audits."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 headings ">Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, idx) => (
            <div key={service.title} className="bg-white rounded-xl   shadow p-6 flex flex-col items-center  gap-2 text-center">
              <img className="w-24 h-24  -mt-14" src={service.image} alt={service.title} />
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 