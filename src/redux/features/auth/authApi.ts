import type { TResponseRedux } from "@/types"
import type { B2b, User } from "@/types/user"
import { baseApi } from "../../api/baseApi"

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login
    sendLoginRequest: builder.mutation({
      query: (data) => ({
        url: "/auth-service/auth/send-login-request",
        method: "POST",
        body: data,
      }),
    }),
    // Register
    register: builder.mutation({
      query: (data) => ({
        url: "/auth-service/users",
        method: "POST",
        body: data,
      }),
    }),
    createSubUser: builder.mutation({
      query: (data) => ({
        url: "/auth-service/users/create-sub-b2b-account",
        method: "POST",
        body: data,
      }),
    }),
    // Temp User Register
    tempUserRegister: builder.mutation({
      query: (data) => ({
        url: "/auth-service/users/temp-user",
        method: "POST",
        body: data,
      }),
    }),
    // Get user profile
    getUserProfile: builder.query({
      query: () => ({
        url: "/auth-service/auth/profile",
        method: "GET",
      }),
      providesTags: ["user", "userProfile"],
      transformResponse: (response: { data: User }) => {
        return response.data
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: `/auth-service/users/${data?.id}`,
          method: "PATCH",
          body: data?.data,
        }
      },
      invalidatesTags: ["user"],
      transformResponse: (response: TResponseRedux<B2b>) => {
        return response.data
      },
    }),
    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/auth-service/users/${data?.id}`,
          method: "PATCH",
          body: data?.data,
        }
      },
      invalidatesTags: ["user", "userProfile"],
    }),
    verifyAccount: builder.mutation({
      query: ({ email, token }) => {
        return {
          url: `/auth-service/auth/verify/${email}`,
          method: "POST",
          headers: {
            Authorization: token,
          },
        }
      },
    }),
    forgetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth-service/auth/forgot-password",
          body: data,
          method: "POST",
        }
      },
    }),
    getTokenOTPforgetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth-service/auth/forgot-password/set-otp",
          body: data,
          method: "POST",
        }
      },
    }),
    resetPassword: builder.mutation({
      query: ({ resetPasswordToken, newPassword, token_id }) => ({
        url: "/auth-service/auth/forgot-password/token-to-set-password",
        method: "POST",
        body: { resetPasswordToken, newPassword, token_id },
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth-service/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const {
  useSendLoginRequestMutation,
  useRegisterMutation,
  useCreateSubUserMutation,
  useTempUserRegisterMutation,
  useGetUserProfileQuery,
  useUpdateProfileMutation,
  useUpdateUserMutation,
  useGetTokenOTPforgetPasswordMutation,
  useVerifyAccountMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authApi
