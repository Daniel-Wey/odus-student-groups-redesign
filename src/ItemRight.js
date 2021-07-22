import React, { Component } from 'react'
import './Styles/ItemRightStyle.css'
import { IoInformationCircleOutline } from "react-icons/io5";
import info from './images/info.jpg'


import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';


class ItemRight extends React.Component {
    render() {
        return (
            <div id="main">
                <div id="leftSide">

                </div>
               <div id= "rightSide">
                   <div id="titleInfo">
                        <h1 id="title">Tiger Plushie</h1>
                        <span id="price"> $15 </span>
                        <span id="time"> 5 days left</span>

                   </div>
                   <div id="buy">
                        <button id ="buyButton"><strong>Buy!</strong></button>

                   </div>
                   
                   <div id="information">
                        <p id ="description"><strong>Description: </strong> Soft and is like
                        new. Is a hand sized tiger plushie. </p>
                        <span id="trade"> <strong>Type of Trade: </strong> Selling </span>

                        

                        
                        {/*<div class="tooltip">
                        
                        <img id ="moreInfo" src={info} alt="Info icon" title="this will be displayed as a tooltip"/>
                        <span class="tooltiptext">grewon.pdf</span>

                        </div>*/}
                        
                        
                        
                        
                        <span id="categories"> <strong> Categories:</strong> Plush, Toys</span>
                   </div>

               </div>

               <div id="bottomBar">
                    <span class = "bottomText" >Made with love @Hoagie </span>
                </div>
            
            </div>
        )
    }

}

export default ItemRight;