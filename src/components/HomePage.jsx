import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'
import { useState } from 'react'

function HomePage() {

    const [token, setToken] = useState(null);

    return (
      <>
        <h1>Test: Home Page</h1>
        {token && <p>Token: {token}</p>}
        <SignUpForm setToken={setToken} />
        <Authenticate />
      </>
    )
  }
  
  export default HomePage