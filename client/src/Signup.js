import React, { useState } from "react"

function Signup({setUser}){
  const [ username, setUsername ] = useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return(
        <div>
          <h1>Signup:</h1>
            <form onSubmit={handleSubmit}>
              <label> Username: </label>
                <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={e =>
                setUsername(e.target.value)}/> 
                <br/>

              <label> Password: </label>
                <input 
                type="text" 
                id="password" 
                value={password} 
                onChange={e =>
                setPassword(e.target.value)}
                autoComplete="current-password"/> 
                <br/>

              <label> Password Confirmation: </label>
                <input 
                type="text" 
                id="password_confirmation" 
                value={passwordConfirmation} 
                onChange={e =>
                setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"/> 
                <br/>

              <button type="submit"> Submit </button>
              <br/><br/>{errors}
            </form>
        </div>
    )
}
export default Signup