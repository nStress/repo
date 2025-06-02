import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About | AI Income Academy",
  description: "Learn more about AI Income Academy and our mission to help you succeed with AI",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#031122]/50 to-[#031122] z-[-1]" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-glow">
            About <span className="text-[#00ff99]">Us</span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We're on a mission to help people leverage artificial intelligence
            to create sustainable income streams and achieve financial freedom.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="w-full py-12 px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="glass border border-white/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-[#00ff99]">
              Our Story
            </h2>
            <p className="text-white/80 mb-6">
              AI Income Academy was founded by a team of AI experts and entrepreneurs
              who recognized the immense potential of artificial intelligence to
              transform how people earn income in the digital age.
            </p>
            <p className="text-white/80 mb-6">
              We've helped thousands of students from all walks of life harness the
              power of AI to build profitable online businesses and create multiple
              streams of income.
            </p>
            <p className="text-white/80">
              Our comprehensive courses combine cutting-edge AI strategies with
              practical, step-by-step guidance to ensure your success in the
              AI-driven economy.
            </p>
          </div>
          
          <div className="glass border border-white/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-[#009dff]">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                  Excellence
                </h3>
                <p className="text-white/80">
                  We maintain the highest standards in our course materials and
                  student support to ensure your success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                  Innovation
                </h3>
                <p className="text-white/80">
                  We stay at the forefront of AI technology to bring you the most
                  effective strategies and tools.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                  Community
                </h3>
                <p className="text-white/80">
                  We foster a supportive environment where students can learn,
                  collaborate, and grow together.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                  Results
                </h3>
                <p className="text-white/80">
                  We focus on practical, actionable strategies that deliver real
                  financial results for our students.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center glass border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-orbitron font-bold mb-4 text-glow">
              Ready to Start Your <span className="text-[#00ff99]">AI Journey</span>?
            </h2>
            
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join thousands of successful students who are already leveraging AI
              to create sustainable income streams.
            </p>
            
            <Button 
              asChild
              className="bg-gradient-to-r from-[#00ff99] to-[#009dff] text-[#031122] font-medium px-8 py-6 hover:opacity-90 transition-all"
              size="lg"
            >
              <Link href="/courses">
                Browse Courses <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}