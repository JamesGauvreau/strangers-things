const LogInForm = () => {
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
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
};

export default LogInForm;
