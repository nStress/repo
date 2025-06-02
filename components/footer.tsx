"use client"

import Link from "next/link"
import { Cpu, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="h-5 w-5" />, href: "#", label: "YouTube" },
  ]
  
  const footerLinks = [
    { title: "Company", links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ]},
    { title: "Resources", links: [
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Events", href: "/events" },
    ]},
    { title: "Legal", links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ]},
  ]
  
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-[#00ff99]" />
              <span className="font-orbitron font-bold text-xl text-glow">
                AI<span className="text-[#00ff99]">Income</span>Academy
              </span>
            </Link>
            <p className="text-white/70 text-sm max-w-xs">
              Unlock the future of income generation through AI mastery.
              Step-by-step guidance to financial freedom.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/70 hover:text-[#00ff99] transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 8px rgb(0, 255, 153)"
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Link columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-orbitron text-[#00ff99] text-lg font-medium">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section with copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>© {currentYear} AI Income Academy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with <span className="text-[#00ff99]">♥</span> for the future
          </p>
        </div>
      </div>
    </footer>
  )
}