import { useState } from 'react'
import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'

function HomePage() {

    return (
      <>
        <h1>Test: Home Page</h1>
        <SignUpForm />
        <Authenticate />
      </>
    )
  }
  
  export default HomePage