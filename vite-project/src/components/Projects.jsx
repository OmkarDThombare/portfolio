import React from "react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

function Projects() {
  const projects = [
    {
      title: "Vehicle Marketplace",
      description:
        "A MERN-based marketplace where users list, browse, and wishlist vehicles with real-time buyer–seller chat.",
      highlights: [
        "JWT Authentication & Role-Based Access",
        "Real-Time Chat with Socket.IO",
        "Admin Dashboard & Cloudinary Uploads",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      github: "https://github.com/OmkarDThombare/vehicle-marketplace",
    },
    {
      title: "CareerBridge – Job Portal",
      description:
        "A role-based job portal connecting students and recruiters with secure authentication and application tracking.",
      highlights: [
        "Student & Recruiter Roles",
        "Resume Upload & Job Applications",
        "Protected REST APIs",
      ],
      tech: ["React", "Node.js", "MongoDB", "Redux Toolkit"],
      github: "https://github.com/OmkarDThombare/CareerBridge",
    },
    {
      title: "BookStore App",
      description:
        "A full-stack bookstore where visitors browse free books and registered users access categorized paid collections.",
      highlights: [
        "Secure User Authentication",
        "Search & Categorized Listings",
        "Responsive Tailwind UI",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/OmkarDThombare/bookVerse",
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <SectionHeader title="Projects" />

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10
                         p-5 md:p-6 rounded-2xl flex flex-col
                         hover:bg-white/10 hover:-translate-y-2
                         transition duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-3 space-y-1 text-sm text-gray-400 flex-1">
                {project.highlights.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                               bg-white/10 border border-white/10
                               text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium
                             text-gray-300 hover:text-purple-500 transition"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;