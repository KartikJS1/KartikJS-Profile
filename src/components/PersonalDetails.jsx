import React from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const PersonalDetails = () => {
  return (
    <div className="w-full px-6 py-4 flex flex-col gap-3 border border-gray-200 rounded-xl">
      <div className="personalDetails flex items-center gap-3 text-gray-700 text-[15px]">
        <FaBriefcase className="text-gray-500 text-lg" />
        <span className="details font-medium">
          Software Developer @ Zensar Technologies
        </span>
      </div>

      <div className="personalDetails flex items-center gap-3 text-gray-700 text-[15px]">
        <FaMapMarkerAlt className="text-gray-500 text-lg" />
        <span className="details font-medium">Borivali, Mumbai</span>
      </div>

      <div className="personalDetails flex items-center gap-3 text-gray-700 text-[15px]">
        <FaPhoneAlt className="text-gray-500 text-lg" />
        <span className="details font-medium">8591180974</span>
      </div>

      <div className="personalDetails flex items-center gap-3 text-gray-700 text-[15px] break-all">
        <FaEnvelope className="text-gray-500 text-lg" />
        <span className="details font-medium">
          kartikrameshchavan2003@gmail.com
        </span>
      </div>
    </div>
  );
};

export default PersonalDetails;
