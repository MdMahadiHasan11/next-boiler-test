"use server";

import type { TSession } from "@/types";
import { cookies } from "next/headers";

export interface DecryptedSession {
  userId: string | null;
  user_type: "b2b" | "guest";
  roleBaseUserId: string;
  userUniqueId: string;
  email: string;
  iat: number;
  exp: number;
}

export async function decrypt(session: string | undefined = "") {
  try {
    if (!session) {
      throw new Error("No session token provided");
    }

    // Simple base64 decode for demo purposes
    // In production, you should use proper JWT verification
    const parts = session.split(".");
    if (parts.length !== 3) {
      throw new Error("Invalid token format");
    }

    const payload = JSON.parse(atob(parts[1])) as DecryptedSession;

    // Check token expiration
    if (payload.exp * 1000 < Date.now()) {
      throw new Error("Session token expired");
    }

    return payload;
  } catch (error) {
    console.log("Failed to decode session:", error);
    return null;
  }
}

export async function getSession(): Promise<TSession> {
  const cookie = cookies().get("session")?.value;
  if (cookie) {
    const session = await decrypt(cookie);

    if (session?.userId) {
      return {
        token: cookie,
        user: {
          id: session.userId,
          email: session.email,
          name: session.email, // Using email as name fallback
          role: session.user_type,
          isVerified: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        isAuthenticated: true,
      };
    }
  }

  return {
    token: "",
    user: null,
    isAuthenticated: false,
  };
}
