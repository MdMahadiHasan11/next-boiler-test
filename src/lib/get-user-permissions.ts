import config from "@/config"
import type { UserPermissions } from "@/types"
import { cookies } from "next/headers"

export const getUserPermissions = async () => {
  const cookieStore = cookies()
  const token = cookieStore.get("session")?.value
  if (!token) {
    return { allPermission: [], allModules: [] }
  }
  try {
    const res = await fetch(`${config.host}/user-permission/my-permission`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: "no-store", // always fetch fresh
    })

    if (!res.ok) throw new Error("Failed to fetch permissions")
    const data = await res.json()

    return (data?.data as UserPermissions) || { allPermission: [], allModules: [] }
  } catch (error) {
    console.error("Error fetching user permissions:", error)
    return { allPermission: [], allModules: [] }
  }
}
