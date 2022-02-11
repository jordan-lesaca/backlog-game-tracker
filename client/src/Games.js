import React from 'react'
import { useEffect, useState } from 'react'
import AllGameCard from './AllGameCard'
import GameForm from './GameForm'

function Games( { user } ) {
  const [games, setGames] = useState([]);

    // function removeGame(game){
    //     setGames((games)=> games.filter(g => g.id !== game.id))
    //     }
        
    function addGame(game){
        setGames([...games, game])
        }
        
    // function editGame(game){
    //     const edited = games.map(g => {
    //         if (game.id === g.id){
    //                 return game
    //             }
    //             return g
    //         })
    //         setGames(edited)
    //     }

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
      // removeGame={removeGame} 
      addGame={addGame} 
      // editGame={editGame}
      />)}



    </div>
  );
}
export default Games;