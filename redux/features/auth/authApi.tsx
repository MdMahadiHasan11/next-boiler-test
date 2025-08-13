import { baseApi } from "@/redux/api/baseApi"
import type { AuthUser, TResponseRedux } from "@/types"

interface SigninRequest {
  email: string
  password: string
}

interface SignupRequest {
  name: string
  email: string
  password: string
}

interface AuthResponse {
  user: AuthUser
  accessToken: string
  refreshToken: string
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<TResponseRedux<AuthResponse>, SigninRequest>({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<TResponseRedux<AuthResponse>, SignupRequest>({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
    refreshToken: builder.mutation<TResponseRedux<{ accessToken: string }>, { refreshToken: string }>({
      query: (tokenData) => ({
        url: "/auth/refresh",
        method: "POST",
        body: tokenData,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
})

export const { useSigninMutation, useSignupMutation, useRefreshTokenMutation, useLogoutMutation } = authApi
