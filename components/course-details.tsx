"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  Check, 
  ChevronDown, 
  Clock, 
  Download, 
  FileText, 
  ShieldCheck, 
  Star, 
  Users, 
  Zap 
} from "lucide-react"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app this would come from the database
const coursesData = {
  "ai-income-mastery": {
    title: "AI Income Mastery",
    tagline: "The Complete System to Generate Passive Income Using AI",
    description: "Discover the exact strategies, tools, and techniques that successful entrepreneurs use to create multiple income streams with artificial intelligence. This comprehensive course walks you through everything from fundamental concepts to advanced implementations that you can start using today.",
    price: 197,
    salePrice: 147,
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1",
    duration: "8 weeks",
    students: 2476,
    level: "Beginner to Advanced",
    updatedAt: "Last updated April 2025",
    features: [
      "5 Proven AI Income Models",
      "25+ Hours of Video Content",
      "Done-for-you Templates",
      "Private Community Access",
      "AI Tool Credits ($50 value)",
      "Lifetime Updates",
      "30-Day Money-Back Guarantee"
    ],
    modules: [
      {
        title: "Module 1: AI Income Fundamentals",
        lessons: [
          "Introduction to AI Income Opportunities",
          "Understanding AI Tools for Profit",
          "Setting Up Your AI Business Foundation",
          "Essential AI Terminology and Concepts"
        ]
      },
      {
        title: "Module 2: AI Content Creation Engine",
        lessons: [
          "Building Your Content Factory with AI",
          "Monetizing AI-Generated Content",
          "Quality Control and Human Touch",
          "Scaling Your Content Business"
        ]
      },
      {
        title: "Module 3: AI Service Business Blueprint",
        lessons: [
          "High-Ticket AI Services That Sell",
          "Finding and Closing Clients",
          "Delivery and Automation Systems",
          "Scaling Beyond Your Time"
        ]
      },
      {
        title: "Module 4: AI Product Creation and Sales",
        lessons: [
          "Identifying Profitable AI Product Opportunities",
          "Building Your First AI Product",
          "Marketing and Launch Strategy",
          "Scaling Your AI Product Business"
        ]
      },
      {
        title: "Module 5: Advanced AI Income Strategies",
        lessons: [
          "AI Trading and Investment Systems",
          "Building AI SaaS Products",
          "AI Consulting and Expert Positioning",
          "Future-Proofing Your AI Business"
        ]
      }
    ]
  },
  // Add other courses here
  "ai-marketing-automation": {
    title: "AI Marketing Automation",
    tagline: "Automate Your Marketing and 10x Your Results While Working Less",
    description: "Leverage the power of AI to create, manage, and optimize your marketing campaigns with minimal human intervention. Learn how to set up systems that generate leads, nurture prospects, and close sales 24/7.",
    price: 149,
    salePrice: null,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1",
    duration: "6 weeks",
    students: 1835,
    level: "Intermediate",
    updatedAt: "Last updated March 2025",
    features: [
      "AI Content Generation Templates",
      "Automated Lead Generation Systems",
      "Smart Email Marketing Sequences",
      "Social Media Automation Tools",
      "Performance Analytics Dashboard",
      "30-Day Money-Back Guarantee"
    ],
    modules: [
      {
        title: "Module 1: AI Marketing Fundamentals",
        lessons: [
          "The AI Marketing Revolution",
          "Essential AI Marketing Tools",
          "Data-Driven Marketing Strategy",
          "Ethical AI Marketing Practices"
        ]
      },
      {
        title: "Module 2: Content Creation Automation",
        lessons: [
          "AI Content Generation at Scale",
          "Repurposing and Optimization",
          "Quality Assurance Systems",
          "Content Distribution Automation"
        ]
      }
    ]
  },
  "ai-product-creation": {
    title: "AI Product Creation",
    tagline: "Create and Sell Digital Products Using AI in Less Than 7 Days",
    description: "Learn the step-by-step process of creating valuable digital products with AI assistance. From research to creation to marketing, this course covers the entire product development lifecycle.",
    price: 177,
    salePrice: 127,
    image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1",
    duration: "4 weeks",
    students: 1247,
    level: "Beginner to Intermediate",
    updatedAt: "Last updated February 2025",
    features: [
      "Digital Product Blueprint",
      "AI Creation Tools Access",
      "Sales Page Templates",
      "Launch Strategy Guide",
      "Pricing Strategy Masterclass",
      "30-Day Money-Back Guarantee"
    ],
    modules: [
      {
        title: "Module 1: AI Product Opportunities",
        lessons: [
          "Identifying Profitable Product Niches",
          "Market Research with AI",
          "Competitor Analysis",
          "Product Validation Methods"
        ]
      },
      {
        title: "Module 2: Rapid Product Creation",
        lessons: [
          "AI-Assisted eBook Creation",
          "Course Development with AI",
          "Template and Tool Creation",
          "Quality Assurance and Refinement"
        ]
      }
    ]
  }
}

interface CourseDetailsProps {
  slug: string
}

export function CourseDetails({ slug }: CourseDetailsProps) {
  const course = coursesData[slug as keyof typeof coursesData]
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#031122]/50 to-[#031122] z-[-1]" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Course Info */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-[#00ff99]/20 text-[#00ff99] border-[#00ff99]/30 mb-4">
                  BESTSELLER
                </Badge>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-4 text-glow">
                  {course.title}
                </h1>
                
                <p className="text-xl text-white/90 mb-6">
                  {course.tagline}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className="h-4 w-4 text-[#00ff99] fill-[#00ff99]"
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-white/70">(4.9/5)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-white/70 mr-1" />
                    <span className="text-white/70">{course.students.toLocaleString()} students</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-white/70 mr-1" />
                    <span className="text-white/70">{course.duration}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-8">
                  {course.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-orbitron font-bold mb-4">
                    What You'll Learn
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-[#00ff99]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[#00ff99] text-sm">✓</span>
                        </div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Pricing Card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="sticky top-24"
              >
                <div className="glass border border-[#00ff99]/30 rounded-lg overflow-hidden neon-border">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={1200}
                      height={630}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031122] to-transparent opacity-80" />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      {course.salePrice ? (
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-[#00ff99]">${course.salePrice}</span>
                          <span className="text-xl text-white/50 line-through">${course.price}</span>
                          <Badge className="bg-[#00ff99]/20 text-[#00ff99] border-[#00ff99]/30 ml-auto">
                            SAVE ${course.price - course.salePrice}
                          </Badge>
                        </div>
                      ) : (
                        <span className="text-3xl font-bold text-[#00ff99]">${course.price}</span>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <Button
                        className="w-full bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium text-lg py-6 hover:opacity-90 transition-all"
                        onClick={() => setIsCheckoutOpen(true)}
                      >
                        Get Instant Access <Zap className="ml-2 h-5 w-5" />
                      </Button>
                      
                      <Button
                        variant="outline"
                        className="w-full border-[#00ff99]/30 text-white hover:border-[#00ff99] hover:bg-[#00ff99]/10 py-6"
                      >
                        Add to Cart
                      </Button>
                    </div>
                    
                    <div className="mt-6 space-y-3 text-white/80 text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[#00ff99]" />
                        <span>Full lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4 text-[#00ff99]" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#00ff99]" />
                        <span>Community access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#00ff99]" />
                        <span>30-day money-back guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Curriculum */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-glow">
              Course <span className="text-[#00ff99]">Curriculum</span>
            </h2>
            
            <Accordion type="single" collapsible className="mb-12">
              {course.modules.map((module, index) => (
                <AccordionItem 
                  key={index} 
                  value={`module-${index}`} 
                  className="glass border border-white/10 mb-4 overflow-hidden rounded-lg"
                >
                  <AccordionTrigger className="px-6 py-4 text-lg font-orbitron hover:text-[#00ff99] transition-colors">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="space-y-3 pt-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="flex items-center gap-3 text-white/80">
                          <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60">
                            {lessonIndex + 1}
                          </div>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="text-center glass border border-white/10 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-glow">
                Ready to <span className="text-[#00ff99]">Transform</span> Your Financial Future?
              </h3>
              
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Join thousands of successful students who are already leveraging AI to create sustainable income streams.
              </p>
              
              <Button 
                className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium px-8 py-6 hover:opacity-90 transition-all hover:scale-105 transform"
                size="lg"
                onClick={() => setIsCheckoutOpen(true)}
              >
                Get Instant Access <Zap className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-white/60 text-sm mt-4">
                30-day money-back guarantee. No questions asked.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}