import { Game } from "@/interface/Game"

const baseUrl = "https://game-api-nestjs.vercel.app"

export async function getAllGames (): Promise<Game[]> {
  const f = await fetch("https://game-api-nestjs.vercel.app/")
  const json: Game[] = await f.json() 

  return json;
}

export async function getById (id: string): Promise<Game> {
  const f = await fetch(`${baseUrl}/id/${id}`)
  const json: Game = await f.json()
  return json
}

