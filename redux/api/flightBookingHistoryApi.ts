/* eslint-disable @typescript-eslint/no-explicit-any */
import { adminApi } from "@/redux/api/adminApi"
import type {
  FlightBookingHistoryResponse,
  ICancelTicket,
  IReIssueTicket,
  RootFlightBookingHistoryResponse,
} from "@/types/booking/flight-booking-history"
import type { TQueryParam, TResponseRedux } from "@/types/global"

const url = `/b2c-service/booking/my-bookings`

const flightBookingHistoryApi = adminApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET - Fetch flight booking history
    getFlightBookingHistory: builder.query({
      query: (args) => {
        const params = new URLSearchParams()
        if (args) {
          args.forEach((item: TQueryParam) => {
            if (item.value !== undefined && item.value !== "all") {
              params.append(item.name, item.value as string)
            }
          })
        }
        return {
          url: url,
          method: "GET",
          params: params,
        }
      },
      transformResponse: (response: TResponseRedux<FlightBookingHistoryResponse[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        }
      },
      providesTags: ["flightBookingHistory"],
    }),

    // GET - Fetch single booking by ID
    getFlightBookingById: builder.query<FlightBookingHistoryResponse, string>({
      query: (bookingNumber) => ({
        url: `/b2c-service/booking/${bookingNumber}`,
        method: "GET",
      }),
      transformResponse: (response: RootFlightBookingHistoryResponse) => {
        return response.data
      },
      providesTags: ["flightBookingHistory"],
    }),

    // POST - Flight cancellation
    flightCancellation: builder.mutation<void, any>({
      query: (data) => ({
        url: `/b2b-service/flight-cancellation/cancellation`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["flightBookingHistory"],
    }),

    // GET - Fetch cancellation tickets
    getCancellationTicket: builder.query({
      query: (args) => {
        const params = new URLSearchParams()
        if (args) {
          args.forEach((item: TQueryParam) => {
            if (item.value !== undefined && item.value !== "all") {
              params.append(item.name, item.value as string)
            }
          })
        }

        return {
          url: `/b2b-service/flight-cancellation/cancellation`,
          method: "GET",
          params: params,
        }
      },
      transformResponse: (response: TResponseRedux<ICancelTicket[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        }
      },
      providesTags: ["flightBookingHistory"],
    }),

    // GET - Fetch reissue tickets
    getReIssueTicket: builder.query({
      query: (args) => {
        const params = new URLSearchParams()
        if (args) {
          args.forEach((item: TQueryParam) => {
            if (item.value !== undefined && item.value !== "all") {
              params.append(item.name, item.value as string)
            }
          })
        }

        return {
          url: `/b2b-service/flight-cancellation/reissued`,
          method: "GET",
          params: params,
        }
      },
      transformResponse: (response: TResponseRedux<IReIssueTicket[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        }
      },
      providesTags: ["flightBookingHistory"],
    }),

    // POST - Flight reissue
    flightReIssue: builder.mutation<void, any>({
      query: (data) => ({
        url: `/b2b-service/flight-cancellation/reissued`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["flightBookingHistory"],
    }),
  }),
})

export const {
  useGetFlightBookingHistoryQuery,
  useGetFlightBookingByIdQuery,
  useFlightCancellationMutation,
  useGetCancellationTicketQuery,
  useGetReIssueTicketQuery,
  useFlightReIssueMutation,
} = flightBookingHistoryApi
