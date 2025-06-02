import { AuthForm } from "@/components/auth-form";
import Link from "next/link";

export const metadata = {
  title: "Register | AI Income Academy",
  description: "Create your AI Income Academy account to get started with our courses",
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-orbitron tracking-tight text-glow-blue">
            Get <span className="text-[#009dff]">Started</span>
          </h1>
          <p className="mt-2 text-white/70">
            Create your account to begin your AI income journey
          </p>
        </div>

        <AuthForm mode="register" />

        <p className="mt-10 text-center text-sm text-white/70">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold leading-6 text-[#009dff] hover:text-[#009dff]/80">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}