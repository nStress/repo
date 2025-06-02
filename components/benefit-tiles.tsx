"use client"

import { motion } from "framer-motion"
import { Lightbulb, TrendingUp, Shield } from "lucide-react"

const benefits = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "AI-Powered Strategies",
    description: "Learn cutting-edge AI techniques that generate income while you sleep.",
    color: "from-[#00ff99] to-[#00cc7a]"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Scale Infinitely",
    description: "Start small and grow your AI income streams without limits.",
    color: "from-[#009dff] to-[#0077c2]"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Future-Proof Skills",
    description: "Develop expertise that will remain valuable as AI continues to evolve.",
    color: "from-[#00eeff] to-[#00b3cc]"
  },
]

export function BenefitTiles() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
  
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-16 text-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why <span className="text-[#00ff99]">AI Income</span> Is The Future
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg"
              variants={itemVariants}
            >
              <div className="glass border border-white/10 rounded-lg p-8 h-full hover:border-[#00ff99]/30 transition-all duration-300 group">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} 
                />
                <div 
                  className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${benefit.color} text-[#031122]`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}