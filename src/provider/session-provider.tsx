"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useAppSelector } from "@/redux/hooks"

interface SessionContextType {
  isAuthenticated: boolean
  user: any
  token: string | null
  isLoading: boolean
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export function SessionProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth)

  const sessionData = {
    isAuthenticated,
    user,
    token,
    isLoading: false,
  }

  return <SessionContext.Provider value={sessionData}>{children}</SessionContext.Provider>
}

export function useSessionContext() {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error("useSessionContext must be used within a SessionProvider")
  }
  return context
}
