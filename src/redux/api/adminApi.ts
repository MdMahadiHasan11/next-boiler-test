import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import config from "@/config"

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

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["admin", "users", "reports"],
})
