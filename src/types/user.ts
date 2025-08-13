export interface AuthUser {
  id: string
  email: string
  name: string
  role: string
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface User extends AuthUser {
  profile?: UserProfile
  permissions?: string[]
}

export interface UserProfile {
  firstName: string
  lastName: string
  phone?: string
  avatar?: string
  company?: string
  department?: string
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

export interface TSession {
  token: string
  user: AuthUser | null
  isAuthenticated: boolean
}
