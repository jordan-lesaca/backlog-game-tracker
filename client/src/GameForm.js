import { useState } from 'react'

function GameForm({ user, addGame}){
    const [ title, setTitle ] = useState("")
    const [ year, setYear ] = useState(0)
    const [ genre, setGenre ] = useState("")
    const [ errors, setErrors ] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setTitle("")
        setYear(0)
        setGenre("")
        fetch("/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, 
                year, 
                genre, 
                user_id: user.id
            }),
        }).then(r => {
            if (r.ok) { 
                r.json().then(game => {
                    addGame(game)
                 })
            } else {
                r.json().then(err => setErrors(err.errors))
            }
          })
        }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Add a Game:</h1>
                <label> Title: </label>
                    <input type="text" id="title" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}/>
                <label>Release Year: </label> 
                    <input type="number" id="Year" 
                    value={year} 
                    onChange={e => setYear(e.target.value)}/>
                <label>Genre:  </label>
                    <input type="text" id="genre" 
                    value={genre} 
                    onChange={e => setGenre(e.target.value)}/>
                <input type="submit"/>
            <br/> <br/> {errors}
      </form>
    </div>
)
}
export default GameForm