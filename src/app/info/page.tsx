'use client'

import { Suspense, useEffect, useState } from "react";
import { getById } from "../lib/fetching";
import { useSearchParams } from "next/navigation";
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
  return (<Suspense fallback="">
    <ViewGame />
  </Suspense>)
}

export default Page;
