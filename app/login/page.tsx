import { AuthForm } from "@/components/auth-form";
import Link from "next/link";

export const metadata = {
  title: "Login | AI Income Academy",
  description: "Sign in to your AI Income Academy account to access your courses",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-orbitron tracking-tight text-glow">
            Welcome <span className="text-[#00ff99]">Back</span>
          </h1>
          <p className="mt-2 text-white/70">
            Sign in to your account to access your courses
          </p>
        </div>

        <AuthForm mode="login" />

        <p className="mt-10 text-center text-sm text-white/70">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold leading-6 text-[#00ff99] hover:text-[#00ff99]/80">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}