import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPost, getPosts, getUsers } from "./api"
import { postsInitialData } from "@/data/postInitialData"

export const usePosts = (limit: number, start: number) => {
  const query = useQuery({
    queryKey: ['posts', { limit, start }],
    queryFn: () => getPosts(limit, start),
    placeholderData: postsInitialData
  })
  return query
}

export const usePost = (id: number) => {
  const query = useQuery({ queryKey: ['posts', id], queryFn: () => getPost(id) })
  return query
}

export const useUsersPrefetch = () => {
  const queryClient = useQueryClient()
  queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}