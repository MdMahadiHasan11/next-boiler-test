/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import config from "@/config"
import { cookies } from "next/headers"

interface SigninFormValues {
  token_id: string
  otp: string
}

interface SignupFormValues {
  full_name: string
  email: string
  phone: string
  password: string
}

interface PasswordSetValues {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export async function signin(formData: SigninFormValues) {
  try {
    const res = await fetch(`${config.auth}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token_id: formData.token_id,
        otp: formData.otp,
      }),
    })

    const result = await res.json()

    if (!result?.success) {
      return {
        success: false,
        message: result?.message || "Login failed",
      }
    }

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

    if (result?.success)
      cookies().set("session", result?.data?.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
        expires: expiresAt,
      })

    cookies().set("is_change_password", result?.data?.userData?.is_change_password, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    })

    return {
      success: result?.success,
      data: result.data,
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}

export async function googleSignIn(code: string) {
  try {
    const res = await fetch(`${config.auth}/auth/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    })

    const result = await res.json()

    if (!result?.success) {
      return {
        success: false,
        message: result?.message || "Login failed",
      }
    }

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

    if (result?.success)
      cookies().set("session", result?.data?.token, {
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "strict",
        expires: expiresAt,
      })

    return {
      success: true,
      data: result.data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export async function ChangePassword(formData: PasswordSetValues) {
  try {
    const sessionCookie = cookies().get("session")

    const res = await fetch(`${config.auth}/auth/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionCookie?.value || ""}`,
      },
      body: JSON.stringify({
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      }),
    })

    const result = await res.json()
    cookies().delete("is_change_password")

    if (!result?.success) {
      return {
        success: false,
        message: result?.message || "Password Change failed",
      }
    }

    return {
      success: true,
      data: result.data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}

export async function signup(formData: SignupFormValues) {
  try {
    const res = await fetch(`${config.auth}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      }),
    })

    const result = await res.json()

    if (!result?.success) {
      return {
        success: false,
        message: result?.message || "Signup failed",
      }
    }

    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

    if (result?.success)
      cookies().set("session", result?.data?.token, {
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "strict",
        expires: expiresAt,
      })

    return {
      success: true,
      data: result.data,
    }
  } catch (error) {
    console.log(error)

    return {
      success: false,
      errors: "Something went wrong. Please try again.",
    }
  }
}

export async function signout() {
  cookies().delete("session")
}
