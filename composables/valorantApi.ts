import type { ValorantApiResponse } from '~/valorantapi'

export async function useValorantApi<TData>(endpoint: string) {
  const response = await useFetch<ValorantApiResponse<TData>>(`https://valorant-api.com/v1/${endpoint}`)
  let data = $ref<TData>(response.data.value.data)
  watch(response.data, () => {
    // @ts-expect-error - data is a ref
    data = response.data.value.data
  })
  return {
    data,
    pending: response.pending,
    error: response.error,
  }
}
