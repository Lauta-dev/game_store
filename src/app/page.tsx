import { getAllGames } from "./lib/fetching";
import Link from "next/link";

async function Home() {
  const games = await getAllGames()

  return (
    <div>
      {games && games.map(game => {
        return (
          <div key={game.id}>
            <Link href={{ pathname: "/info", query: { game: game.id } }}>{game.title}</Link>
          </div>
        )
      })}
    </div>
  );
}
export default Home
