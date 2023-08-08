// Currently need to fix authentication process.

import { useState } from 'react';

const cohortName = '2306-FSA-ET-WEB-FT';
const baseURL = `https://strangers-things.herokuapp.com/api/${cohortName}`
// const postsURL = `${baseURL}/posts`
const signupURL = `${baseURL}/register`
const token = 'Bearer eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9'

const SignUpForm = (props) => {

    console.log(`props test below:`)
    console.log(props)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch(signupURL, {
        method: "POST",
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            username,
            password})
        });
    const result = await response.json();
    console.log(result);
    return result

    } catch(err) {
        setError(err.message);
    }
    console.log("Submit success");
    }

    return (
        <>
        <br></br>
        <h3>Tests</h3>
        <p>URL test: {signupURL}</p>
        <p>Username Test: {username}</p> 
        {/* ^^ Remove ^^ */}
        <p>Password Test: {password}</p> 
        {/* ^^ Remove ^^ */}
        <br></br>
        {error && <p>{error}</p>} 
        {/* ^^ Remove ^^ */}
        
        <form onSubmit={handleSubmit}>
            <label>
                Username: 
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br></br>
            <label>
                Password: 
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br></br>
            <button>Submit</button>
        </form>
        </>
    );
}

export default SignUpForm;