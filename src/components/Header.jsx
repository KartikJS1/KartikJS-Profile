import React from "react";
import profilePhoto from "../assets/JohnCena1JS.jpg";
import "./header.css";
const Header = () => {
  const roles = [
    "Software Developer",
    "Full Stack Engineer",
    "Learner & Explorer",
    "Tech Innovator",
  ];

  return (
    <div className="flex items-center gap-4 w-full border-b border-gray-200">
      <div className="relative border border-gray-100">
        <img
          src={profilePhoto}
          alt="Profile"
          className="profilePhoto w-40 h-40 rounded-full object-cover border border-gray-300"
        />
      </div>
      <div className="headerDiv flex flex-col mt-20 w ">
        <div className="flex items-center gap-2 pb-1 border-b border-gray-300">
          <h1 className="name text-3xl font-medium text-zinc-950 ">
            Kartik Ramesh Chavan
          </h1>

          <svg
            className="w-5 h-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.5 12l-2.1-3.6.3-4.2-4.1-.9L12 0 7.4 3.3l-4.1.9.3 4.2L1.5 12l2.1 3.6-.3 4.2 4.1.9L12 24l4.6-3.3 4.1-.9-.3-4.2L22.5 12zm-12 5.2L6.3 12l1.4-1.4 2.8 2.8 5.8-5.8L18 9.1l-7.5 8.1z" />
          </svg>
        </div>

        <div className="overflow-hidden h-6 mt-1">
          <div className="animate-slide text-gray-600 font-medium text-sm">
            {roles.map((role, i) => (
              <div key={i} className="h-6 flex items-center">
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(0); }
          25% { transform: translateY(-24px); }
          50% { transform: translateY(-48px); }
          75% { transform: translateY(-72px); }
          100% { transform: translateY(0); }
        }
        .animate-slide {
          animation: slideUp 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Header;
