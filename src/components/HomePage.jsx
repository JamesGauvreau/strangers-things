import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'
import { useState } from 'react'

function HomePage() {

    const [token, setToken] = useState(null);

    return (
      <>
        <h1>Home Page</h1>
        <Authenticate />
        <h2>Log In</h2>
        <SignUpForm setToken={setToken} />
        {token && <p>Token: {token}</p>}
        
      </>
    )
  }
  
  export default HomePage