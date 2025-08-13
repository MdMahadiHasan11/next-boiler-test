/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

interface ErrorProps {
  error: Error & { digest?: string; code?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  const [trackingId] = useState(uuidv4())

  const getCustomErrorMessage = () => {
    if (error.digest) {
      return {
        title: "Server Error",
        message: "A server-side issue occurred. Our technical team has been notified and is working on a resolution.",
        code: error.digest,
      }
    }
    switch (error.message) {
      case "Network Error":
        return {
          title: "Network Connectivity Issue",
          message: "Unable to connect to the server. Please verify your internet connection and try again.",
          code: "NET_001",
        }
      case "Unauthorized":
        return {
          title: "Access Denied",
          message:
            "You do not have the necessary permissions to access this resource. Please contact your administrator.",
          code: "AUTH_001",
        }
      case "Not Found":
        return {
          title: "Resource Not Found",
          message: "The requested resource could not be found. Please check the URL or contact support.",
          code: "404_ERR",
        }
      default:
        return {
          title: "System Error",
          message: "An unexpected error occurred. Please try again or contact our support team for assistance.",
          code: error.code || "SYS_001",
        }
    }
  }

  const errorInfo = getCustomErrorMessage()

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full rounded-lg shadow-xl p-10 bg-white text-gray-900"
          role="alert"
          aria-labelledby="error-title"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>

          <h1 id="error-title" className="text-4xl font-semibold text-center text-gray-900 mb-4">
            {errorInfo.title}
          </h1>

          <p className="text-center text-lg text-gray-600 mb-6">{errorInfo.message}</p>

          <AnimatePresence>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <p className="text-sm font-medium text-gray-700">
                  Error Code: <span className="text-red-600">{errorInfo.code}</span>
                </p>
                <p className="text-sm font-medium text-gray-700 mt-2">
                  Tracking ID: <span className="text-gray-600">{trackingId}</span>
                </p>
                <div className="max-h-80 overflow-y-auto mt-4">
                  {error.message && <p className="text-sm mt-3 text-gray-600">Details: {error.message}</p>}
                  {error.stack && (
                    <pre className="mt-4 text-xs text-gray-500 whitespace-pre-wrap break-all">
                      <code>{error.stack}</code>
                    </pre>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={reset}
              className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Try Again
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/support")}
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Contact Support
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigator.clipboard.writeText(`Error Code: ${errorInfo.code}\nTracking ID: ${trackingId}`)}
              className="px-6 py-3 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Copy Error Details
            </motion.button>
          </div>

          <p className="mt-8 text-center text-sm">
            <a href="/" className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500">
              Return to Home
            </a>
          </p>
        </motion.div>
      </body>
    </html>
  )
}
