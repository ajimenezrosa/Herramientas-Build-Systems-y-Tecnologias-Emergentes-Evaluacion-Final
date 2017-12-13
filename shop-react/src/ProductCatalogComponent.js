import React, { Component } from 'react';
import ProductItemComponent from './ProductItemComponent.js'
import { Grid, Row, Col } from 'react-bootstrap';

class ProductCatalogComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSourceReady: false,
      searchingText: '',
      productsToDisplay: [],
      products: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    this.setState({
      searchingText: event.target.value
    });

  }

  componentDidMount() {

    // fetch

  }

  render() {

    if (this.dataSourceReady) {

    }

    return (

      <Grid>

        <Row>

          <Col lg={6}>

            <h1>Catálogo de productos</h1>

          </Col>

          <Col lg={6} className="text-right">
            <p>¿Qué estás buscando?</p>
            <input type="text" value={this.state.searchingText} onChange={this.handleChange} />
          </Col>

        </Row>

        <Row>

          {this.state.dataSourceReady &&
            <Col>

              <ProductItemComponent />

            </Col>
          }

        </Row>

      </Grid>

    );

  }

}

export default ProductCatalogComponent;