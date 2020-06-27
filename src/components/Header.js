import React, { Component } from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
    }

    closeNavBar = (event) => {
        this.setState({isNavOpen: false})
    }

    toggleNav() {
        this.setState({
        isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar dark expand="md" style={{background:'black'}} className="border-bottom border-white">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar style={{marginLeft: 'auto'}}>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home' onClick={(event) => this.closeNavBar(event)}>
                                        <span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about' onClick={(event) => this.closeNavBar(event)}>
                                        <span className="fa fa-info fa-lg"></span> About Me</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/projects' onClick={(event) => this.closeNavBar(event)}>
                                        <span className="fa fa-product-hunt"></span> Projects</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;