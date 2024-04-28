'use client'

import { Suspense, useEffect, useState } from "react";
import { getAllGames, getById } from "../lib/fetching";
import { usePathname, useSearchParams } from "next/navigation";
import { Game } from "@/interface/Game";

function ViewGame() {
  const getParam = useSearchParams().get("game") ?? "1"
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    const fetching = async () => {
      setGame(await getById(getParam))
    }
    fetching()
  }, [])

  return (
    <div>
      {JSON.stringify(game)}
      <p>Game selected {getParam}</p>
    </div>
  )
}

function Page() {
  <Suspense>
    <ViewGame />
  </Suspense>
}

export default Page;
