import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent.js';
import ProductCatalogComponent from './ProductCatalogComponent';
import { Jumbotron, Grid, Row } from 'react-bootstrap';
import './DashboardComponent.css';

class DashboardComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {

        return (

            <div class="background">

                <Grid >
                    <Row>
                        <HeaderComponent />
                    </Row>

                    <br />
                    <Row>

                        <Jumbotron>

                            <ProductCatalogComponent />

                        </Jumbotron>

                    </Row>

                </Grid>
            </div>

        );

    }

}

export default DashboardComponent;