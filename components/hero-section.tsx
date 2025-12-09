"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Mail } from "lucide-react"

const rotatingTexts = [
  "Building Flutter apps",
  "Developing with Next.js & React",
  "Designing scalable APIs with Spring Boot",
  "Creating desktop apps with C# & Java",
  "Making indie games with Godot",
]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const text = rotatingTexts[currentTextIndex]
    let charIndex = 0
    let timeout: NodeJS.Timeout

    if (isTyping) {
      timeout = setInterval(() => {
        if (charIndex <= text.length) {
          setDisplayText(text.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(timeout)
          setTimeout(() => setIsTyping(false), 2000)
        }
      }, 80)
    } else {
      timeout = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayText(text.slice(0, text.length - charIndex - 1))
          charIndex++
        } else {
          clearInterval(timeout)
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
          setIsTyping(true)
        }
      }, 40)
    }

    return () => clearInterval(timeout)
  }, [currentTextIndex, isTyping])

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 dark:from-primary/10 dark:via-background dark:to-primary/5 animate-gradient" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">Yong Bunleng</h1>
            <h2 className="text-xl sm:text-2xl text-primary font-medium">Full-Stack Software Developer</h2>

            {/* Typewriter Text */}
            <div className="h-8 flex items-center">
              <span className="text-lg text-muted-foreground typewriter-cursor">{displayText}</span>
            </div>

            <div className="space-y-2 text-muted-foreground">
              <p>✓ Building cross-platform mobile apps with Flutter, Swift & Kotlin</p>
              <p>✓ Developing modern web apps with Next.js, React & Angular</p>
              <p>✓ Designing robust backend systems with Spring Boot & Python</p>
              <p>✓ Creating desktop apps with C# & Java</p>
              <p>✓ Making indie games with Godot</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-[var(--primary-hover)] transition-colors"
              >
                View Projects
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center gap-8">
            {/* Floating Device Mockup */}
            <div className="animate-float">
              <div className="relative">
                {/* Image Placeholder */}
                <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-3xl bg-card shadow-2xl dark:shadow-primary/20 border border-border overflow-hidden">
                  <img
                    src="/images/profile.png"
                    alt="Yong Bunleng - Full-Stack Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-2xl blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-2xl blur-xl" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">2+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">7+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
