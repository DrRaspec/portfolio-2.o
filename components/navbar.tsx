"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Download } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (!mounted) return // safety
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/images/logo.png" alt="Dr Raspec Logo" className="w-full h-full object-cover" />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button>

            <a
              href="/Yong-Bunleng.pdf"
              download="Yong-Bunleng.pdf"
              className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/Yong-Bunleng.pdf"
                download="Yong-Bunleng.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors mt-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
