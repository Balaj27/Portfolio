"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Replace with your actual projects
  const projects: Project[] = [
    {
      title: "SmartUML",
      description: "AI-powered UML diagram generation tool",
      longDescription:
        "A web application that uses AI to generate UML diagrams from natural language descriptions. It supports various diagram types and allows users to edit and export diagrams in multiple formats.",
      image: "/UML.png",
      technologies: ["Next.js", "Node.js", "Material UI", "Gemini API"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://smartuml.online",
      featured: true,
    },
    {
      title: "Alfa Solutions Business Website",
      description: "Professional business website for Alfa Solutions",
      longDescription:
        "A sleek and modern business website designed for Alfa Solutions, showcasing their services, portfolio, and contact information. Built with responsive design principles to ensure a great user experience on all devices.",
      image: "/alfa-sol.png",
      technologies: ["Next.js", "Material UI", "Firebase",],
      githubUrl: "https://github.com/Balaj27/alfa-sol",
      liveUrl: "https://alfa-sol.vercel.app",
      featured: true,
    },
    
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
        </h2>

        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects 
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                <h4 className="text-lg font-bold mb-2 text-blue-400">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
*/}
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
