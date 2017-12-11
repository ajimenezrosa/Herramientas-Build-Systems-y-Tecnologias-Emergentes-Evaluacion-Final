import React, {Component} from 'react';
import ProductItemComponent from './ProductItemComponent.js'

class ProductCatalogComponent extends Component{

    render(){

        return (
            <div class="container">
            
              <div class="row">
            
                <div class="col">
            
                  <h1>Catálogo de productos</h1>
            
                </div>
            
                <div class="col text-right">
            
                  <p>¿Qué estás buscando?</p>
                  <input type="text" />
            
                </div>
            
              </div>
            
              <div class="row">
            
                <div class="col-3">
                  <ProductItemComponent />
                </div>
            
              </div>
            
            </div>
            
        );

    }

}

export default ProductCatalogComponent;