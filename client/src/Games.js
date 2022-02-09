import React from 'react'
import { useEffect, useState } from 'react'
import AllGames from './AllGames'

function Games( { user } ) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`/games`)
    .then((r) => r.json())
    .then(games => setGames(games))    
    }, [])

    // useEffect(() => {
    //   fetch(`/mygames`)
    //   .then((r) => r.json())
    //   .then(games => setGames(games))    
    //   }, [])

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
      <AllGames games={games} 
      user={user} 
      key={user.id}
      removeGame={removeGame} 
      addGame={addGame} 
      editGame={editGame}/>
    </div>
  );
}
export default Games;