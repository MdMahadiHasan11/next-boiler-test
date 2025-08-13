import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/providers/ReduxProvider";
import PersistGateWrapper from "@/providers/PersistGateWrapper";
import { SessionProvider } from "@/provider/session-provider";
// import { SessionProvider } from "@/hooks/useSession"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2B Next.js Boilerplate",
  description: "A comprehensive B2B application boilerplate built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <PersistGateWrapper>
            <SessionProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </SessionProvider>
          </PersistGateWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
