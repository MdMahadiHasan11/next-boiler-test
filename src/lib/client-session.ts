"use client"

import type { TSession } from "@/types"

export const getSession = async (): Promise<TSession | null> => {
  try {
    if (typeof window === "undefined") return null

    const token = localStorage.getItem("token")
    if (!token) return null

    // Add your session validation logic here
    // This could involve API calls to validate the token

    const user = localStorage.getItem("user")
    return {
      token,
      user: user ? JSON.parse(user) : null,
      isAuthenticated: true,
    }
  } catch (error) {
    console.error("Error getting session:", error)
    return null
  }
}

export const setSession = (session: TSession) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", session.token)
    localStorage.setItem("user", JSON.stringify(session.user))
    // Add any other session storage logic
  }
}

export const clearSession = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    // Clear any other session data
  }
}
