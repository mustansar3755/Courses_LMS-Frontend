import React from "react";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <section className="bg-linear-to-b from-[#eaf8ff] to-white">
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Empower your future with the courses designed to fit{" "}
          <span className="text-blue-600 relative">
            your choice
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-blue-300 rounded-full"></span>
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </p>
      </div>

      <Searchbar />
    </section>
  );
};

export default Hero;
