import Signup from './Signup'
import LoginForm from './LoginForm'
import { useState } from 'react'

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true)

  return (
    <div>   
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />

          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <Signup onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;


/* <LoginForm onLogin={onLogin} />
<h1>Create an account?:</h1>
<Signup setUser={setUser} /> */