import { hostPath } from "./hostPath"

export const fetchGetGames = async (params) => {
  try {
    const searchParams = new URLSearchParams()
    if (params?.page) searchParams.append("page", params.page)
    if (params?.size) searchParams.append("size", params.size)
    if (params?.sortBy) searchParams.append("sortBy", params.sortBy)
    if (params?.sortDir) searchParams.append("sortDir", params.sortDir)
    const path = `${hostPath}/games?${searchParams.toString()}`
    const resp = await fetch(path)
    const data = await resp.json()
    return data
  } catch (e) {
    console.error(e)
  }
}