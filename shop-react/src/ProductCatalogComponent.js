import React, { Component } from 'react';
import ProductItemComponent from './ProductItemComponent.js'
import { Grid, Row, Col } from 'react-bootstrap';
import Session from './model/Session';
import Product from './model/Product';

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

    this.performGetProducts()

  }

  performGetProducts() {

    var session = Session.getInstance();

    var headers = {
      'Authorization': 'Kinvey ' + session.user.token,
      'X-Kinvey-API-Version': '3'
    };

    fetch("https://baas.kinvey.com/appdata/kid_ryL78U7WM/products", {
      method: 'get',
      headers: headers
    }).then(response => response.json())
      .then(responseJson => {

        console.log(responseJson);

        if (responseJson.error) {

          alert('error');

        } else {

          var products = [];
          responseJson.forEach(element => {

            var product = new Product();
            product.id = element._id;
            product.name = element.name;
            product.image = element.image;
            product.price = element.price;
            product.stock = element.stock;

            products.push(product);

          });

          this.setState({
            dataSourceReady: true,
            products: products,
            productsToDisplay: products
          })

        }

      })
      .catch(error => {

        console.error(error);

      })
  }

  render() {

    var body;
    if (this.dataSourceReady) {
      body = [];
      this.state.productsToDisplay.forEach(element => {

        body.push(<ProductItemComponent product={element} />);

      });


    } else {
      body = <h1>Cargando...</h1>
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

              body

            </Col>
          }

        </Row>

      </Grid>

    );

  }

}

export default ProductCatalogComponent;