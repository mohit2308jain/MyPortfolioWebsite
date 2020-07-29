import React from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [isNavOpen, toggleNav] = React.useState(false);

    return(
        <div>
            <Navbar dark expand="md" style={{background:'black'}} className="border-bottom border-white">
                <div className="container">
                    <NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar style={{marginLeft: 'auto'}}>
                            <NavItem>
                                <NavLink className="nav-link" to='/home' onClick={() => toggleNav(false)}>
                                    <span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about' onClick={() => toggleNav(false)}>
                                    <span className="fa fa-info fa-lg"></span> About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact' onClick={() => toggleNav(false)}>
                                    <span className="fa fa-info fa-lg"></span> Contact Me</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;