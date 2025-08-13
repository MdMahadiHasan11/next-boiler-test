import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "./api/baseApi"
import { adminApi } from "./api/adminApi"
import { flightApi } from "./api/flightApi"
import authReducer from "./features/auth/authSlice"

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist"

import storage from "redux-persist/lib/storage"

const userPersistConfig = {
  key: "user",
  storage,
}

const persistedAuthReducer = persistReducer(userPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [flightApi.reducerPath]: flightApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware, adminApi.middleware, flightApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
