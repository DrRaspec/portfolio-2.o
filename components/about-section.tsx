"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>

        {isVisible && (
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar Placeholder */}
            <div className="flex justify-center animate-fade-in-up">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-card border border-border shadow-xl dark:shadow-primary/10 overflow-hidden">
                <img src="/images/profile.png" alt="Yong Bunleng" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a software developer with <span className="text-primary font-medium">2+ years</span> of hands-on
                  experience building mobile apps, web apps, and backend systems. I work across multiple technologies
                  and platforms.
                </p>
                <p>My expertise includes:</p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>
                      <span className="font-medium text-foreground">Mobile Development:</span> Flutter, Swift, Kotlin
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>
                      <span className="font-medium text-foreground">Web Development:</span> Next.js, React.js, Angular
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>
                      <span className="font-medium text-foreground">Backend Development:</span> Spring Boot, Python
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>
                      <span className="font-medium text-foreground">Desktop Development:</span> C++, C# (WPF), Java
                      (JavaFX)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>
                      <span className="font-medium text-foreground">Game Development:</span> Godot Engine
                    </span>
                  </li>
                </ul>
                <p>
                  I build mobile apps, full-stack systems, desktop software, and small indie games. I focus on clean
                  architecture, maintainable code, and delivering smooth user experiences that solve real-world
                  problems.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
