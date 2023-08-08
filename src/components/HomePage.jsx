import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'
import { useState } from 'react'

function HomePage() {

    const [token, setToken] = useState(null);

    return (
      <>
        <h1>Home Page</h1>
        {token && <p>Token: {token}</p>}
        <h2>Log In</h2>
        <h2>Sign Up</h2>
        <SignUpForm setToken={setToken} />
        <Authenticate />
      </>
    )
  }
  
  export default HomePage