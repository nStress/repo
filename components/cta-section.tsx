"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="w-full py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031122] via-[#041e36] to-[#031122] z-[-1]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[40%] bg-[#00ff99] opacity-[0.03] blur-[100px] rounded-full z-[-1]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-orbitron leading-tight text-glow">
            Ready to <span className="text-[#00ff99]">Transform</span> Your <br />Financial Future?
          </h2>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Join thousands of successful students who are already leveraging AI to create sustainable income streams. The future of work is changing—don't get left behind.
          </p>
          
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              asChild
              className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105 transform"
              size="lg"
            >
              <Link href="/courses">
                Start Your AI Journey Today <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <p className="text-white/60 text-sm mt-4">
              30-day money-back guarantee. No questions asked.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}