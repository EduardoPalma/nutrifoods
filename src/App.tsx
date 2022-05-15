import { Init } from './componentes/Inicio';
import './App.css';
import { useState } from 'react';
import { Navbar, Container, Button, Offcanvas, Nav, Form, FormControl, NavLink } from 'react-bootstrap';
import titulo from './img/logo_transparent.png'
import { Counter } from './componentes/Counter';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Recetas from './componentes/Recetas';

function App() {
    const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     return (
        <Router>
          <Navbar className='border-bottom border-light' bg="dark" variant="dark" expand = "lg" sticky="top">
            <Container >
                <Button variant="outline-light" onClick={handleShow}><i className="bi bi-card-list"></i></Button>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu desplegable</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        datos Correspondientes
                    </Offcanvas.Body>
                </Offcanvas>
                <Navbar.Brand>
                    <img src= {titulo} width = "110px" height = "35px" alt="" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink href="/home">Inicio</NavLink>
                        <NavLink href="/recetas">Menus</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
              <Route path='/Recetas' element={<Recetas></Recetas>}></Route>
              <Route path='/home' element={<Init></Init>}></Route>
          </Routes>
        </Router>

     );
}

export default App;
