import { useState } from 'react';

const cohortName = '2306-FSA-ET-WEB-FT';
const baseURL = `https://strangers-things.herokuapp.com/api/${cohortName}`
// const postsURL = `${baseURL}/posts`
const signupURL = `${baseURL}/signup`

const SignUpForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch(signupURL, {
        method: "POST",
        body: JSON.stringify({
            username,
            password
        }),
        headers : {
            "Content-Type":"application/json"
        }
    });
    const data = await response.json();
    console.log(data);

    } catch(err) {
        setError(err.message);
    }
    console.log("Submit success");
    }

    return (
        <>
        <h2>Sign Up Form</h2>
        <p>URL test: {signupURL}</p>
        <p>Username Test: {username}</p> 
        {/* ^^ Remove ^^ */}
        <p>Password Test: {password}</p> 
        {/* ^^ Remove ^^ */}
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