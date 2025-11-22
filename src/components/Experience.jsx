import React from "react";
import zensarLogo from "../assets/ZensarJS.jpg";
import catalinkoLogo from "../assets/CatalinkoJS.png";
import "./experience.css";
const experience = [
  {
    logo: zensarLogo,
    title: "Software Engineer",
    company: "Zensar Technologies",
    period: "Jan 2025 - Present",
    location: "Pune, India",
    bullets: [
      "Architected and delivered an AI-driven, agentic automation framework leveraging OpenAI CUA, Playwright, and Python to autonomously operate complex canvas-based slot game UIs.",
      "Engineered API-driven automation workflows and multi-agent coordination using AWS Strands and Temporal for fault-tolerant orchestration of long-running pipelines.",
      "Built a .NET orchestration backend with PostgreSQL and AWS S3 for test lifecycle management, metrics collection, and artifact storage.",
      "Containerized agent stacks with Docker and produced CI-friendly images for scalable execution.",
      "Automated processes that previously required 30+ manual hours, scaling execution to hundreds of concurrent workflows.",
    ],
  },
  {
    logo: catalinkoLogo,
    title: "Frontend Developer Intern",
    company: "Catalinko Technologies",
    period: "Mar 2024 - Apr 2024",
    location: "Remote",
    bullets: [
      "Developed responsive and production-ready Cart, Payment, and Summary pages using React Native for an ecommerce application.",
      "Implemented Order Service UI and integrated it with backend APIs, ensuring seamless user experience across checkout flow.",
      "Improved application performance and reduced load times by optimizing component structure and API consumption.",
      "Collaborated with backend team to align API contracts and enhance the overall app workflow and reliability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="border border-gray-100 rounded-xl">
      <p className="text-2xl font-semibold mb-6 border-b border-gray-100 pb-2">
        Experience
      </p>

      <div className="flex flex-col gap-8">
        {experience.map((exp, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="experienceImage w-12 h-12 object-contain rounded-lg"
                />
                <div>
                  <p className="experienceCompany font-bold text-lg">
                    {exp.company}
                  </p>
                  <p className="experienceTitle text-gray-600 text-sm">
                    {exp.title}
                  </p>
                  <p className="experienceLocation text-gray-500 text-xs">
                    {exp.location}
                  </p>
                </div>
              </div>

              <p className="experiencePeriod text-gray-500 text-sm whitespace-nowrap mr-2">
                {exp.period}
              </p>
            </div>

            <ul className="experienceList list-disc pl-5 text-sm text-gray-700 leading-relaxed">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {index !== experience.length - 1 && (
              <div className="border-b border-gray-200 mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
