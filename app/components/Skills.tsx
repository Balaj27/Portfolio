import { ArrowUpRight, Code2, Cloud, Database, Wrench } from "lucide-react"
import type { ReactNode } from "react"

interface SkillGroup {
  number: string
  title: string
  description: string
  icon: ReactNode
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Interface engineering",
    description: "Responsive, accessible interfaces with a focus on clarity, motion, and detail.",
    icon: <Code2 size={22} strokeWidth={1.7} />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI"],
  },
  {
    number: "02",
    title: "Product foundations",
    description: "The APIs, services, and data models that make digital products dependable.",
    icon: <Database size={22} strokeWidth={1.7} />,
    skills: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    number: "03",
    title: "Shipping & infrastructure",
    description: "Practical deployment workflows that keep projects ready for their next release.",
    icon: <Cloud size={22} strokeWidth={1.7} />,
    skills: ["AWS", "Docker", "Vercel", "Cloudflare", "CI/CD", "Kubernetes"],
  },
  {
    number: "04",
    title: "Ways of working",
    description: "A thoughtful toolkit for collaborating, testing ideas, and improving the outcome.",
    icon: <Wrench size={22} strokeWidth={1.7} />,
    skills: ["Git", "Linux", "Figma", "Jest", "REST APIs", "Agile/Scrum"],
  },
]

const featuredTools = ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS"]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-gray-800 bg-gray-900 py-24 md:py-32">
      <div className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-blue-500 to-transparent" />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-blue-400">
                <span className="h-px w-8 bg-blue-400" />
                What I use
              </p>
              <h2 className="max-w-md text-4xl font-bold leading-tight text-white md:text-5xl">
                A practical stack for building <span className="text-blue-400">useful things.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-gray-400">
                From the first screen to the final deployment, I choose tools that keep the experience simple for the
                people using it and maintainable for the people working on it.
              </p>

              <div className="mt-10 border-l border-blue-500/50 pl-5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Most used</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {featuredTools.map((tool) => (
                    <span key={tool} className="text-sm text-gray-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700">
              {skillGroups.map((group) => (
                <article
                  key={group.number}
                  className="group grid gap-5 border-b border-gray-700 py-8 transition-colors duration-300 hover:border-blue-400/70 md:grid-cols-[60px_1fr] md:gap-7"
                >
                  <div className="flex items-start justify-between md:block">
                    <span className="font-mono text-sm text-gray-500">{group.number}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-blue-400 transition-colors duration-300 group-hover:border-blue-400 group-hover:bg-blue-400 group-hover:text-gray-950 md:mt-6">
                      {group.icon}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                      <ArrowUpRight className="mt-1 shrink-0 text-gray-600 transition-colors duration-300 group-hover:text-blue-400" size={20} />
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">{group.description}</p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="text-sm text-gray-300 before:mr-2 before:text-blue-400 before:content-['/']">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
