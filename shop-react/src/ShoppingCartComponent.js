import React, { Component } from 'react';
import ShoppingCartItemComponent from './ShoppingCartItemComponent.js';
import ShoppingCartService from './service/ShoppingCartService';
import { Grid, Jumbotron, Row, Col, Button } from 'react-bootstrap';

class ShoppingCartComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            service: ShoppingCartService.getInstance()
        }
    }

    render() {

        var body = [];

        this.state.service.shoppingCartItems.forEach(element => {

            body.push(<div key={element.id}><ShoppingCartItemComponent item={element} /></div>);

        });

        return (

            <Grid>

                <br />

                <Jumbotron>

                    <Grid>

                        <Row>
                            <Col>

                                <h1>Carrito de compras</h1>

                            </Col>
                        </Row>

                        <Row>

                            <Col lg={6}>

                                <Grid>

                                    {body}

                                </Grid>

                            </Col>

                            <Col lg={6}>

                                <h1>Total: {this.state.service.total()}</h1>

                                <Button bsStyle="danger">Cancelar</Button>
                                <Button bsStyle="success">Pagar</Button>

                            </Col>

                        </Row>


                    </Grid>

                </Jumbotron>

            </Grid>


        );

    }

}

export default ShoppingCartComponent;