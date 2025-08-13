export interface User {
  id: string
  name: string
  email: string
  role: string
  isActive: boolean
  isVerified: boolean
  createdAt: string
  updatedAt: string
  profile?: UserProfile
}

export interface UserProfile {
  id: string
  userId: string
  firstName?: string
  lastName?: string
  phone?: string
  address?: string
  city?: string
  country?: string
  avatar?: string
  bio?: string
  dateOfBirth?: string
  gender?: string
}

export interface B2b {
  id: string
  name: string
  email: string
  companyName?: string
  businessType?: string
  role: "admin" | "user" | "manager"
  permissions: string[]
  isActive: boolean
  isVerified: boolean
  parentAccountId?: string
  subAccounts?: B2b[]
  createdAt: string
  updatedAt: string
  profile?: B2bProfile
}

export interface B2bProfile {
  id: string
  userId: string
  companyName?: string
  businessRegistrationNumber?: string
  taxId?: string
  industry?: string
  companySize?: string
  website?: string
  address?: string
  city?: string
  state?: string
  country?: string
  postalCode?: string
  phone?: string
  logo?: string
  description?: string
}

export interface AuthResponse {
  user: User | B2b
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
  companyName?: string
  businessType?: string
}

export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ResetPasswordRequest {
  resetPasswordToken: string
  newPassword: string
  token_id: string
}
