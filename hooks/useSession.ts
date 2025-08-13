"use client"

import { useEffect, useState } from "react"
import { useAppSelector } from "@/redux/hooks"
import type React from "react"
import { createContext, useContext } from "react"

interface SessionData {
  isAuthenticated: boolean
  token: string | null
  user: any
}

const SessionContext = createContext<{
  session: SessionData | null
  setSession: (session: SessionData) => void
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

export function useSession() {
  const [session, setSession] = useState<SessionData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const context = useContext(SessionContext)
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth)

  useEffect(() => {
    setSession({
      isAuthenticated,
      token,
      user,
    })
    setIsLoading(false)
  }, [isAuthenticated, user, token])

  if (context) {
    return context
  }

  return {
    session,
    isLoading,
    setSession: () => {}, // No-op for fallback
    setIsLoading: () => {}, // No-op for fallback
  }
}

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [session, setSession] = useState<SessionData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth)

  useEffect(() => {
    setSession({
      isAuthenticated,
      token,
      user,
    })
    setIsLoading(false)
  }, [isAuthenticated, user, token])

  return (
    <SessionContext.Provider value={{ session, setSession, isLoading, setIsLoading }}>
      {children}
    </SessionContext.Provider>
  )
}
