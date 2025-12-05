"use client"

import { useEffect, useRef, useState } from "react"
import { Search, PenTool, Code, Rocket, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Understand business goals & user needs",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Define API contracts, flows, UI structure",
  },
  {
    icon: Code,
    title: "Build",
    description: "Implement mobile UI & backend services",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Publish apps and deploy APIs",
  },
  {
    icon: BarChart3,
    title: "Monitor",
    description: "Logs, performance, improvements",
  },
]

export function ProcessSection() {
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
    <section id="process" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">How I Work</h2>

        {isVisible && (
          <>
            {/* Desktop Horizontal Stepper */}
            <div className="hidden md:flex items-start justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-border" />
              <div
                className="absolute top-10 left-0 h-0.5 bg-primary transition-all duration-1000"
                style={{ width: "100%" }}
              />

              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="flex flex-col items-center text-center relative z-10 w-1/5 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: "forwards" }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground px-2">{step.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Mobile Vertical Stepper */}
            <div className="md:hidden space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: "forwards" }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
