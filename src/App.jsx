import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Loading from "./components/student/Loading";
import Player from "./pages/student/Player";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourses from "./pages/educator/MyCourses";
import StudentEnrolled from "./pages/educator/StudentEnrolled";
import Navbar from "./components/student/Navbar";
import Footer from "./components/student/Footer";

const App = () => {
  // Check kar rahe hain ke current page educator dashboard ka to nahi
  const isEducatorPage = useMatch("/educator/*");

  return (
    <div className="text-default min-h-screen bg-white flex flex-col">
      {/* Navbar sirf tab dikhayen jab educator page NA HO */}
      {!isEducatorPage && <Navbar />}
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/course-list/:input" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/my-enrollments" element={<MyEnrollments />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path="/loading/:path" element={<Loading />} />

          {/* Educator Routes: Nested layout */}
          <Route path="/educator" element={<Educator />}>
            {/* Index route for /educator or specific dashboard path */}
            <Route path="" element={<Dashboard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="student-enrolled" element={<StudentEnrolled />} />
          </Route>
        </Routes>
      </div>

      {/* Footer ko bhi conditional kar diya hai taake Dashboard clean dikhe */}
      {!isEducatorPage && <Footer />}
    </div>
  );
};

export default App;
