import type { AuthUser } from "@/types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AuthenticationState {
  isAuthenticated: boolean
  user: AuthUser | null
  accessToken: string | null
  refreshToken: string | null
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: AuthUser
        token: string
        refreshToken?: string
      }>,
    ) => {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.accessToken = action.payload.token
      state.refreshToken = action.payload.refreshToken || null
    },
    login: (state, action: PayloadAction<AuthUser>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    update: (state, action: PayloadAction<Partial<AuthUser>>) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
        }
      }
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.accessToken = null
      state.refreshToken = null
    },
  },
})

export const { setCredentials, login, update, logout } = authSlice.actions
export default authSlice.reducer
