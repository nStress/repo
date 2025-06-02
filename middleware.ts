import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token") || 
                request.cookies.get("__Secure-next-auth.session-token")
  const isAuth = !!token

  const isAuthPage = 
    request.nextUrl.pathname.startsWith("/login") || 
    request.nextUrl.pathname.startsWith("/register")

  const sensitiveRoutes = ["/dashboard"]
  const isAccessingSensitiveRoute = sensitiveRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next()
  }

  if (isAccessingSensitiveRoute && !isAuth) {
    const redirectUrl = new URL("/login", request.url)
    redirectUrl.searchParams.set("callbackUrl", request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/login", 
    "/register", 
    "/dashboard/:path*"
  ],
}