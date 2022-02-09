import { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }
    
//     {r.json()
//         .then((user) => onLogin(user));});
//   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login:</h1>
        <label htmlFor="username">Username: </label>
        <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
     </form>
    </div>
  );
}

export default LoginForm;