import React, { useState } from "react"

function SignupForm({setUser}){
    const [ username, setUsername ] = useState("")
    const [ age, setAge ] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username, age}),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err) => alert(err.errors));
          }
        });
      }


    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label> Username: </label>
            <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={e =>
            setUsername(e.target.value)}/> 
            <br/>

            <label> Age: </label>
            <input type="number" 
            id="age" 
            value={age}
            onChange={e => 
            setAge(e.target.value)}/>
            <br/>
            <button type="submit"> Submit </button>
        </form>
    </div>
    )
}
export default SignupForm