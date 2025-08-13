"use client"

import { useEffect, useState } from "react"
import { useAppSelector } from "@/redux/hooks"

interface SessionData {
  isAuthenticated: boolean
  token: string | null
  user: any
}

export function useSession() {
  const [session, setSession] = useState<SessionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth)

  useEffect(() => {
    setSession({
      isAuthenticated,
      token,
      user,
    })
    setIsLoading(false)
  }, [isAuthenticated, user, token])

  return {
    session,
    isLoading,
  }
}
