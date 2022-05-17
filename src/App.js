import logo from './logo.svg';
import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contactus from './Components/Contactus';

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="justify-content-end">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/signup">Signup</NavLink>
              <NavLink className="nav-link" to="/login">Login</NavLink>
              <NavLink className="nav-link" to="/contactus">ContactUs</NavLink>
            </Nav>
          </Container>
        </Navbar>
        <br />

      </>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
