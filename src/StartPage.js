import React, { Component } from 'react'
import About from './About.js'
import Home from './Home.js'
import ItemLeft from './itemLeft.js'
import ItemRight from './ItemRight.js'
import ItemPage from './itemPage.js'
import Carousel from './carousel.js'
import LandingPageBottom from './LandingPageBottom.js'
import LandingPage from './LandingPage.js'
import SellingPage from './SellingPage.js'



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

                
                <Route exact path="/itemPage" component={withRouter(ItemPage)} />
          {/*}      <Route exact path="/landingPageBottom" component={withRouter(LandingPageBottom)} />
                <Route exact path="/carousel" component={withRouter(Carousel)} /> 
                <Route exact path="/itemRight" component={withRouter(ItemRight)} />
                <Route exact path="/itemLeft" component={withRouter(ItemLeft)} />*/}
                <Route exact path="/landingPage" component={withRouter(LandingPage)} /> 
                <Route exact path="/sellingPage" component={withRouter(SellingPage)} />



                <Route path = "/">
                    
                    <Home/>
                </Route>

            </Switch>
        )
    }
} 

export default StartPage