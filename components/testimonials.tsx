"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Michael Chen",
    role: "Former Software Engineer",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
    content: "I was skeptical at first, but this course changed everything. I'm now making more with my AI side projects than I did at my full-time job.",
    stars: 5
  },
  {
    name: "Sarah Johnson",
    role: "Digital Marketer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
    content: "The AI Income Academy opened my eyes to opportunities I never knew existed. I've automated 80% of my client work and doubled my income.",
    stars: 5
  },
  {
    name: "David Rodriguez",
    role: "Entrepreneur",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&dpr=1",
    content: "This is the only course that actually delivers on its promises. The step-by-step projects were easy to follow and implement right away.",
    stars: 4
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-20 px-4 bg-[#030d19]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-glow-blue">
            Success <span className="text-[#009dff]">Stories</span>
          </h2>
          <p className="text-white/70 text-lg">
            Join hundreds of students who have transformed their financial future with AI Income Academy.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass border border-white/10 rounded-lg p-8 relative"
            >
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full border-4 border-[#030d19] overflow-hidden">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center pt-6 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.stars ? 'text-[#00ff99] fill-[#00ff99]' : 'text-gray-400'}`}
                  />
                ))}
              </div>
              <p className="text-white/80 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}