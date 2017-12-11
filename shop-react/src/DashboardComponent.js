import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent.js';
import ProductCatalogComponent from './ProductCatalogComponent';
import { Jumbotron, Grid, Row } from 'react-bootstrap';

class DashboardComponent extends Component {

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