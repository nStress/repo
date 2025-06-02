"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  
  let errorMessage = "An error occurred during authentication"
  
  switch (error) {
    case "Configuration":
      errorMessage = "There is a problem with the server configuration."
      break
    case "AccessDenied":
      errorMessage = "You do not have permission to sign in."
      break
    case "Verification":
      errorMessage = "The verification token has expired or has already been used."
      break
    default:
      if (error) {
        errorMessage = error
      }
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-500" />
          </div>
          
          <h1 className="mt-4 text-2xl font-bold font-orbitron tracking-tight text-glow">
            Authentication Error
          </h1>
          
          <p className="mt-2 text-white/70">
            {errorMessage}
          </p>
          
          <div className="mt-8">
            <Button 
              asChild
              className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium"
            >
              <Link href="/login">
                Try Again
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}