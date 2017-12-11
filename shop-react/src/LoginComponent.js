import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LoginComponent.css';
import DashboardComponent from './DashboardComponent.js'

class LoginComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      validUsername: true,
      validPassword: true,
      validLogin: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {

    if (event.target.id === 'username') {

      this.setState({
        username: event.target.value
      });

    } else if (event.target.id === 'password') {

      this.setState({
        password: event.target.value
      });

    }

  }

  handleSubmit(event) {

    var validForm = true;

    if (this.state.username === '') {

      this.setState({
        validUsername: false
      });

      validForm = false;

    } else {

      this.setState({
        validUsername: true
      });

    }

    if (this.state.password === '') {

      this.setState({
        validPassword: false
      });

      validForm = false;

    } else {

      this.setState({
        validPassword: true
      });

    }

    if (validForm) {

      this.performLogin(this.state.username, this.state.password);

    }

    event.preventDefault();

  }

  performLogin(username, password) {

    ReactDOM.render(
      <DashboardComponent />,
      document.getElementById('root')
    );

  }

  render() {

    var { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Alert } = require('react-bootstrap');

    return (

      <div className="fondo">
        <Grid>

          <Row className="white-text justify-content-center">

            <Col lg={6} xsOffset={3}>

              <h1 className="text-center">Inicia Sesión</h1>

              <form className="form" onSubmit={this.handleSubmit}>

                <FormGroup>
                  <ControlLabel htmlFor="username">Nombre de usuario</ControlLabel>
                  <FormControl id="username" type="text" placeholder="Usuario:" onChange={this.handleChange} value={this.state.username} />
                  {!this.state.validUsername &&
                    <ControlLabel className="error">Debes ingresar un nombre de usuario Válido</ControlLabel>
                  }
                </FormGroup>

                <FormGroup>
                  <ControlLabel htmlFor="password">Nombre de usuario</ControlLabel>
                  <FormControl id="password" type="password" placeholder="Contraseña:" onChange={this.handleChange} value={this.state.password} />
                  {!this.state.validPassword &&
                    <ControlLabel className="error">Debes introducir una contraseña válida</ControlLabel>
                  }
                </FormGroup>

                {!this.state.validLogin &&
                  <Alert bsStyle="warning">
                    <span className="glyphicon glyphicon-ban-circle"></span> El usuario o contraseña no son correctos!
                    </Alert>
                }

                <FormGroup>
                  <button type="submit" className="btn btn-success" name="button">Ingresar</button>
                </FormGroup>

              </form>

            </Col>

          </Row>

        </Grid>

      </div>

    );

  }

}

export default LoginComponent;