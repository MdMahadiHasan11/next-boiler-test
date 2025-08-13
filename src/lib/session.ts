"use server"

import type { TSession } from "@/types"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"
import "server-only"

export interface DecryptedSession {
  userId: string | null
  user_type: "b2b" | "guest"
  roleBaseUserId: string
  userUniqueId: string
  email: string
  iat: number
  exp: number
}

export async function decrypt(session: string | undefined = "") {
  try {
    if (!session) {
      throw new Error("No session token provided")
    }
    const payload = jwtDecode<DecryptedSession>(session)
    // ম্যানুয়ালি টোকেনের মেয়াদ চেক করা
    if (payload.exp * 1000 < Date.now()) {
      throw new Error("Session token expired")
    }
    return payload
  } catch (error) {
    console.log("Failed to decode session:", error)
    return null
  }
}

export async function getSession(): Promise<TSession> {
  const cookie = cookies().get("session")?.value
  if (cookie) {
    const session = await decrypt(cookie)

    if (session?.userId) {
      return {
        token: cookie,
        user: {
          id: session.userId,
          email: session.email,
          name: session.email, // Using email as name fallback
          role: session.user_type,
          isVerified: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        isAuthenticated: true,
      }
    }
  }

  return {
    token: "",
    user: null,
    isAuthenticated: false,
  }
}
