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
                <img src="/images/profile.png" alt="Dr Raspec" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in software development, I specialize in building cross-platform
                  mobile applications using <span className="text-primary font-medium">Flutter</span> and robust backend
                  systems with <span className="text-primary font-medium">Spring Boot</span> and{" "}
                  <span className="text-primary font-medium">Laravel</span>.
                </p>
                <p>My expertise includes:</p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    Flutter & cross-platform app development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    API integrations (maps, payments, authentication)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    Focus on security, performance, and scalability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    Strong knowledge of REST, microservices, and clean code
                  </li>
                </ul>
                <p>
                  I'm passionate about creating elegant solutions that solve real-world problems while maintaining
                  clean, maintainable code.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
