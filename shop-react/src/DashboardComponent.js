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

            <div className="background">

                <Grid >
                    <Row>
                        <HeaderComponent />
                    </Row>

                    <Row>

                        <Jumbotron>

                            <div id="content">
                              
                                <ProductCatalogComponent />
                                
                            </div>

                        </Jumbotron>

                    </Row>

                </Grid>
            </div>

        );

    }

}

export default DashboardComponent;