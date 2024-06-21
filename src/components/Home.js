import React from 'react';
import Services from '../components/Service';
import GrowBusiness from './GrowBusiness';
import IncreaseBusiness from './IncreaseBusiness';
import BoostSEO from './BoostSEO';
import heroImage from '../photo/nn.jpeg'; // Replace with your actual hero image path

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Column (Text) */}
        <div className="md:w-1/2 bg-white py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-lg text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 animate__animated animate__fadeIn">
              <span className="text-green-500">Transform</span> Your Business with <br className="block sm:hidden" />Bangladeshi Innovation
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
              Elevate your brand with strategic solutions and creative campaigns tailored for the Bangladeshi market
            </p>
            <div className="flex justify-center">
              <a href="#Service" className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg sm:text-xl font-semibold hover:bg-green-600 transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
                Discover Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="md:w-1/2 bg-cover mt-11 bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})`, minHeight: 'calc(100vh - 4rem)' }}></div>
      </div>

      {/* Services Section */}
      <div id="Service">
        <Services />
      </div>

      {/* Boost SEO Section */}
      <BoostSEO />

      {/* Grow Business Section */}
      <GrowBusiness />

      {/* Increase Business Section */}
      <IncreaseBusiness />
    </div>
  );
};

export default Home;






