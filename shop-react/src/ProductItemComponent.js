import React, { Component } from 'react';

class ProductItemComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            product: props.product
        };
    }

    render() {
        return (

            <div class="bordered">

                <img src="../../assets/{{product.image}}" alt="image {{product.name}}" height="150" width="100%" />

                <h4>{ this.state.product.name }</h4>

                <h6><strong>Precio:</strong> { this.state.product.price }</h6>

                <h6> <strong> Unidades disponibles: </strong> { this.state.product.stock }</h6>

                <a routerLink="/productDetail/{{product.id}}"> <button type="button" class="badge badge-primary">Ver más</button> </a>

                <button type="button" class="badge badge-warning">Añadir</button>

                <input type="number" class="" />

            </div>

        );
    }

}

export default ProductItemComponent;