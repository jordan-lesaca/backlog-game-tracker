import { useState, useEffect } from 'react'
import MyGameCard from './MyGameCard'
import GameForm from './GameForm'

function MyGames({ user }){
  const [ games, setGames ] = useState([])

  useEffect(() => {
  fetch(`/mygames`)
  .then((r) => r.json())
  .then(games => setGames(games))    
  }, [])

  function addGame(game){
    setGames([...games, game])
  }

  function removeGame(game){
    setGames((games) => 
    games.filter(g => g.id !== game.id))
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
        
if (games.length === 0) return (
    <div>  
        <h1> You must have a game in your games list to view your games!</h1>
        <h3> Because otherwise, what do you have to view?.. </h3>
        <GameForm user={user} addGame={addGame} /> 
    </div> )
else 
    return(
    <div>
        <h3>Here are your games!:</h3>
            {games.map(game => 
                <MyGameCard key={game.id} 
                user={user} 
                game={game}
                removeGame={removeGame}
                editGame={editGame}/>)}
    </div>
    )
}

export default MyGames