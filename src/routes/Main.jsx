import React, { useEffect, useState } from 'react'
import { OrderBtns } from '../components/OrderBtns'
import { fetchGetGames } from '../apis/games'
import { GameList } from '../components/GameList'

export const Main = () => {
  const [games, setGames] = useState([])
  const [orderParams, setOrderParams] = useState({})

  const getGames = async (params) => {
    const data = await fetchGetGames({ page: 2 })
    console.log(data);
    if (data) setGames(data.content)
  }
  useEffect(() => {
    getGames()
  }, [])
  return (
    <div>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2>654 Games available</h2>
        <OrderBtns setOrderParams={setOrderParams} />
      </header>
      <div>
        {games.map(game => <GameList key={game.title} game={game} />)}
      </div>
    </div>
  )
}
