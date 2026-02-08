import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/appContext";
import { Link } from "react-router-dom";

const CourseCard = ({ courseData }) => {
  const { currency, courseRating } = useContext(AppContext);
  return (
    <Link
      to={"course/" + courseData._id}
      className="rounded border border-gray-300 pb-4 hover:scale-105 duration-300 overflow-hidden cursor-pointer"
    >
      <img src={courseData.courseThumbnail} className="rounded-t " alt="" />
      <div className="p-3 text-left">
        <h2 className=" text-base font-semibold">{courseData.courseTitle}</h2>
        <p className="text-gray-400">{courseData.educator.name}</p>
        <div className="flex items-center space-x-2">
          <p>{courseRating(courseData)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                className="w-3.5 h-3.5"
                key={i}
                src={
                  i < Math.floor(courseRating(courseData))
                    ? assets.star
                    : assets.star_blank
                }
              />
            ))}
          </div>
          {/* Total Rating */}
          <p className=" text-gray-500">{courseData.courseRatings.length}</p>
          {/* Course Price */}
        </div>
        <p className=" text-base font-semibold text-gray-800">
          {currency}
          {(
            courseData.coursePrice -
            (courseData.discount * courseData.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
