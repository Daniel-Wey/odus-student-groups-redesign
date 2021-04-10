import React, { Component } from 'react'
import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

import About from './About.js'
import Login from './Login.js'
import Home from './Home.js'



class SplashPage extends React.Component {
    state = {
        showHome: true,
        showLogin: false,
        showAbout: false
    }

    showHome = (e) => {
        this.setState({
            showHome: true,
            showLogin: false,
            showAbout: false
        })
    }

    showLogin = (e) => {
        this.setState({
            showHome: false,
            showLogin: true,
            showAbout: false
        })


        //this.props.stopQuestionFetchingOnMount();

    }

    showAbout = (e) => {
        this.setState({
            showHome: false,
            showLogin: false,
            showAbout: true
        })
        //this.props.stopQuestionFetchingOnMount();

    }
    render() {
        return (
            <div>
                <Container>

                    <Row>
                        <Col >

                            {/* Might need to change boolean logic from ternary setting */}
                            <h5 className='text-center'>
                                {this.state.showHome ? (
                                    <span className='mr-1'><Button color="secondary" style={{ cursor: 'pointer' }} onClick={this.showHome}>Home</Button></span>

                                ) : (
                                        <span className='mr-1'><Button color="light" style={{ cursor: 'pointer' }} onClick={this.showHome}>Home</Button></span>

                                    )}
                                {this.state.showLogin ? (
                                    <span className='mr-1'>  <Button color="dark" style={{ cursor: 'pointer' }} onClick={this.showLogin}>Login</Button></span>

                                ) : (
                                        <span className='mr-1'>  <Button color="light" style={{ cursor: 'pointer' }} onClick={this.showLogin}>Login</Button></span>

                                    )}

                                {this.state.showAbout ? (
                                    <span className='mr-1'>  <Button color="dark" style={{ cursor: 'pointer' }} onClick={this.showAbout}>About</Button></span>

                                ) : (
                                        <span className='mr-1'>  <Button color="light" style={{ cursor: 'pointer' }} onClick={this.showAbout}>About</Button></span>

                                    )}

                            </h5>

                        </Col>
                    </Row>



                    {this.state.showHome && (
                        <Home />
                    )}


                    {this.state.showLogin && (
                        <Login />
                    )}

                    {this.state.showAbout && (
                        <About />
                    )}

                </Container>
            </div>

        )
    }

}


/*const mapStateToProps = state => ({
    question: state.question
})*/

//export default connect(mapStateToProps, { stopQuestionFetchingOnMount })(MainPage)
export default SplashPage;
