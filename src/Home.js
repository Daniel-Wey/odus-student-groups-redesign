import React, { Component } from 'react'

// Replace with local path, ensurre that "./" is at the beginning if sourced from same directory
import logo from './images/tigertradelogo.png'
import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

// This will be where to make the "Home" page
class Home extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className="logo" alt="Tiger Trade"/>
            
                <h2>Trade goods with other Princeton students!</h2> 


                <h2>Questions or concerns? 
                    <button id="feedback"><b>Send us feedback!</b></button>
                </h2> 
            </div>
        )
    }
}

export default Home;