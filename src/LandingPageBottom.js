import React, { Component } from 'react'
import './Styles/LandingPageBottomStyle.css'

import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

//import Divider from 'react-native-elements';

class LandingPageBottom extends React.Component {
    render() {
        return (
            <div >
                <div >
                <span id = "listings"> All listings</span>
                </div>

                <div id= "itemList"> 
                    <div id="item1">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>

                    </div>
                   
                    <div id="item2">
                        
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>
                   
                    <div id="item3">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>

                    <div id="item4">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>
                    <div id="item5"></div>
                    <div id="item6"></div>
                    <div id="item7"></div>
                    <div id="item8"></div>
                </div>
               
            </div>
        )
    }
}
export default LandingPageBottom;