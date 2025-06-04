"use client"

import { useState } from "react"
import { Calendar, MapPin } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  location: string
  duration: string
  description: string[]
  technologies: string[]
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Replace with your actual experience data
  const experiences: ExperienceItem[] = [
    {
      title: "Web Developer Intern",
      company: "Maida.co",
      location: "Rawalpindi, Pakistan",
      duration: "July 2024 - August 2024",
      description: [
        "Developed a comprehensive employee portal using React.js, Material UI, Node.js, and Firebase",
        "Integrated real-time data updates and authentication using Firebase services",
        "Collaborated with internal teams to gather requirements and implement key HR features",
        "Enhanced user experience with responsive UI and efficient backend APIs",
      ],
      technologies: ["React.js", "Node.js", "Firebase", "Material UI"],
    },
    {
      title: "Web Developer Intern",
      company: "CodSoft",
      location: "Remote",
      duration: " January 2024 - February 2024",
      description: [
        "Completed a remote internship focused on full-stack web development",
        "Designed and developed a responsive landing page using HTML, CSS, and JavaScript",
        "Built a functional job portal with modern UI components and dynamic job listings",
        "Applied version control and project organization techniques to ensure smooth remote collaboration",
      ],
      technologies: ["React.js", "Node.js", "MongoDB"],
    },

  ]

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experience</span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Company List */}
            <div className="lg:w-1/3">
              <div className="space-y-2">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeIndex === index ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <div className="font-semibold">{exp.company}</div>
                    <div className="text-sm opacity-75">{exp.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Details */}
            <div className="lg:w-2/3">
              <div className="bg-gray-700 rounded-lg p-8 min-h-[400px]">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{experiences[activeIndex].title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {experiences[activeIndex].duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {experiences[activeIndex].location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {experiences[activeIndex].description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeIndex].technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
