import type React from "react"
// Common types for the B2B application
export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user" | "manager"
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface TableColumn<T> {
  key: keyof T
  label: string
  sortable?: boolean
  render?: (value: any, row: T) => React.ReactNode
}

export interface TResponseRedux<T> {
  data: T
  message: string
  success: boolean
  status: number
}

export interface AuthUser {
  id: string
  email: string
  name: string
  role: string
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface TSession {
  token: string
  user: AuthUser | null
  isAuthenticated: boolean
}
