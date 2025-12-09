"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Globe, ExternalLink, Monitor, Gamepad2 } from "lucide-react"

const mobileProjects = [
  {
    title: "DIGI Express",
    description:
      "A mobile application that helps users purchase products from China with seamless ordering and tracking.",
    badges: ["Flutter", "REST API", "E-commerce"],
    role: "Mobile Developer",
    features: ["Product browsing", "Order management", "Payment integration"],
  },
  {
    title: "Kork App",
    description: "A school project application designed for booking tickets with an intuitive user interface.",
    badges: ["Flutter", "Firebase", "Booking System"],
    role: "Mobile Developer",
    features: ["Ticket booking", "User authentication", "Real-time updates"],
  },
]

const webProjects = [
  {
    title: "Phone Shop Management System",
    description: "A comprehensive web application for managing phone shop inventory, sales, and customer data.",
    badges: ["Angular", "Spring Boot", "Full-Stack"],
    role: "Full-Stack Developer",
    features: ["Inventory management", "Sales tracking", "Customer management"],
  },
  {
    title: "Student Management System",
    description:
      "A complete full-stack system for handling student and school operations with modern web technologies.",
    badges: ["Spring Boot", "MySQL", "Full-Stack"],
    role: "Full-Stack Developer",
    features: ["Student CRUD operations", "Course management", "Grade tracking"],
  },
]

const desktopProjects = [
  {
    title: "BLT QR Generator",
    description: "A desktop application for generating QR codes with customizable options and export features.",
    badges: ["C#", "WPF", "Desktop App"],
    role: "Desktop Developer",
    features: ["QR code generation", "Customization options", "Export functionality"],
  },
  {
    title: "Coffee Shop POS",
    description: "A point-of-sale desktop application for managing coffee shop orders and transactions.",
    badges: ["Java", "JavaFX", "Desktop App"],
    role: "Desktop Developer",
    features: ["Order management", "Transaction processing", "Inventory tracking"],
  },
]

const gameProjects = [
  {
    title: "Pixel Adventure Game",
    description: "A 2D platformer game with pixel art graphics, multiple levels, and engaging gameplay mechanics.",
    badges: ["Godot Engine", "GDScript", "2D Platformer"],
    role: "Game Developer",
    features: ["Multiple levels", "Character animations", "Platform mechanics"],
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

            {/* Web Applications */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Globe className="w-6 h-6 text-primary" />
                Web Applications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {webProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index + mobileProjects.length} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Monitor className="w-6 h-6 text-primary" />
                Desktop Applications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {desktopProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index + mobileProjects.length + webProjects.length}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Gamepad2 className="w-6 h-6 text-primary" />
                Games
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {gameProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index + mobileProjects.length + webProjects.length + desktopProjects.length}
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
