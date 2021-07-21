import React, { Component } from 'react'
import About from './About.js'
import Home from './Home.js'
import ItemLeft from './itemLeft.js'
import ItemRight from './ItemRight.js'
import ItemPage from './itemPage.js'
<<<<<<< HEAD
import LandingPageBottom from './LandingPageBottom.js'
=======
import Carousel from './carousel.js'
>>>>>>> f504497f797f892229eefe7c4f1aff93887f94fa


import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

import { BrowserRouter, Route, Switch, Link, Router, withRouter} from "react-router-dom";

class StartPage extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route exact path="/itemRight" component={withRouter(ItemRight)} />
                <Route exact path="/itemLeft" component={withRouter(ItemLeft)} />
                <Route exact path="/carousel" component={withRouter(Carousel)} />
                <Route exact path="/itemPage" component={withRouter(ItemPage)} />
                <Route exact path="/landingPageBottom" component={withRouter(LandingPageBottom)} />
                <Route path = "/">
                    <Home/>
                </Route>

            </Switch>
        )
    }
} 

export default StartPage