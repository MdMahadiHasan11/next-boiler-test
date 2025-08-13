const config = {
  host: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  apiVersion: "v1",
  timeout: 10000,
  retries: 3,
}

export default config
