"use client"

import { motion } from "framer-motion"

export function CourseHero() {
  return (
    <section className="w-full py-32 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031122]/50 to-[#031122] z-[-1]" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI Income <span className="text-[#00ff99]">Courses</span>
        </motion.h1>
        
        <motion.p
          className="text-lg text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive, step-by-step training programs designed to help you master AI and create sustainable income streams.
        </motion.p>
      </div>
    </section>
  )
}