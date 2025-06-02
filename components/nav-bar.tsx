"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSession, signIn, signOut } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Cpu, Menu, User, X } from 'lucide-react'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Courses', href: '/courses' },
  { title: 'About', href: '/about' },
]

export function NavBar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#031122]/90 backdrop-blur-md py-3 shadow-md" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Cpu className="h-6 w-6 text-[#00ff99]" />
          <span className="font-orbitron font-bold text-xl text-glow">
            AI<span className="text-[#00ff99]">Income</span>Academy
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.href} 
              href={item.href} 
              active={pathname === item.href}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
        
        {/* Auth Buttons or User Menu */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="border border-[#00ff99]/30 hover:border-[#00ff99] hover:bg-[#00ff99]/10 transition-all duration-300"
                >
                  {session.user?.name || 'Account'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass border border-[#00ff99]/20 w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-white hover:bg-[#00ff99]/10 hover:text-[#00ff99]"
                onClick={() => signIn()}
              >
                Sign In
              </Button>
              <Button 
                className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium hover:opacity-90 transition-all"
                onClick={() => signIn()}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#00ff99]" />
          ) : (
            <Menu className="h-6 w-6 text-[#00ff99]" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden glass absolute top-full left-0 w-full py-4 px-6 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-2 font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#00ff99] text-glow"
                    : "text-white/80 hover:text-white"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              {session ? (
                <>
                  <Link 
                    href="/dashboard" 
                    className="py-2 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    className="py-2 text-left font-medium text-red-400"
                    onClick={() => {
                      signOut()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    className="justify-start p-0"
                    onClick={() => {
                      signIn()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium"
                    onClick={() => {
                      signIn()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
}

function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative font-medium transition-colors",
        active ? "text-[#00ff99]" : "text-white/80 hover:text-white"
      )}
    >
      {children}
      {active && (
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#00ff99]"
          layoutId="navbar-underline"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}