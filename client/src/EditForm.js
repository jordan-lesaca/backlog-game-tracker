import {useState} from "react"

function EditForm({games, user, editGame, handleEditButton}){
    const [title, setTitle] = useState(games.title)
    const [year, setYear] = useState(games.year)
    const [genre, setGenre] = useState(games.genre)

    console.log(title)

    function handleSubmit(e){
        e.preventDefault()
        setTitle("")
        setYear(0)
        setGenre("")
        fetch(`/games/${games.id}`, {
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
    <h2>Edit {console.log(title)} </h2>
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


