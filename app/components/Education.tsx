"use client"

import { GraduationCap, Award, Calendar } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  duration: string
  gpa?: string
  description: string
  achievements: string[]
}

export default function Education() {
  // Replace with your actual education data
  const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "COMSATS University Islamabad",
    duration: "2022 - 2026",
    description: "Specialized in Software Engineering and Artificial Intelligence",
    achievements: [
      "Developed multiple full-stack projects using MERN stack",
      "Completed final year project on AI-based Career Recommendation System",
      "Participated in national-level programming and startup competitions",
    ],
  },
  {
    degree: "Intermediate of Computer Science",
    institution: "Army Public School & College System",
    duration: "2020 - 2021",
    description: "Focused on Basics of Computer Science and Mathematics",
    achievements: [
      "Scored A+ grade with distinction in Computer Science and Mathematics",
      "Built a basic CRUD web app using HTML, CSS, and JavaScript as a class project",
      "Led the school’s tech club and organized inter-school tech competitions",
    ],
  },
  {
    degree: "Matriculation in Science",
    institution: "Army Public School & College System",
    duration: "2020",
    description: "Completed Matriculation in Science with a strong foundation in Physics, Chemistry, and Mathematics.",
    achievements: [
      "Achieved A+ grade with distinction in all science subjects",
      "Won 1st place in inter-school Science Quiz Competition",
      "Represented school in district-level Mathematics Olympiad",
    ],
  },
];

{/*
  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Certified Kubernetes Administrator",
  ]
*/}
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Education &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Certifications
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-400" />
              Academic Background
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-blue-400 mb-2">{edu.degree}</h4>
                      <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="flex items-center gap-2 text-gray-300 mb-2">
                        <Calendar size={16} />
                        {edu.duration}
                      </div>
                      {edu.gpa && <div className="text-blue-400 font-semibold">GPA: {edu.gpa}</div>}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications 
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="text-blue-400" />
              Professional Certifications
            </h3>
        
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 flex items-center gap-3"
                >
                  <Award className="text-blue-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
