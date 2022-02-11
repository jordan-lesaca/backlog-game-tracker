import {useState} from "react"

function EditForm({game, user, editGame, handleEditButton}){
    const [title, setTitle] = useState(game.title)
    const [year, setYear] = useState(game.year)
    const [genre, setGenre] = useState(game.genre)


    function handleSubmit(e){
        e.preventDefault()
        setTitle("")
        setYear(0)
        setGenre("")
        fetch(`/games/${game.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, year, genre,
                user_id: user.id
            }),
        })
          .then(r => r.json())
          .then(g => {
              editGame(g)
              handleEditButton()
            })
    }
    return (
        <div>
    <form onSubmit={handleSubmit}>
    <h2>Edit {console.log(game)} </h2>
        <label> Game Title: </label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
        <label>Year Released: </label> 
        <input type="number" id="year" value={year} onChange={e => setYear(e.target.value)}/>
        <label>Genre: </label>
        <input type="text" id="genre" value={genre} onChange={e => setGenre(e.target.value)}/>
        <input type="submit"/>
    </form> 
        </div>
    )
}

export default EditForm


