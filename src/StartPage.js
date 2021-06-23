import React, { Component } from 'react'
import About from './About.js'
import Home from './Home.js'
import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class StartPage extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path = "/">
                    <Home/>
                </Route>
            </Switch>
        )
    }
} 

export default StartPage