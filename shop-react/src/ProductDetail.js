import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class ProductDetailComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      product: props.product
    }

  }

  render() {
    return (

      <div class="jumbotron">

        <Grid>

          <Row>
            <Col>

              <h1>{this.state.product.name}</h1>

            </Col>
          </Row>

          <Row>

            <Col>

              <img src="./img/{{product.image}}" alt="image {{product.name}}" height="300px" />

            </Col>

            <Col>

              <h4>{this.state.product.name}</h4>

              <h6><strong>Precio:</strong> {this.state.product.price}</h6>

              <h6> <strong> Unidades disponibles: </strong> {this.state.product.stock}</h6>

            </Col>

          </Row>

          <Row>
            <div class="col-2">

              <button type="button" class="btn btn-default" >Atrás</button>

            </div>

          </Row>

        </Grid>

      </div>

    );
  }

}

export default ProductDetailComponent;