import React, { Component } from 'react'
import './Styles/aboutStyle.css'

import avatar from './images/avatar.png'
import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

// This will be where to make the "About" page
class About extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="topBar">
                    <span class = "topTextTitle"><strong>About TigerTrade</strong> </span>
                    <span class = "topTextDescription">TigerTrade is a student-made e-commerce website for Princeton students. </span>
                </div>
                <div id="middle">
                    <div id="profile1">
                        <img id ="image1" src={avatar} alt="Creators logo"/>
                        <span class="caption"><strong>Dennis Jacob</strong></span>
                        <p class="bio">My bio </p>
                    </div>
                    <div id="profile2">
                        <img id ="image2" src={avatar} alt="Creators logo"/>
                        <span class= "caption"><strong>Holly Cheng</strong></span>
                        <p class="bio">My bio</p>
                    </div>
                    <div id="profile3">
                        <img id ="image3" src={avatar} alt="Creators logo"/>
                        <span class= "caption"><strong>Zoha Enver</strong></span>
                        <p class="bio">My bio</p>
                    </div>

                </div>
                <div id="bottomBar">
                    <span class = "bottomText" >Made with love @Hoagie </span>
                </div>
                
                
            </div>
        )
    }

}

export default About;