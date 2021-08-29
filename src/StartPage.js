import React from 'react'
import About from './About.js'
import Home from './Home.js'
import LandingPage from './LandingPage.js'
import SellingPage from './SellingPage.js'
import ItemPage from './itemPage.js'
import SplashPage from './SplashPage.js'

/*
import ItemLeft from './itemLeft.js'
import ItemRight from './ItemRight.js'
import Carousel from './carousel.js'
import LandingPageBottom from './LandingPageBottom.js'

import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';
*/

import { /*BrowserRouter, Link, Router, */Route, Switch, withRouter} from "react-router-dom";

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
                <Route exact path="/splashPage" component={withRouter(SplashPage)} />



                <Route path = "/">
                    
                    <Home/>
                </Route>

            </Switch>
        )
    }
} 

export default StartPage