import { useState } from "react"

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [ errors, setErrors ] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors)) 
      }
    });
  }

  return (
    <div>
      <h1>Login</h1>
    <form onSubmit={handleSubmit}>
            <label> Username: </label>
            <input 
            type="text" 
            id="username" 
            autoComplete="off"
            value={username} 
            onChange={e =>
            setUsername(e.target.value)}/> 
            <br/>

            <label> Password: </label>
            <input 
            type="text" 
            id="password" 
            autoComplete="current-password"
            value={password} 
            onChange={e =>
            setPassword(e.target.value)}
            /> 
            <br/>

            <label> Password Confirmation: </label>
            <input 
            type="text" 
            id="password_confirmation" 
            value={passwordConfirmation} 
            onChange={e =>
            setPasswordConfirmation(e.target.value)}
            /> 
            <br/>

            <button type="submit" > Login </button>
            <br/> <br/> {errors}
    </form>
    </div>
  );
}

export default LoginForm;