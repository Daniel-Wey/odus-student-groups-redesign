import React, { Component } from 'react'
import './Styles/itemLeftstyles.css'

import plush1 from './images/plush1.jpg'
import plush2 from './images/plush2.jpeg'
import plush3 from './images/plush3.jpeg'
import avatar from './images/avatar.png'


import {
    Avatar, Popover, Pane, TextInput, Button, TextareaField, CornerDialog
} from 'evergreen-ui'

// placeholder for no image
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo-Image-Placeholder.svg&psig=AOvVaw1EkSCfst21V43WsKXKzQWe&ust=1628456487633000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOieuqfnn_ICFQAAAAAdAAAAABAD


class itemLeft extends React.Component {


    render() {
        return (
            <div id="left">

                <div id="images">
                    <div id="smallImages">
                        <div class="sideImg" id="img1">
                            <img src={plush1} alt="sample" />
                        </div>
                        <br></br>
                        <div class="sideImg" id="img2">
                            <img src={plush2} alt="sample" />
                        </div>
                        <br></br>
                        <div class="sideImg" id="img3">
                            <img src={plush3} alt="sample" />
                        </div>
                    </div>

                    <div id="mainImage">
                        <div id="img1Main">
                            <img src={plush1} alt="sample" />
                        </div>
                    </div>
                </div>

                <div id="ratings">
                    <Avatar
                        name={this.props.sellerName}
                        src={this.props.sellerImage}
                        size={80} marginRight={16} />

                    <div id="userStars">
                        <span id="username">Listing by {this.props.sellerName}</span>

                        {/*<img id="rate" src={rating} alt="sample"/>*/}
                    </div>
                    <Popover
                        bringFocusInside
                        content={({ close }) => (
                            <Pane
                                width={320}
                                height={320}
                                paddingX={40}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                flexDirection="column"
                            >
                                <span>Enter your question for the seller</span>
                                <TextareaField
                                    description="Pull down at the lower right of the textbox to adjust your view"
                                    name="textarea-1"
                                    placeholder="Enter text here"
                                />
                                <br></br>
                                <Button onClick={close}>Close</Button>
                            </Pane>
                        )}
                    >

                        <Button
                            width={150}
                            height={80}
                            background="#D1CACA"
                            borderRadius={15}
                        ><b>Ask the seller<br></br>a question</b></Button>
                    </Popover>
                </div>


                <div id="bottomBar">
                    <span class="bottomText" >Made with love @Hoagie </span>
                </div>

            </div>
        )
    }
}

export default itemLeft;