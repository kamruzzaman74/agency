import React from 'react';
import { FaBriefcase, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-8 sm:mt-12">
            About NRC Marketing Agency
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a dynamic marketing agency dedicated to helping businesses grow and succeed in the digital age.
          </p>
        </div>

        {/* Company Overview */}
        <section className="mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-lg mx-auto mb-8 md:mb-0 md:mr-8 p-6 bg-white shadow-lg rounded-lg text-center md:text-left">
              <FaBriefcase className="text-5xl text-blue-600 mb-4 mx-auto md:mx-0 animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Mission
              </h3>
              <p className="mt-2 text-gray-600">
                To provide innovative marketing solutions that drive business growth and exceed client expectations.
              </p>
            </div>
            <div className="max-w-lg mx-auto md:ml-8 p-6 bg-white shadow-lg rounded-lg text-center md:text-left">
              <FaUsers className="text-5xl text-green-600 mb-4 mx-auto md:mx-0 animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Team
              </h3>
              <p className="mt-2 text-gray-600">
                Comprised of talented professionals passionate about marketing and committed to delivering results.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements and Goals */}
        <section className="mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-lg mx-auto mb-8 md:mb-0 md:mr-8 p-6 bg-white shadow-lg rounded-lg text-center md:text-left">
              <FaChartLine className="text-5xl text-purple-600 mb-4 mx-auto md:mx-0 animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Achievements
              </h3>
              <p className="mt-2 text-gray-600">
                We have successfully executed campaigns that have significantly boosted client visibility and sales.
              </p>
            </div>
            {/* Add more sections for goals, client testimonials, or other relevant information */}
          </div>
        </section>
      </div>
    </div>
  );

};

export default About;


