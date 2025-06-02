import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth"
import { DashboardContent } from "@/components/dashboard-content"

export const metadata = {
  title: "Dashboard | AI Income Academy",
  description: "Access your purchased courses and track your progress",
};

export default async function DashboardPage() {
  const session = await getServerSession(options)
  
  if (!session) {
    redirect("/api/auth/signin")
  }
  
  return (
    <div className="flex flex-col items-center w-full">
      <DashboardContent />
    </div>
  )
}