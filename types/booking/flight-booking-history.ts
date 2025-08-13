export interface FlightBookingHistoryResponse {
  id: string
  bookingNumber: string
  passengerName: string
  flightNumber: string
  departure: string
  arrival: string
  departureDate: string
  arrivalDate: string
  status: "confirmed" | "cancelled" | "pending" | "completed"
  totalAmount: number
  currency: string
  createdAt: string
  updatedAt: string
}

export interface RootFlightBookingHistoryResponse {
  data: FlightBookingHistoryResponse
  message: string
  success: boolean
  status: number
}

export interface ICancelTicket {
  id: string
  bookingId: string
  cancellationReason: string
  refundAmount: number
  cancellationFee: number
  status: "pending" | "approved" | "rejected"
  requestedAt: string
  processedAt?: string
}

export interface IReIssueTicket {
  id: string
  bookingId: string
  originalFlightNumber: string
  newFlightNumber: string
  reissueFee: number
  additionalAmount: number
  reason: string
  status: "pending" | "approved" | "rejected"
  requestedAt: string
  processedAt?: string
}
