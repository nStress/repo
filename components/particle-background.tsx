"use client"

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Particle setup
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, window.innerWidth / 20)
    
    // Colors based on theme
    const primaryColor = 'rgba(0, 255, 153, '
    const secondaryColor = 'rgba(0, 157, 255, '
    
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      colorShift: number
      
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
        this.alpha = Math.random() * 0.2 + 0.05
        this.colorShift = Math.random()
        this.color = this.colorShift < 0.5 ? primaryColor : secondaryColor
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
        
        // Slowly shift between primary and secondary colors
        this.colorShift += 0.001
        if (this.colorShift > 1) this.colorShift = 0
        
        this.color = this.colorShift < 0.5 ? primaryColor : secondaryColor
      }
      
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + this.alpha + ')'
        ctx.fill()
      }
    }
    
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }
    
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const opacity = 1 - distance / 100
            ctx.strokeStyle = particlesArray[a].color + opacity * 0.2 + ')'
            ctx.lineWidth = particlesArray[a].size / 10
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      
      connectParticles()
      requestAnimationFrame(animate)
    }
    
    init()
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}