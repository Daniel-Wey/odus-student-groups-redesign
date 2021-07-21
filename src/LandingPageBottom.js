import React, { Component } from 'react'
import './LandingPageBottomStyle.css'

import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

//import Divider from 'react-native-elements';

class LandingPageBottom extends React.Component {
    render() {
        return (
            <div>
                 <hr  />
                <span id = "listings"> All listings</span>
               
            </div>
        )
    }
}
export default LandingPageBottom;