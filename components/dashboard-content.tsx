"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { 
  Download, 
  FileText, 
  ChevronRight,
  BookOpen
} from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { useSession } from "next-auth/react"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app this would come from the database
const userCourses = [
  {
    id: "ai-income-mastery",
    title: "AI Income Mastery",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1",
    progress: 45,
    lastAccessed: "2023-04-10T14:30:00Z",
    pdfUrl: "/courses/ai-income-mastery.pdf"
  }
]

export function DashboardContent() {
  const { data: session } = useSession()
  const [isPdfViewOpen, setIsPdfViewOpen] = useState(false)
  const [activeCourse, setActiveCourse] = useState<typeof userCourses[0] | null>(null)
  
  return (
    <div className="w-full">
      {/* Dashboard Header */}
      <section className="w-full py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#031122]/50 to-[#031122] z-[-1]" />
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-glow">
              Welcome <span className="text-[#00ff99]">{session?.user?.name || "back"}</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-2xl">
              Access your purchased courses and track your learning progress.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* My Courses */}
      <section className="w-full py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-orbitron font-bold mb-8">
              My Courses
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userCourses.length > 0 ? userCourses.map((course) => (
                <motion.div 
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="glass border border-white/10 rounded-lg overflow-hidden"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={800}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031122] to-transparent opacity-80" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-orbitron font-bold">
                        {course.title}
                      </h3>
                      <Badge className="bg-[#00ff99]/20 text-[#00ff99] border-[#00ff99]/30">
                        In Progress
                      </Badge>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-white/70 mb-2">
                        <span>Course progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2 bg-white/10" indicatorClassName="bg-[#00ff99]" />
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        onClick={() => {
                          setActiveCourse(course)
                          setIsPdfViewOpen(true)
                        }}
                        className="flex-1 bg-[#00ff99] hover:bg-[#00ff99]/90 text-[#031122]"
                      >
                        <BookOpen className="mr-2 h-4 w-4" /> Read Online
                      </Button>
                      
                      <Button
                        variant="outline"
                        className="flex-1 border-[#00ff99]/30 text-white hover:border-[#00ff99] hover:bg-[#00ff99]/10"
                      >
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full glass border border-white/10 rounded-lg p-8 text-center">
                  <FileText className="h-12 w-12 text-white/30 mx-auto mb-4" />
                  <h3 className="text-xl font-orbitron font-bold mb-2">
                    No courses purchased yet
                  </h3>
                  <p className="text-white/70 mb-6">
                    Explore our courses to start your AI income journey.
                  </p>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122]"
                  >
                    <a href="/courses">
                      Browse Courses <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* PDF Viewer Dialog */}
      <Dialog
        open={isPdfViewOpen}
        onOpenChange={(open) => {
          setIsPdfViewOpen(open)
          if (!open) setActiveCourse(null)
        }}
      >
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 border-b border-white/10">
            <DialogTitle className="font-orbitron text-xl">
              {activeCourse?.title}
            </DialogTitle>
            <DialogDescription>
              Viewing online course material
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow h-full bg-[#031122] p-4">
            <div className="w-full h-full flex items-center justify-center text-white/70">
              <div className="text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-white/30" />
                <p>PDF viewer would be embedded here</p>
                <p className="text-sm text-white/50 mt-2">Using Mozilla PDF.js or a similar viewer</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}