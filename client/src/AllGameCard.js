import EditForm from './EditForm'
import {useState} from 'react'

function AllGameCard({ game, removeGame, editGame, user }  ) {
  const [editForm, setEditForm] = useState(false)
  const [editButton, setEditButton] = useState("Show Edit Form")

  function handleDelete(game){
    fetch(`/games/${game.id}`, {
      method: "DELETE"})
      .then(r => {
        removeGame(game)
      })
  }

  function handleEdit(){
      setEditForm(!editForm)
      !editForm ? setEditButton("Hide Edit Form") : setEditButton("Show Edit Form")
    }

    return (
      <div>
          <h1>{game.title} </h1>
          <h3>{game.release_year} </h3>
          <h3>{game.genre} </h3>
          <br/>
          <button onClick={e => handleDelete(game)}>Delete</button>
          <button onClick={e => handleEdit()}>{editButton}</button>
          {editForm ? 
          <EditForm handleEdit={handleEdit} editGame={editGame} game={game} user={user}/> : null}
      </div>
    );
  }
  export default AllGameCard;