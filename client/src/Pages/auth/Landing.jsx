import React from "react";
import Aurora from "../../reactbits/AuroraBg.jsx";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-slate-900 min-h-screen overflow-y-auto">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={assets.logo}
            alt="logo"
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm"
          />
          <h3 className="text-white text-lg font-semibold">Pathwise AI</h3>
        </div>

        {/* Buttons visible only on md+ */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="bg-rose-400 px-4 py-2 rounded-md text-white hover:text-blue-500 hover:bg-white transition duration-200">
            Log In
          </Link>
          <Link to="/register" className="bg-rose-400 px-4 py-2 rounded-md text-white hover:text-blue-500 hover:bg-white transition duration-200">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-screen h-screen relative">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
          className="top-0"
        />

        {/* Hero Text + Buttons for mobile */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          flex flex-col items-center justify-center gap-4 
          w-[90%] sm:w-4/5 md:w-2/3 px-4 text-center">
          
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-sm">
            Pathwise AI
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Pathwise - AI is a cutting-edge platform to analyze your skills, map them to industry roles, 
            and receive AI-generated learning paths to bridge the gap.
          </p>

          {/* Buttons visible only on small screens */}
          <div className="flex sm:flex-row gap-3 sm:gap-4 mt-2 md:hidden">
            <Link to="/login" className="bg-rose-400 px-4 py-2 rounded-md text-white hover:text-blue-500 hover:bg-white transition duration-200">
              Log In
            </Link>
            <Link to="/register" className="bg-rose-400 px-4 py-2 rounded-md text-white hover:text-blue-500 hover:bg-white transition duration-200">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;