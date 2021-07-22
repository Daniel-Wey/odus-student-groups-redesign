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
            <div id="Home-main">
                
                <img src={logo} alt="Tiger Trade logo"/>
                <br></br><br></br><br></br>
                <span><b>Trade goods with other Princeton students!</b></span>  
                <br></br><br></br><br></br>

                <button class="button" id="loginButton"><span><b>LOG IN!</b></span></button>

                <div id="feedback">
                    <span>Questions or concerns?</span>
                    <button id="feedbackButton"><b><u>Send us feedback!</u></b></button>
                </div>
                <br></br>

                {/* temporary link below 
                <p><a href="itemLeft">temporary link to specific item page (left)</a></p>
                <p><a href="itemRight">temporary link to specific item page (right)</a></p>*/}
                <p><a href="itemPage">temporary link to specific item page (merge)</a></p>
                <p><a href="carousel">temporary link to carousel</a></p>
                <p><a href="landingPageBottom">temporary link to landing page bottom</a></p>
                <p><a href="landingPage">landing page merge</a></p>

               
                <div id="bottomBar">
                    <span class = "bottomText" >Made with love @Hoagie </span>
                </div>
            </div>
        ) 
    }
}

export default Home;