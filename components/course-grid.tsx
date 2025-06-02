"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const courses = [
  {
    id: "ai-income-mastery",
    title: "AI Income Mastery",
    slug: "ai-income-mastery",
    price: 197,
    rating: 4.9,
    reviewCount: 247,
    imageFront: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
    imageBack: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
    shortDescription: "The complete system to generate passive income using artificial intelligence.",
    benefits: [
      "5 Proven AI Income Models",
      "Step-by-step Implementation",
      "Done-for-you Templates",
      "Lifetime Updates"
    ]
  },
  {
    id: "ai-marketing-automation",
    title: "AI Marketing Automation",
    slug: "ai-marketing-automation",
    price: 149,
    rating: 4.7,
    reviewCount: 183,
    imageFront: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
    imageBack: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
    shortDescription: "Automate your marketing with AI and 10x your results while working less.",
    benefits: [
      "AI Content Generation",
      "Automated Lead Generation",
      "Smart Email Sequences",
      "Performance Analytics"
    ]
  },
  {
    id: "ai-product-creation",
    title: "AI Product Creation",
    slug: "ai-product-creation",
    price: 177,
    rating: 4.8,
    reviewCount: 156,
    imageFront: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
    imageBack: "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
    shortDescription: "Create and sell digital products using AI in less than 7 days.",
    benefits: [
      "Digital Product Blueprint",
      "AI Creation Tools Access",
      "Sales Page Templates",
      "Launch Strategy"
    ]
  }
]

export function CourseGrid() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)
  
  const handleCardFlip = (id: string) => {
    if (flippedCard === id) {
      setFlippedCard(null)
    } else {
      setFlippedCard(id)
    }
  }
  
  return (
    <section className="w-full py-12 px-4 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              className="perspective h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div 
                className={`relative w-full h-full hover-flip transition-all duration-300 cursor-pointer`}
                onClick={() => handleCardFlip(course.id)}
              >
                <div className="flip-card-inner w-full h-full">
                  {/* Front of Card */}
                  <div className="flip-card-front absolute w-full h-full">
                    <div className="glass border border-white/10 rounded-lg overflow-hidden h-full flex flex-col">
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={course.imageFront}
                          alt={course.title}
                          width={800}
                          height={500}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#031122] to-transparent opacity-80" />
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-[#00ff99] fill-[#00ff99]' : 'text-gray-400'}`}
                            />
                          ))}
                          <span className="text-white/70 text-sm ml-2">({course.reviewCount})</span>
                        </div>
                        
                        <h3 className="text-xl font-orbitron font-bold mb-2">
                          {course.title}
                        </h3>
                        
                        <p className="text-white/70 mb-4 flex-grow">
                          {course.shortDescription}
                        </p>
                        
                        <div className="mt-auto">
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-white">${course.price}</span>
                            <span className="text-[#00ff99] text-sm font-medium">Tap to see benefits</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="flip-card-back absolute w-full h-full">
                    <div className="glass border border-[#00ff99]/30 rounded-lg overflow-hidden h-full flex flex-col p-6">
                      <h3 className="text-xl font-orbitron font-bold mb-6 text-[#00ff99]">
                        What You'll Get:
                      </h3>
                      
                      <ul className="space-y-4 flex-grow mb-6">
                        {course.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-[#00ff99]/20 flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-[#00ff99] text-sm">✓</span>
                            </div>
                            <span className="text-white">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto space-y-3">
                        <Button 
                          asChild
                          className="w-full bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium"
                        >
                          <Link href={`/courses/${course.slug}`}>
                            View Course
                          </Link>
                        </Button>
                        
                        <Button 
                          variant="outline"
                          asChild
                          className="w-full border-[#00ff99]/30 text-white hover:border-[#00ff99] hover:bg-[#00ff99]/10"
                        >
                          <Link href={`/courses/${course.slug}`}>
                            Learn More <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}