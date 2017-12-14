import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './ProductItemComponent.css';

class ProductItemComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            product: props.product,
            purchaseQuantity:0
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {


    }

    addToCart() {
        alert("add to cart");
    }

    viewProductDetail() {
        alert("product Detail");
    }

    render() {

        var img = require('./img/' + this.state.product.image);

        return (

            <div className="bordered">

                <img src={img} alt={this.state.product.image} height={150} width={'100%'} />

                <h4>{this.state.product.name}</h4>

                <h6><strong>Precio:</strong> {this.state.product.price}</h6>

                <h6> <strong> Unidades disponibles: </strong> {this.state.product.stock}</h6>

                <Button bsStyle="primary" className="badgeButton" onClick={this.viewProductDetail}>Ver más</Button>
                <Button bsStyle="warning" className="badgeButton" onClick={this.addToCart}>Añadir</Button>
                <input type="number" className="" onChange={this.onChangeHandler} value={this.state.purchaseQuantity} />

            </div>

        );
    }

}

export default ProductItemComponent;