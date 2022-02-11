import React from 'react'
import { useEffect, useState } from 'react'
import GameForm from './GameForm'
import AllGameCard from './AllGameCard'

function Games( { user } ) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`/games`)
    .then((r) => r.json())
    .then(games => setGames(games))    
    }, [])

    function removeGame(game){
        setGames((games)=> games.filter(g => g.id !== game.id))
        }
        
    function addGame(game){
        setGames([...games, game])
        }
        
    function editGame(game){
        const edited = games.map(g => {
            if (game.id === g.id){
                    return game
                }
                return g
            })
            setGames(edited)
        }

  return (
    <div>
      <GameForm user={user} addGame={addGame}/>

      {games.map(game =>
      <AllGameCard game={game} 
      user={user} 
      key={game.id}
      removeGame={removeGame} 
      addGame={addGame} 
      editGame={editGame}/>)}


    </div>
  );
}
export default Games;