"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Server, ExternalLink } from "lucide-react"

const mobileProjects = [
  {
    title: "RideMate – Transport Companion App",
    description: "Companion app for ride booking and tracking with live map + chat.",
    badges: ["Flutter", "Firebase", "Google Maps API"],
    role: "Lead Mobile Developer",
    features: ["Live tracking", "Chat", "Push notifications"],
  },
  {
    title: "FoodDash – Delivery App",
    description: "Modern food delivery application with real-time order tracking.",
    badges: ["Flutter", "REST API", "Stripe"],
    role: "Mobile Developer",
    features: ["Order tracking", "Payments", "User profiles"],
  },
]

const backendProjects = [
  {
    title: "OrderFlow – Scalable Order API",
    description: "Order management API handling thousands of daily transactions.",
    badges: ["Spring Boot", "MySQL", "Redis", "Docker"],
    role: "Back-end Engineer",
    features: ["Authentication", "Order lifecycle", "Reporting APIs"],
  },
  {
    title: "AuthCore – Authentication Service",
    description: "Secure authentication and session management service.",
    badges: ["Laravel", "JWT", "Redis"],
    role: "Back-end Developer",
    features: ["Secure auth", "Session handling", "Token refresh"],
  },
]

function ProjectCard({ project, index }: { project: (typeof mobileProjects)[0]; index: number }) {
  return (
    <div
      className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-primary/10 transition-all duration-300 group animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: "forwards" }}
    >
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.badges.map((badge) => (
          <span key={badge} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
            {badge}
          </span>
        ))}
      </div>

      <div className="space-y-2 text-sm">
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">Role:</span> {project.role}
        </p>
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">Features:</span> {project.features.join(", ")}
        </p>
      </div>
    </div>
  )
}

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Selected Projects</h2>

        {isVisible && (
          <div className="space-y-12">
            {/* Mobile Apps */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Smartphone className="w-6 h-6 text-primary" />
                Mobile Apps
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {mobileProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>

            {/* Backend Systems */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Server className="w-6 h-6 text-primary" />
                Back-end Systems
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {backendProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index + 2} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
