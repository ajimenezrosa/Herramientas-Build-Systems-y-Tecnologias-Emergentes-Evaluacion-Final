import React, { Component } from 'react';
import cart from './img/cart.png';
import ReactDOM from 'react-dom';
import logout from './img/logout.png';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ShoppingCartService from './service/ShoppingCartService.js';
import LoginComponent from './LoginComponent';
import ShoppingCartComponent from './ShoppingCartComponent.js';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            service: ShoppingCartService.getInstance()
        }

        this.openCart = this.openCart.bind(this);
        this.logout = this.logout.bind(this);
    }

    openCart() {

        ReactDOM.render(
            <ShoppingCartComponent />,
            document.getElementById('content')
        );

    }

    logout() {

        this.state.service.resetShoppingCart()

        ReactDOM.render(
            <LoginComponent />,
            document.getElementById('root')
        );

    }

    render() {

        return (

            <Navbar>
                <Nav pullRight>
                    <NavItem onClick={this.openCart}>
                        <img src={cart} alt="" height="20" />
                        {this.state.service.shoppingCartItems.length > 0 &&
                            <span className="badge badge-danger">{this.state.service.shoppingCartItems.length}</span>
                        }

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