import type React from "react"
import { cn } from "@/lib/utils"
import { SessionProvider } from "@/provider/session-provider"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Inter, DM_Sans } from "next/font/google"
import { Toaster } from "sonner"
import "../styles/globals.css"
import PersistGateWrapper from "@/provider/persist-gate-wrapper"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "FlyGhor.com - B2B Portal",
  description: "The most comprehensive B2B portal for your business",
    generator: 'v0.app'
}

const ReduxProvider = dynamic(() => import("@/provider/redux-provider"), {
  ssr: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className, dmSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ReduxProvider>
            <PersistGateWrapper>
              <SessionProvider>
                {children}
                <Toaster richColors />
              </SessionProvider>
            </PersistGateWrapper>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
