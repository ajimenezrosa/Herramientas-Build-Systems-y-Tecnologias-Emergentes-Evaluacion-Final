import React, { Component } from 'react';
import cart from './img/cart.png';
import logout from './img/logout.png';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        this.openCart = this.openCart.bind(this);
        this.logout = this.logout.bind(this);
    }

    openCart(event) {

        alert("Abriendo Carrito");

    }

    logout(event) {

        alert("Cerrando sesión");

    }

    render() {

        return (

            <Navbar>
                <Nav pullRight>
                    <NavItem onClick={this.openCart}>
                        <img src={cart} alt="" height="20" />
                        <span className="badge badge-danger">4</span>
                    </NavItem>
                    <NavItem onClick={this.logout}>
                        <img src={logout} alt="" height="20" />
                    </NavItem>
                </Nav>
            </Navbar>

        );

    }

}

export default HeaderComponent;