import React from 'react'
import { useEffect, useState } from 'react'
import AllGameCard from './AllGameCard'
import GameForm from './GameForm'

function Games( { user } ) {
  const [games, setGames] = useState([]);
        
  function addGame(game){
    setGames([...games, game])
    }

  useEffect(() => {
    fetch(`/games`)
    .then((r) => r.json())
    .then(setGames)    
    }, [])

  return (
    <div>
      <GameForm user={user} addGame={addGame}/>

      {games.map(game =>
      <AllGameCard game={game} 
      user={user} 
      key={game.id}
      addGame={addGame}/>)}

    </div>
  );
}
export default Games;