import React from 'react';
import 'animate.css';
import heroImage1 from '../photo/A.jpg';
const ImpactDhaka = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="animate__animated animate__fadeInLeft">
             
               <img
          src={heroImage1}
          alt="Boost Your Business"
          className="rounded-lg shadow-lg w-full h-auto"
        />
            </div>
          </div>
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 animate__animated animate__fadeInRight">
              Impact of Online Business and Startups in Dhaka
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate__animated animate__fadeInRight animate__delay-1s">
              Dhaka, the capital city of Bangladesh, has seen a tremendous growth in online businesses and startups. This growth is driven by the rapid adoption of digital technologies and the increasing use of social media platforms like Facebook.
            </p>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900 animate__animated animate__fadeInRight animate__delay-2s">
              Benefits of Facebook Boosting
            </h3>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-600 animate__animated animate__fadeInRight animate__delay-3s">
              <li>Increased visibility and reach for businesses.</li>
              <li>Targeted advertising to specific demographics.</li>
              <li>Cost-effective marketing solutions.</li>
              <li>Measurable results and insights.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDhaka;
