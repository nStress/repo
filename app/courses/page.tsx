import { CourseGrid } from "@/components/course-grid"
import { CourseHero } from "@/components/course-hero"

export const metadata = {
  title: "Courses | AI Income Academy",
  description: "Browse our collection of AI income generation courses",
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <CourseHero />
      <CourseGrid />
    </div>
  )
}