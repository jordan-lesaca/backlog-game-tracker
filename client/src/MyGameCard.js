import EditForm from './EditForm'
import {useState} from 'react'

function MyGameCard({ game, removeGame, editGame, user }){
    const [editForm, setEditForm] = useState(false)
    const [editButton, setEditButton] = useState("Show Edit Form")

    function handleDelete(game){
        fetch(`/games/${game.id}`, {
          method: "DELETE"})
          .then(r => {
            removeGame(game)
          })
      }
    
      function handleEditButton(){
          setEditForm(!editForm)
          !editForm ? setEditButton("Hide Edit Form") : setEditButton("Show Edit Form")
        }

    return (
        <div>
            <h1>{game.title}</h1>
            <h3>{game.year}</h3>
            <h3>{game.genre}</h3>
            <button onClick={e => handleDelete(game)}>Delete</button>
          <button onClick={e => handleEditButton()}>{editButton}</button>
          {editForm ? 
          <EditForm handleEditButton={handleEditButton} 
          editGame={editGame} 
          game={game} 
          key={game.id}
          user={user}/> : null}
        </div>
    )
}

export default MyGameCard