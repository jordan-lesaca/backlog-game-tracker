import Signup from './Signup'
import LoginForm from './LoginForm'
import { useState } from 'react'

function Login({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)

  return (
    <div>   
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p>
            Don't have an account? 
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <Signup setUser={setUser} />
          <p>
            Already have an account? 
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