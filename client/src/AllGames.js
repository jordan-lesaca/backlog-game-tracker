import AllGameCard from './AllGameCard'
import MyGames from './MyGames'

function AllGames({ games }){

    return (
        <div> 
            <h1> All Games </h1>
            {games.map(game =>
            <AllGameCard 
            game={game} 
            key={game.id}
            />)}

            {games.map(game =>
            <MyGames
            key={game.id}
            game={game} 
            />
            )}

        </div>
    )
}

export default AllGames