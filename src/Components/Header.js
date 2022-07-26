import React,{Component} from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">COVID-19</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                   <Nav.Link href="/india">India</Nav.Link>
                   <Nav.Link href="/world">World</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    }

}
export default Header;