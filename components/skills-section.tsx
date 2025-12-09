"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Server, Database, Cloud, Code2, Monitor, Globe, Cpu, Gamepad2 } from "lucide-react"

const mobileSkills = [
  { name: "Flutter / Dart", icon: Smartphone },
  { name: "Swift (iOS)", icon: Smartphone },
  { name: "Kotlin (Android)", icon: Smartphone },
]

const webSkills = [
  { name: "Next.js", icon: Globe },
  { name: "React.js", icon: Code2 },
  { name: "Angular", icon: Code2 },
]

const backendSkills = [
  { name: "Spring Boot", icon: Server },
  { name: "Python", icon: Code2 },
  { name: "REST API Design", icon: Cloud },
  { name: "SQL Databases", icon: Database },
]

const desktopSkills = [
  { name: "C++", icon: Cpu },
  { name: "C# (WPF)", icon: Monitor },
  { name: "Java (JavaFX)", icon: Code2 },
]

const gameSkills = [{ name: "Godot Engine", icon: Gamepad2 }]

function SkillCard({
  skill,
  index,
}: { skill: { name: string; icon: React.ComponentType<{ className?: string }> }; index: number }) {
  const Icon = skill.icon
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: "forwards" }}
    >
      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </div>
  )
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Skills</h2>

        {isVisible && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Mobile Development */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-primary" />
                Mobile Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {mobileSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                Web Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {webSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index + mobileSkills.length} />
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Server className="w-6 h-6 text-primary" />
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index + mobileSkills.length + webSkills.length} />
                ))}
              </div>
            </div>

            {/* Desktop Development */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Monitor className="w-6 h-6 text-primary" />
                Desktop Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {desktopSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index + mobileSkills.length + webSkills.length + backendSkills.length}
                  />
                ))}
              </div>
            </div>

            {/* Game Development */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-primary" />
                Game Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {gameSkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index + mobileSkills.length + webSkills.length + backendSkills.length + desktopSkills.length}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
