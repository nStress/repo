"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for beginners entering the AI income world",
    price: 97,
    features: [
      "Complete AI Income Course PDF",
      "Basic Email Support",
      "30-Day Access to Community",
      "2 Starter AI Project Templates"
    ],
    cta: "Get Started",
    highlight: false,
    color: "border-white/20 hover:border-white/30"
  },
  {
    name: "Professional",
    description: "The complete package for serious AI entrepreneurs",
    price: 197,
    features: [
      "Everything in Starter",
      "Priority Email Support",
      "Lifetime Community Access",
      "10 Premium AI Project Templates",
      "Monthly Live Q&A Sessions",
      "AI Tool Credits ($50 value)"
    ],
    cta: "Get Pro Access",
    highlight: true,
    color: "border-[#00ff99]/50 hover:border-[#00ff99]"
  },
  {
    name: "Lifetime",
    description: "Ultimate access with all future updates included",
    price: 497,
    features: [
      "Everything in Professional",
      "1-on-1 Coaching Call",
      "Early Access to New Modules",
      "All Future Course Updates",
      "White-label Rights to Templates",
      "Affiliate Program Access (30% commission)"
    ],
    cta: "Get Lifetime Access",
    highlight: false,
    color: "border-[#009dff]/30 hover:border-[#009dff]/50"
  }
]

export function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
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
            Choose Your <span className="text-[#00ff99]">AI Income</span> Path
          </h2>
          <p className="text-white/70 text-lg">
            Select the plan that best fits your goals and start your journey to AI-powered income today.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={cn(
                "perspective h-full",
                plan.highlight ? "md:scale-105 md:-translate-y-2" : ""
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card 
                className={cn(
                  "h-full glass border transition-all duration-300",
                  plan.highlight ? "neon-border" : "",
                  plan.color
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-[#00ff99] text-[#031122] text-xs font-bold py-1 px-3 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="font-orbitron text-2xl">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/70 ml-2">one-time</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#00ff99] shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button
                    className={cn(
                      "w-full text-lg py-6 transition-all",
                      plan.highlight 
                        ? "bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] hover:opacity-90" 
                        : "bg-white/10 text-white hover:bg-white/20"
                    )}
                    asChild
                  >
                    <Link href="/courses">
                      {plan.cta}
                      {plan.highlight && <Zap className="ml-2 h-5 w-5" />}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}