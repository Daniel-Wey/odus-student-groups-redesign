import React, { Component } from 'react'
import './itemLeftstyles.css'

import plush1 from './images/plush1.jpg'
import plush2 from './images/plush2.jpeg'
import plush3 from './images/plush3.jpeg'
import avatar from './images/avatar.png'
import rating from './images/tempRating.png'


// Replace with local path, ensurre that "./" is at the beginning if sourced from same directory
import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

class itemLeft extends React.Component {
    render() {
        return (
            <div id="left">

                <div id="images">   
                    <div id="smallImages">
                        <div class="sideImg" id="img1">
                            <img src={plush1} alt="sample"/>
                        </div>
                        <br></br>
                        <div class="sideImg" id="img2">
                            <img src={plush2} alt="sample"/>
                        </div>
                        <br></br>
                        <div class="sideImg" id="img3">
                            <img src={plush3} alt="sample"/>
                        </div>
                    </div>

                    <div id="mainImage">
                    <div id="img1Main">
                            <img src={plush1} alt="sample"/>
                        </div>
                    </div>
                </div>

                <div id="ratings">
                    <img id="avatar" src={avatar} alt="avatar"/>
                    <div id="userStars">
                        <span id="username">Listing by PrincetonStudent00263</span>
                        <br></br>
                        <img id="rate" src={rating} alt="sample"/>
                    </div>
                    <button id="ask"><span>Ask the Seller<br></br> a Question</span></button>
                </div>

                <div id="bottomBar">
                    <span class = "bottomText" >Made with love @Hoagie </span>
                </div>

            </div>
        ) 
    }
}

export default itemLeft;