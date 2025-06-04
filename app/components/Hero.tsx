"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative" >
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{marginTop: "10%"}}>
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Muhammad Balaj
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building scalable applications. I love turning complex
            problems into simple, beautiful designs.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Balaj27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-balaj-javed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.balajjaved1@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#experience"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>

  
    </section>
  )
}
