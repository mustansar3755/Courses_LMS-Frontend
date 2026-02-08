import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  // Fetch All Courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
  // Calculating Rating
  const courseRating = (courseData) => {
    if (courseData.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    courseData.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / courseData.courseRatings.length;
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);
  const value = { currency, allCourses, navigate, courseRating ,isEducator,setIsEducator};
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
