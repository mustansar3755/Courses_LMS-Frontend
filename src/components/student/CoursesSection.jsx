import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  // 1. Check karein spelling 'allCoureses' hi hai ya 'allCourses'
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
        Master New Skills with <span className="text-blue-600">Expert-Led</span>{" "}
        Courses
      </h2>
      <p className="text-sm md:text-base mt-4 text-gray-500 max-w-2xl mx-auto">
        Unlock your potential with industry-standard training. Whether you're
        looking to advance your career or start a new hobby, our curated courses
        provide hands-on experience and real-world results.
      </p>

      {/* Grid layout add kiya hai taake cards sahi dikhein */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6 mt-10 px-4 md:px-0">
        {/* '?.slice' use kiya hai taake agar data na ho to crash na ho */}
        {allCourses?.slice(0, 4).map((course, index) => (
          <CourseCard key={index} courseData={course} />
        ))}
      </div>

      <div className="mt-12">
        <Link
          className="border border-gray-400/50 px-10 py-3 rounded-md text-gray-600 hover:bg-gray-50 transition-all"
          to={"/course-list"}
          onClick={() => window.scrollTo(0, 0)}
        >
          Show All Courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
