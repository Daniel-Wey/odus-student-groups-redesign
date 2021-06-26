import React, { Component } from 'react'
import './homeStyle.css'

// Replace with local path, ensurre that "./" is at the beginning if sourced from same directory
import logo from './images/tigertradelogo.png'
import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

class Home extends React.Component {
    render() {
        return (
            <div id="main">
                
                <img src={logo} alt="Tiger Trade logo"/>
                <br></br><br></br><br></br>
                <span><b>Trade goods with other Princeton students!</b></span>  
                <br></br><br></br><br></br>

                <button class="button" id="loginButton"><span><b>LOG IN!</b></span></button>

                <div id="feedback">
                    <span>Questions or concerns?</span>
                    <button id="feedbackButton"><b><u>Send us feedback!</u></b></button>
                </div>
                <div id="bottomBar"> </div>
            </div>
        ) 
    }
}

export default Home;