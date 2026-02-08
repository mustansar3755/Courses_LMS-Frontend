import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Learn anything, anytime, anywhere
        </h1>
        
        {/* Description Text */}
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam 
          aliqua proident excepteur commodo do ea.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-medium">
          {/* Primary Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-lg transition-all duration-300">
            Get started
          </button>

          {/* Secondary Link Button */}
          <button className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors py-2">
            Learn more 
            <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;