import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">💻</span>
            <h3 className="font-semibold text-xl mb-2">Web Development</h3>
            <p className="text-gray-600">Modern, responsive websites and web apps tailored to your business needs.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">⚡</span>
            <h3 className="font-semibold text-xl mb-2">Performance Optimization</h3>
            <p className="text-gray-600">Speed up your site and improve user experience with best practices.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🎨</span>
            <h3 className="font-semibold text-xl mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Beautiful, intuitive interfaces that delight users and drive engagement.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <span className="text-4xl mb-4">🔒</span>
            <h3 className="font-semibold text-xl mb-2">Security Consulting</h3>
            <p className="text-gray-600">Protect your digital assets with modern security best practices and audits.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 