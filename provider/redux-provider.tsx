"use client"

import { store } from "@/redux/store"
import type { ReactNode } from "react"
import { Provider } from "react-redux"

const ReduxProvider = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
