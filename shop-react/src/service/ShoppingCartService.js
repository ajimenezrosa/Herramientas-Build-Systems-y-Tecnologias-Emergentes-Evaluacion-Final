import React from 'react';
import ReactDOM from 'react-dom';
import DashboardComponent from '../DashboardComponent.js';
import ShoppingCartItem from '../model/ShoppingCartItem';

export default class ShoppingCartService {

    static instance = null;

    shoppingCartItems = []

    static getInstance() {

        if (this.instance == null) {
            this.instance = new ShoppingCartService();
        }
        
        return this.instance;

    }

    addProduct(product, quantity) {

        const found = this.shoppingCartItems.find(sci => sci.product.id === product.id);

        if (found != null) {

            if (quantity === 0) {

                const index = this.shoppingCartItems.indexOf(found, 0);
                this.shoppingCartItems.splice(index, 1);

            } else {

                found.quantity = quantity

            }

        } else if (quantity > 0) {

            const shoppingCartItem = new ShoppingCartItem(product, quantity);
            
            this.shoppingCartItems.push(shoppingCartItem);

        }

    }

    resetShoppingCart() {

        this.shoppingCartItems = [];

    }

    payShoppingCart() {

        if (this.shoppingCartItems.length > 0) {

            const item = this.shoppingCartItems[0]

            this.payProduct(item);

        }

    }

    payProduct(item) {

        item.product.stock -= item.quantity;

        this.productService.performPutProduct(this.sessionService.user.token, item.product).subscribe(
            data => {

                const index = this.shoppingCartItems.indexOf(item, 0);

                if (index === this.shoppingCartItems.length - 1) {

                    this.resetShoppingCart();
                    
                    ReactDOM.render(
                        <DashboardComponent />,
                        document.getElementById('root')
                      );

                } else {

                    const sci = this.shoppingCartItems[index + 1];

                    this.payProduct(sci);

                }

            },
            error => {

                alert("Ocurrió un error al Pagar el carrito");

            }
        );

    }

    total() {

        var total = 0;

        for (let item of this.shoppingCartItems) {
            total += item.subtotal();
        }

        return total;

    }
}