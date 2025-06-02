"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap } from "lucide-react"
import Link from "next/link"

export function TypewriterHero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#031122] z-[-1]" />
      
      {/* Content Container */}
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Animated Subtitle */}
        <motion.p 
          className="text-[#00ff99] font-orbitron tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          THE ULTIMATE AI INCOME BLUEPRINT
        </motion.p>
        
        {/* Main Heading */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transform Your Future<br />with 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff99] to-[#009dff] ml-2">
            AI Mastery
          </span>
        </motion.h1>
        
        {/* Typewriter Effect */}
        <motion.div
          className="h-16 text-xl md:text-2xl lg:text-3xl font-medium text-white/90"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typewriter
            options={{
              strings: [
                'Master AI. Earn Income. Future-proof Yourself.',
                'Create Passive Income Streams With AI.',
                'Learn Once. Profit Forever.',
                'Join The AI Revolution Today.'
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 20,
            }}
          />
        </motion.div>
        
        {/* Description */}
        <motion.p 
          className="text-white/80 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our comprehensive step-by-step course reveals the exact methods used by AI entrepreneurs to generate consistent income in today's AI-driven economy.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            asChild
            className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105 transform"
            size="lg"
          >
            <Link href="/courses">
              Get The Course <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            asChild
            className="border-[#00ff99]/30 text-white hover:border-[#00ff99] hover:bg-[#00ff99]/10 transition-all font-medium text-lg px-8 py-6"
            size="lg"
          >
            <Link href="/courses">
              Learn More <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Animated down arrow */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#00ff99]/50 flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-[#00ff99] rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}