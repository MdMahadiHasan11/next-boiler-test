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
  permissions?: UserPermissions
}

export interface TSession {
  token: string
  user: AuthUser | null
  isAuthenticated: boolean
}

export interface B2b {
  id: string
  companyName: string
  contactPerson: string
  email: string
  phone: string
  address: string
  status: "active" | "inactive" | "pending"
  createdAt: string
  updatedAt: string
}

export interface Bank {
  id: string
  name: string
  code: string
  country: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface UserPermissions {
  allPermission: string[]
  allModules: string[]
  canViewDashboard?: boolean
  canManageUsers?: boolean
  canEditSettings?: boolean
  canViewReports?: boolean
  canExportData?: boolean
  canDeleteRecords?: boolean
}

export type IImagePlatform = "imgbb" | "cloudinary" | "server" | "aws" | string
export const I_IMAGE_PLATFORM_ARRAY = ["imgbb", "cloudinary", "server", "aws"]

export type TFileDocument = {
  mimetype: string
  server_url?: string
  filename?: string
  originalUrl?: string
  pre_url?: string
  modifyFileName?: string
  path?: string
  url: string
  durl?: string
  fileUniqueId?: string
  platform: IImagePlatform
  fileType: string
  cdn?: string
}

export type TError = {
  data: {
    message: string
    stack: string
    errorMessage: {
      path: string
      message: string
    }
    success: boolean
  }
  status: number
}

export type TMeta = {
  limit: number
  page: number
  total: number
  totalPage: number
  offset?: number
}

export type TResponse<T> = {
  data?: T
  error?: TError
  meta?: TMeta
  success: boolean
  message: string
  statusCode?: number
  code?: number
}

export interface ErrorSource {
  path: string
  message: string
}

export interface ErrorResponseData {
  status: boolean
  message: string
  errorSources: ErrorSource[]
  stack?: string
}

export interface ErrorResponse {
  data: ErrorResponseData
  status: boolean
}
