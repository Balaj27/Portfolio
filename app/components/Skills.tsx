"use client"

import type React from "react"

import { Code, Database, Cloud, Wrench } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: { name: string; level: number }[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Material UI", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="text-green-400" size={24} />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 90 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-purple-400" size={24} />,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="text-orange-400" size={24} />,
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 80 },
        { name: "Figma", level: 70 },
        { name: "Jest/Testing", level: 85 },
        { name: "Agile/Scrum", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Skills</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
