import React from "react";
import "./about.css";
const About = () => {
  return (
    <div>
      <p className="aboutTitle text-2xl font-semibold">About</p>
      <ul className="list-disc ml-5 text-gray-500 mt-3 leading-relaxed">
        <li className="list">
          <strong>Software Engineer</strong> having experience in{" "}
          <strong>MERN Stack</strong>, <strong>Dotnet</strong>,{" "}
          <strong>Python</strong>.
        </li>
        <li className="listItem">
          Strong knowledge of <strong>JavaScript</strong>,{" "}
          <strong>Express.js</strong>, and <strong>MongoDB</strong>.
        </li>
        <li className="listItem">
          Hands-on experience with building responsive UIs.
        </li>
        <li className="listItem">
          Dedicated to writing clean, optimized, and maintainable code.
        </li>
      </ul>
    </div>
  );
};

export default About;
