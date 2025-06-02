"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md">
        <motion.h1
          className="text-7xl font-orbitron font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00ff99]">4</span>
          <span className="text-[#009dff]">0</span>
          <span className="text-[#00ff99]">4</span>
        </motion.h1>
        
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-orbitron font-bold text-white">
            Page Not Found
          </h2>
          
          <p className="text-white/70">
            The page you're looking for doesn't exist or has been moved to another URL.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            asChild
            className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium"
          >
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}