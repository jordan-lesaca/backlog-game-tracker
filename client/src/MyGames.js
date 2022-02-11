import { useState, useEffect } from 'react'
import MyGameCard from './MyGameCard'

function MyGames({ user }){
    const [ games, setGames ] = useState([])

    useEffect(() => {
        fetch(`/mygames`)
        .then((r) =>         
        r.json())
        .then(games => setGames(games))    
        }, [])

    function removeGame(game){
            setGames((games)=> games.filter(g => g.id !== game.id))
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
        

    return(
        <div>
                <h3>Here are your games!:</h3>
                {games.map(game => 
                <MyGameCard key={game.id} 
                user={user} game={game}
                removeGame={removeGame}
                editGame={editGame}
                />)}
        </div>
    )
}

export default MyGames