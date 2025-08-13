import type { AuthUser } from "@/types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AuthenticationState {
  isAuthenticated: boolean
  user: AuthUser | null
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
    },
  },
})

export const { login, update, logout } = authSlice.actions
export default authSlice.reducer
