import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import NavBar from './NavBar'
import Games from './Games'
import Home from './Home'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => { //auto-login
    fetch("/me").then((r) => {  
      if (r.ok) { 
        r.json().then((user) => setUser(user))}
      }
      )
    }, []);  

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }

  if (!user) return <Login onLogin={setUser} />  
  
  return (

    <div className="App">
      <NavBar onLogout={handleLogout} />
      <Switch>   
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/allgames">
          <Games user={user} key={user.id} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;