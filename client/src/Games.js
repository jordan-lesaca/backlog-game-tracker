import React from 'react'
import { useEffect, useState } from 'react'
import AllGames from './AllGames'
import MyGames from './MyGames'

function Games( { user } ) {
  const [games, setGames] = useState([]);
//   const [myGames, setMyGames ] = useState([])

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
    
        useEffect(() => {
          fetch(`/mygames`)
          .then((r) => r.json())
          .then(games => setGames(games))    
          }, [])


  return (
    <div>
        <AllGames games={games} user={user} /> 




    </div>
  );
}
export default Games;

/* <MyGames myGames={myGames} removeGame={removeGame} addGame={addGame} editGame={editGame}/> */

// {myGames.map((myGame) => 
//     <MyGames myGame={myGame} 
//     removeGame={removeGame} 
//     addGame={addGame} 
//     editGame={editGame}/>)}

        // <MyGames user={user} />  