import React from "react";
import proj1 from "../assets/cartApp.png";
import proj2 from "../assets/bcrypto.png";
import proj3 from "../assets/techystar.png";
import proj4 from "../assets/agencyApp.png";
import linkIcon from "../assets/external-link.png";
import "./projects.css";

const Projects = () => {
  const projectData = [
    {
      img: proj1,
      title: "Ecommerce Shopping Website",
      link: "https://kartikjs1.github.io/E-Commerce-WebsiteJS",
    },
    {
      img: proj2,
      title: "Bcrypto - A Crypto App",
      link: "https://kartikjs-cryptoapp.vercel.app",
    },
    {
      img: proj3,
      title: "TechyStar - Branding Website",
      link: "https://reactone-smoky-five.vercel.app",
    },
    {
      img: proj4,
      title: "Agency Website",
      link: "https://kartikjs1.github.io/Agency-WebsiteJS",
    },
  ];

  return (
    <section id="projects" className="border border-gray-100 rounded-xl">
      <p className="text-2xl font-semibold mb-4 border-b border-gray-100 pb-2">
        Projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectData.map((p, index) => (
          <div
            key={index}
            className="projects border border-gray-200 rounded-xl p-2 shadow-sm hover:shadow-md transition bg-white"
          >
            <img
              src={p.img}
              alt={p.title}
              className="projectsImage w-full h-40 object-cover rounded-md"
            />

            <div className="projectNameLink flex justify-between items-center mt-3">
              <p className="projectTitle font-medium">{p.title}</p>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80 transition"
              >
                <img
                  src={linkIcon}
                  className="projectLink w-4 h-4"
                  alt="open"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
