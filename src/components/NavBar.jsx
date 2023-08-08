import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import PostsPage from "./PostsPage";
import ProfilePage from "./ProfilePage";

function NavBar() {
    return (
        <div >
        <div id="navbar">
          <Link to="/">Home &nbsp; &nbsp;</Link>
          <Link to="/PostsPage">Posts &nbsp; &nbsp;</Link>
          <Link to="/ProfilePage">Profile &nbsp; &nbsp;</Link>
        </div>
        <div id="main-section">
          <h1>Test: App.jsx</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/PostsPage" element={<PostsPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    )
}

export default NavBar