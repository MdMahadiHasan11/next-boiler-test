export interface TQueryParam {
  name: string
  value: string | number | boolean | undefined
}

export interface TResponseRedux<T> {
  data: T
  message: string
  success: boolean
  status: number
  meta?: {
    limit: number
    page: number
    total: number
    totalPage: number
  }
}

export interface TMeta {
  limit: number
  page: number
  total: number
  totalPage: number
  offset?: number
}

export interface TResponse<T> {
  data?: T
  meta?: TMeta
  success: boolean
  message: string
  statusCode?: number
  code?: number
}
