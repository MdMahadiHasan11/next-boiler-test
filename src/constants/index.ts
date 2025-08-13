export const tags = {
  USER: "user",
  PROFILE: "userProfile",
  AIRLINES: "airlines",
  COMPANY: "company",
  BOOKINGS: "bookings",
  FLIGHTS: "flights",
  ADMIN: "admin",
} as const

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth-service/auth/send-login-request",
    REGISTER: "/auth-service/users",
    PROFILE: "/auth-service/auth/profile",
    VERIFY: "/auth-service/auth/verify",
    FORGOT_PASSWORD: "/auth-service/auth/forgot-password",
    RESET_PASSWORD: "/auth-service/auth/forgot-password/token-to-set-password",
    CHANGE_PASSWORD: "/auth-service/auth/change-password",
  },
} as const
