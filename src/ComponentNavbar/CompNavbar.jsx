import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import {

  Link,
} from "react-router-dom";



const CompNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <Navbar expand="md" dark id="Navbar">
      <Container>
        <NavbarBrand id="NavbarBrand" href="/hello">DeveloperAngkasa</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem>
              <NavLink>
                <Link id="Link" to="/hello">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link id="Link" to="/tentang-kami">TentangKami</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Tutorial
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/list-learn-html">HTML</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/list-learn-css">CSS</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/list-learn-javascript">JAVASCRIPT</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/list-learn-bootstrapt">BOOTSTRAP</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        </Collapse>
      </Container>
    </Navbar>

  );
}

export default CompNavbar;