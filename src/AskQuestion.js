import React, { Component } from 'react'
import {
    Row, Col, InputGroup, Input, Button, Form,
    ListGroup, ListGroupItem, Container, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';


class AskQuestion extends React.Component {


    state = {
        title: '',
        hasMoreItems: true,
        modal: false,
        dropdownOpen: false
    }
    
    toggleModal = (e) => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
        <div>
            <Button onClick={this.toggleModal} className='ml-auto btn-sm' outline color="secondary">Ask Question</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
                <ModalHeader toggle={this.toggleModal}>Ask Question</ModalHeader>
                <ModalBody>
                    <ListGroupItem>
                        Make sure your question hasn't been asked already
                    </ListGroupItem>
                    <ListGroupItem>
                        Keep your question short and to the point
                    </ListGroupItem>
                    <ListGroupItem>
                        Double-check grammar and spelling
                    </ListGroupItem>

                    <Form>
                        <InputGroup className='my-2 mt-3'>
                            <Input placeholder="Start your question with 'What', 'How, 'Why', etc."
                                name='title' value={this.state.title} onChange={this.setQuestion} />

                        </InputGroup>

                    </Form>


                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.submitQuestion} outline color="success">Ask</Button>{' '}
                    <Button onClick={this.toggleModal} outline color="danger">Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        )
    }
}

export default AskQuestion;