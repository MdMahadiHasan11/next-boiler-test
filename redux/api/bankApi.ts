/* eslint-disable @typescript-eslint/no-explicit-any */
import { adminApi } from "@/redux/api/adminApi"
import type { Bank } from "@/types"
import type { TQueryParam, TResponseRedux } from "@/types/global"

const url = `/admin/payment/bank`

const bankApi = adminApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET - Fetch all banks
    getAllBanks: builder.query({
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
      transformResponse: (response: TResponseRedux<Bank[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        }
      },
      providesTags: ["bankDetails"],
    }),

    // POST - Create new bank
    createBank: builder.mutation<Bank, Partial<Bank>>({
      query: (bankData) => ({
        url: url,
        method: "POST",
        body: bankData,
      }),
      invalidatesTags: ["bankDetails"],
    }),

    // PUT - Update entire bank record
    updateBank: builder.mutation<Bank, { id: string; bankData: Bank }>({
      query: ({ id, bankData }) => ({
        url: `${url}/${id}`,
        method: "PUT",
        body: bankData,
      }),
      invalidatesTags: ["bankDetails"],
    }),

    // PATCH - Partially update bank record
    patchBank: builder.mutation<Bank, { id: string; updates: Partial<Bank> }>({
      query: ({ id, updates }) => ({
        url: `${url}/${id}`,
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: ["bankDetails"],
    }),

    // DELETE - Remove bank
    deleteBank: builder.mutation<void, string>({
      query: (id) => ({
        url: `${url}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bankDetails"],
    }),
  }),
})

export const {
  useGetAllBanksQuery,
  useCreateBankMutation,
  useUpdateBankMutation,
  usePatchBankMutation,
  useDeleteBankMutation,
} = bankApi
