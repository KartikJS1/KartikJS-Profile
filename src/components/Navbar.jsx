import React, { useState, useEffect } from "react";
import githubIcon from "../assets/icons8-github.svg";
import logo from "../assets/logo.png";
import hamburger from "../assets/burger-bar.png";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("portfolio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar w-full fixed top-0 left-0 bg-white z-50">
      <div className="w-full border border-gray-100 rounded-t-2xl"></div>

      <div className="navbarDiv flex justify-center items-center py-3 left-40 relative">
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img className="hamburger" src={hamburger} alt="menu" />
        </button>

        <ul
          className={`list flex gap-5 text-lg font-medium items-center 
          ${menuOpen ? "open" : ""}`}
        >
          <a
            href="#portfolio"
            onClick={() => setActive("portfolio")}
            className={`font-mono font-bold text-md ${
              active === "portfolio" ? "text-black" : "text-gray-500"
            }`}
          >
            Portfolio
          </a>

          <a
            href="#experience"
            onClick={() => setActive("experience")}
            className={`font-mono font-bold text-md ${
              active === "experience" ? "text-black" : "text-gray-500"
            }`}
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={() => setActive("projects")}
            className={`font-mono font-bold text-md ${
              active === "projects" ? "text-black" : "text-gray-500"
            }`}
          >
            Projects
          </a>

          <a
            href="https://github.com/kartikjs1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5"
          >
            <img className="w-5 h-5" src={githubIcon} alt="" />
          </a>
        </ul>
      </div>

      <div className="w-full border border-gray-100 rounded-b-2xl"></div>
    </div>
  );
};

export default Navbar;
