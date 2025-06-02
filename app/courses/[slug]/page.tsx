import { CourseDetails } from "@/components/course-details"
import { notFound } from "next/navigation"

interface CoursePageProps {
  params: {
    slug: string
  }
}

// In a real implementation, this would come from the database
const validSlugs = [
  "ai-income-mastery",
  "ai-marketing-automation",
  "ai-product-creation"
]

export function generateStaticParams() {
  return validSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = params
  
  // In a real implementation, fetch the course from the database
  if (!validSlugs.includes(slug)) {
    return {
      title: "Course Not Found | AI Income Academy",
      description: "The requested course could not be found."
    }
  }
  
  return {
    title: `${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | AI Income Academy`,
    description: "Learn how to leverage AI to create passive income streams with our step-by-step course."
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const { slug } = params
  
  // Check if this is a valid course
  if (!validSlugs.includes(slug)) {
    notFound()
  }
  
  return (
    <div className="flex flex-col items-center w-full">
      <CourseDetails slug={slug} />
    </div>
  )
}