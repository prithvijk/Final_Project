import React, { Component } from "react";
import history from './../history';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap';
import { Router, Switch, Route, Link, Routes} from "react-router-dom";

export default class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state ={value: '',
  password:'',
  redirectToReferrer: false};
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChangeUsername(event)
  {
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }
  handleChangePassword(event)
  {
    this.setState({password: event.target.value});
    console.log(event.target.value)
  }
  handleSubmit(event) {
    alert('Username is: ' + this.state.value);

    event.preventDefault();
  }


render()
{

    
  

    function CrestLogo(){
      return(
        <h1 id="crest_logo" className="display-4">C3I<br/>Healthcare<br/>System</h1>
      );
    }
      return(

        
        <Container id="main_page1">
        <Row id="main_page">
          <Col  className="leftside">
              <CrestLogo />  
          </Col >
          <Col  className="rightside">
          <Card id="login_card">
        
        <Card.Body>
        <Card.Title id ="logo_text">Login</Card.Title>
        <Form onSubmit={() => history.push('/Products')} >
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Username" value={this.state.value} onChange={this.handleChangeUsername}/>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
    </Form.Group>
    <Form.Group id = "main_button">
    <Button  variant="primary" type="submit"  >
      Submit
    </Button>
    </Form.Group>
    </Form>
      </Card.Body>
    </Card>
            
          </Col>
        </Row>
        </Container>
      );
  }


}
