"use client"

import { useAppSelector } from "@/redux/hooks"
import { useSession } from "@/hooks/useSession"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)
  const { session, isLoading } = useSession()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">B2B Next.js Boilerplate</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive boilerplate for building modern B2B applications with Next.js, Redux, and TypeScript
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>Status: {isAuthenticated ? "Authenticated" : "Not authenticated"}</CardDescription>
            </CardHeader>
            <CardContent>
              {user ? (
                <div>
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Role:</strong> {user.role}
                  </p>
                </div>
              ) : (
                <p>No user data available</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Management</CardTitle>
              <CardDescription>Session active: {session?.isAuthenticated ? "Yes" : "No"}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Token: {session?.token ? "Present" : "Not available"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>What's included in this boilerplate</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Redux Toolkit + RTK Query</li>
                <li>✅ Redux Persist</li>
                <li>✅ TypeScript</li>
                <li>✅ Tailwind CSS</li>
                <li>✅ shadcn/ui Components</li>
                <li>✅ Authentication System</li>
                <li>✅ Session Management</li>
                <li>✅ Dark Mode Support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="mr-4">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </div>
      </div>
    </div>
  )
}
