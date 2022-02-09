function MyGamesCard({ myGames }){
    return(
        <div>
            <h1> 
                {myGames}
            </h1>
        </div>
    )
}

export default MyGamesCard

// Error: Objects are not valid as a React child If you meant to render a collection of children, use an array instead.