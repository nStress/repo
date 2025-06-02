"use client"

import { motion } from "framer-motion"
import { Brain, Coins, LineChart, School, PencilRuler, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Fundamentals",
    description: "Master the core concepts of AI and how to apply them for income generation.",
    color: "bg-[#00ff99]/10 text-[#00ff99] border-[#00ff99]/30",
    textColor: "text-[#00ff99]"
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Passive Income Streams",
    description: "Build multiple AI-powered income channels that work for you 24/7.",
    color: "bg-[#009dff]/10 text-[#009dff] border-[#009dff]/30",
    textColor: "text-[#009dff]"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Growth Strategies",
    description: "Scale your AI businesses from side hustle to full-time income.",
    color: "bg-[#00eeff]/10 text-[#00eeff] border-[#00eeff]/30",
    textColor: "text-[#00eeff]"
  },
  {
    icon: <School className="h-6 w-6" />,
    title: "Advanced Techniques",
    description: "Learn expert-level AI strategies most courses never reveal.",
    color: "bg-[#00ff99]/10 text-[#00ff99] border-[#00ff99]/30",
    textColor: "text-[#00ff99]"
  },
  {
    icon: <PencilRuler className="h-6 w-6" />,
    title: "Step-by-Step Projects",
    description: "Follow practical implementations you can start using immediately.",
    color: "bg-[#009dff]/10 text-[#009dff] border-[#009dff]/30",
    textColor: "text-[#009dff]"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Access",
    description: "Join our network of AI entrepreneurs for support and collaboration.",
    color: "bg-[#00eeff]/10 text-[#00eeff] border-[#00eeff]/30",
    textColor: "text-[#00eeff]"
  },
]

export function FeatureShowcase() {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-glow">
            The Complete <span className="text-[#00ff99]">AI Income</span> System
          </h2>
          <p className="text-white/70 text-lg">
            Everything you need to build profitable AI-powered income streams, even if you're starting from zero.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass border border-white/10 rounded-lg p-6 h-full hover:border-[#00ff99]/30 transition-all duration-300">
                <div 
                  className={cn(
                    "w-12 h-12 rounded-md flex items-center justify-center mb-4 border",
                    feature.color
                  )}
                >
                  {feature.icon}
                </div>
                <h3 className={cn(
                  "text-xl font-orbitron font-bold mb-3 group-hover:text-glow transition-all duration-300",
                  feature.textColor
                )}>
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}