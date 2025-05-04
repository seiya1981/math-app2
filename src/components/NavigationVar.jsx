
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router,Routes, Route,Link, } from 'react-router-dom';
import Addition from './Addition.jsx';
import Subtraction from './Subtraction.jsx';

function NavigationVar() {
  return (

    <Router>
     
      
      <div>
        <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand as = {Link} to="/addition">Math Cards</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as = {Link} to="/addition">Addition</Nav.Link>
                <Nav.Link as = {Link} to="/subtraction">Subtraction</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

        <div>
         <Routes>
            <Route path="/addition" element={<Addition />}>
            </Route>

            <Route path="/subtraction" element={<Subtraction />}>
                
            </Route>
         </Routes>
      </div> 


    </Router>
  );
}

export default NavigationVar;