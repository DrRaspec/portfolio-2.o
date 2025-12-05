"use client"

import type React from "react"

import { useState } from "react"
import { Send, Github, Linkedin, Mail, Smartphone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">Let's Build Something</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing
          together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-[var(--primary-hover)] transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/DrRaspec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yong-bunleng-ybl369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:yong.bunleng.cs@gmail.com"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+85561214642"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:-translate-y-1"
                  aria-label="Phone"
                >
                  <Smartphone className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="text-muted-foreground">Based in Phnom Penh, Cambodia. Available worldwide.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">© 2025 Dr Raspec. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
