"use client"

import { usePosts, useUsersPrefetch } from "@/utils/queries";
import { useState } from "react";

export default function Page() {
  useUsersPrefetch()
  const [page, setPage] = useState(0)
  const limit = 10
  let total = page * limit

  const posts = usePosts(limit, total)

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1)
  }

  const handleNextButton = () => {
    setPage(page + 1)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Olá</h1>

      <div className="p-3 m-3 border border-white">
        <div>Items por página: {limit}</div>
        <div>Número da página: {page}</div>
        <button className="border mx-2 px-2" onClick={handlePrevButton}>Página Anterior</button>
        <button className="border mx-2 px-2" onClick={handleNextButton}>Próxima Página</button>
      </div>

      {posts.isLoading && 'carregando....'}
      {!posts.isLoading && posts.isFetching && 'carregando....'}

      {
        posts.data && (
          <ul>
            {posts.data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )
      }
    </div>
  );
}