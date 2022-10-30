export interface ApiHookResult<TData> {
    data: TData
    loading: boolean
    success: boolean
    error: Error | undefined
}
