import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import Log from "./Components/Log";
import Posts from "./Components/Posts";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar bg="dark" variant="dark">
            <Button className="btn" variant="success" as={Link} to={"/"}>
              Home
            </Button>
            <Button variant="success" as={Link} to={"/login"}>
              Login
            </Button>
            <Button variant="success" as={Link} to={"/register"}>
              Register
            </Button>
            <Button variant="success" as={Link} to={"/posts"}>
              Post
            </Button>
          </Navbar>
        <Routes>
          <Route path="/login" element={<Log />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
