// import MyGamesList from './MyGamesList'
// import AllGames from './AllGames'
// import MyGamesCard from './MyGamesCard'
// import { useState, useEffect } from 'react'

import React from 'react'

function MyGames({ games }){
    console.log({games})


    return (
        <div> 
            <h1>Why won't this work :(</h1>
        </div>
    )
}

export default MyGames

// <MyGamesList
// myGames={myGames} 
// editGame={editGame} 
// removeGame={removeGame} 
// addGame={addGame}/>
/* <MyGamesList myGames={myGames} editGame={editGame} removeGame={removeGame} addGame={addGame} /> */


// useEffect(() => {
//     fetch(`/mygames`)
//     .then((r) => r.json())
//     .then((myGames.map(myGame => setMyGames({myGame}))) )}, [])

