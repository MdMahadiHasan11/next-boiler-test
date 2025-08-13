"use client"
import type { ReactNode } from "react"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "@/redux/store"

interface PersistGateWrapperProps {
  children: ReactNode
}

export default function PersistGateWrapper({ children }: PersistGateWrapperProps) {
  return (
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      {children}
    </PersistGate>
  )
}
