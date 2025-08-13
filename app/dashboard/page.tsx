"use client"

import { useEffect } from "react"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useGetAllBanksQuery } from "@/redux/api/bankApi"
import { useGetFlightBookingHistoryQuery } from "@/redux/api/flightBookingHistoryApi"

export default function DashboardPage() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth)
  const router = useRouter()

  // Example API calls
  const { data: banksData, isLoading: banksLoading } = useGetAllBanksQuery([])
  const { data: bookingsData, isLoading: bookingsLoading } = useGetFlightBookingHistoryQuery([])

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return <div>Redirecting...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Your account details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Name:</strong> {user?.name}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <p>
                  <strong>Role:</strong> {user?.role || "User"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Banks Data</CardTitle>
              <CardDescription>Available banks information</CardDescription>
            </CardHeader>
            <CardContent>
              {banksLoading ? (
                <p>Loading banks...</p>
              ) : (
                <div>
                  <p>Total Banks: {banksData?.data?.length || 0}</p>
                  <Button className="mt-2" size="sm">
                    View All Banks
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>Your recent bookings</CardDescription>
            </CardHeader>
            <CardContent>
              {bookingsLoading ? (
                <p>Loading bookings...</p>
              ) : (
                <div>
                  <p>Total Bookings: {bookingsData?.data?.length || 0}</p>
                  <Button className="mt-2" size="sm">
                    View History
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* API Examples Section */}
        <Card>
          <CardHeader>
            <CardTitle>API Integration Examples</CardTitle>
            <CardDescription>This dashboard demonstrates various API calls using RTK Query</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900">GET Request</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Banks and booking data are fetched using GET requests with query parameters
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900">POST Request</h4>
                <p className="text-sm text-green-700 mt-1">
                  Authentication (login/signup) uses POST requests with request body
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-900">PATCH/PUT Request</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Profile updates and data modifications use PATCH/PUT requests
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-900">DELETE Request</h4>
                <p className="text-sm text-red-700 mt-1">Account deletion and data removal use DELETE requests</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
