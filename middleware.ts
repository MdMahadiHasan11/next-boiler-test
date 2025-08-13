import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { decrypt, type DecryptedSession } from "./src/lib/session"

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const cookie = req.cookies.get("session")?.value

  let session: DecryptedSession | null = null

  if (cookie) {
    try {
      session = await decrypt(cookie)
    } catch (error) {
      console.log("Token decode error:", error)
    }
  }

  // যদি সেশন না থাকে বা userId না থাকে
  if (!session?.userId) {
    // /auth রাউটে থাকলে পাস করুন
    if (pathname.startsWith("/auth")) {
      return NextResponse.next()
    }
    return await handleRefreshOrLogout(req, pathname)
  }

  // সেশন থাকলে এবং /auth রাউটে থাকলে হোমে রিডাইরেক্ট
  if (session?.userId && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.nextUrl))
  }

  return NextResponse.next()
}

async function handleRefreshOrLogout(req: NextRequest, pathname: string) {
  try {
    const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
    })

    if (!refreshResponse.ok) {
      if (refreshResponse.status === 401) {
        return await logoutAndRedirect(req, pathname)
      }
      throw new Error("Refresh token failed")
    }

    const { accessToken } = await refreshResponse.json()
    const res = NextResponse.next()

    res.cookies.set("session", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 15 * 60 * 1000, // 15 মিনিট
    })

    return res
  } catch (error) {
    console.log("Refresh error:", error)
    return await logoutAndRedirect(req, pathname)
  }
}

async function logoutAndRedirect(req: NextRequest, pathname: string) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
  } catch (error) {
    console.log("Logout error:", error)
  }

  const res = NextResponse.redirect(new URL(`/auth/signin?redirect=${pathname}`, req.url))
  res.cookies.delete("session")
  res.cookies.delete("refreshToken")

  return res
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/flight/:path*", "/profile", "/users/:path*", "/reports/:path*"],
}
