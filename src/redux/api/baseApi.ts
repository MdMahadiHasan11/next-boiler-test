import config from "@/config"
import { tags } from "@/constants"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: `${config.host}`,
  prepareHeaders: (headers) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
    }
    return headers
  },
})

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: [
    "user",
    "userProfile",
    "airlines",
    "company",
    "specialFareAirlines",
    "flightGroupRequest",
    "specialFlightBooking",
    "specialFlightRequest",
    "hotelDeals",
    "bookings",
    "bankDetails",
    "SpecialFlightBookingTickets",
    "depositRequest",
    "quickPassenger",
    "SpecialGroupRequest",
    "bank-accounts",
    "airports",
    "transactionsLogs",
    ...Object.values(tags),
  ],
})
