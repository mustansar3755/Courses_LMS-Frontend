import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CircleUser } from "lucide-react";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/appContext";
import { HiOutlineBolt } from "react-icons/hi2"; // Bolt icon

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const { navigate, isEducator } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <nav
      className={`font-Outfit flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b
          border-gray-300 py-3 ${isCourseListPage ? "bg-white" : "bg-blue-100/30"}`}
    >
      {/* --- LOGO SECTION WITH BOLT ICON --- */}
      <div 
        onClick={() => navigate("/")} 
        className="flex items-center gap-2 cursor-pointer group"
      >
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-md group-hover:bg-blue-700 transition-all">
          <HiOutlineBolt className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">Nextgen</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <div className="flex items-center gap-6">
          {!user ? (
            <>
              <Link to="/course-list" className="hover:text-blue-600 transition">Explore Courses</Link>
              <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/educator")}
                className="hover:text-blue-600 transition"
              >
                {!isEducator ? "Become Educator" : "Educator Dashboard"}
              </button>
              <span className="text-gray-300">|</span>
              <Link to="/my-enrollments" className="hover:text-blue-600 transition">
                My Enrollment
              </Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-sm"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Screen */}
      <div className="md:hidden flex items-center gap-4">
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()} className="text-gray-600">
            <CircleUser size={24} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;