import plush1 from './images/plush1.jpg'
import plush2 from './images/plush2.jpeg'
import plush3 from './images/plush3.jpeg'

import RatingStars from './RatingStars'

import { Button, Avatar, TextareaField, CornerDialog } from 'evergreen-ui'
import React from 'react'

const imgHeight = "100px"
const imgSpacing = "30px"
const images = [plush1, plush2, plush3]

class itemPage2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown: false,
            selectedImage: 0
        }
    }

    setIsShown(state) {
        this.setState({
            isShown: state
        });
    }
    setMainImg(index) {
        if (index < 0) index += 3
        if (index > 2) index -= 3
        this.setState({
            selectedImage: index
        });

    }

    render() {
        return (
            <div style={{ background: "white", width: "1200px", borderRadius: "20px", marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "flex-start", paddingTop: "40px", paddingBottom: "20px", paddingLeft: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    {/* Side Images */}
                    <div id="side-images" style={{ width: "15%" }}>
                        <div>
                            <img style={{ height: imgHeight, filter: this.state.selectedImage === 0 ? "grayscale(0%)" : "grayscale(80%)" }} src={plush1} alt="sample" />
                        </div>
                        <div style={{ paddingTop: imgSpacing }}>
                            <img style={{ height: imgHeight, filter: this.state.selectedImage === 1 ? "grayscale(0%)" : "grayscale(80%)" }} src={plush2} alt="sample" />
                        </div>
                        <div style={{ paddingTop: imgSpacing }}>
                            <img style={{ height: imgHeight, filter: this.state.selectedImage === 2 ? "grayscale(0%)" : "grayscale(80%)" }} src={plush3} alt="sample" />
                        </div>
                    </div>

                    {/* Main Image */}
                    <div id="main-image" style={{ width: "40%", marginLeft: "20px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Button onClick={() => this.setMainImg(this.state.selectedImage - 1)}
                            borderRadius={100} width={60} height={60} style={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)", border: "none" }}>
                            <svg width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </Button>

                        <img src={images[this.state.selectedImage]} alt="sample" />

                        <Button onClick={() => this.setMainImg(this.state.selectedImage + 1)}
                            borderRadius={100} width={60} height={60} style={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)", border: "none" }}>
                            <svg width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </Button>
                    </div>

                    {/* Buying Info */}
                    <div style={{ width: "40%", fontSize: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "20px" }}>
                        <span style={{ fontSize: "40px" }}><b>Tiger Plushie</b></span>
                        <br></br>
                        <span style={{ fontSize: "30px" }}>$15</span>
                        <br></br>
                        <div>
                            <Button backgroundColor="#DE7548" color="#F8E3DA" borderRadius={10} fontSize={20} padding={20}>
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                                </svg>
                                &ensp;Request to Buy
                            </Button>
                            <span>&emsp;&emsp;</span>

                            <React.Fragment>
                                <CornerDialog
                                    title="Ask a question to the seller here!!"
                                    isShown={this.state.isShown}
                                    onCloseComplete={() => this.setIsShown(false)}
                                >
                                    <span></span>
                                    <TextareaField
                                        description="The seller will recieve a notification with your question."
                                        name="textarea-1"
                                        placeholder="Enter text here"
                                    />
                                </CornerDialog>
                                <Button onClick={() => this.setIsShown(true)} borderColor="#DE7548" color="#DE7548" borderRadius={10} fontSize={20} padding={20}>
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                    &ensp;Ask a Question
                                </Button>
                            </React.Fragment>
                        </div>
                        <br></br>
                        <span><b>Description: </b>Soft and like new. Hand-sized plushie.</span>
                        <br></br>
                        <span><b>Type of Trade: </b>Selling &emsp;&emsp; <b>Delivery: </b> Pickup</span>
                    </div>
                </div>

                {/* Seller info */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>

                    <span><b>Seller Info:&emsp;</b></span>
                    <Avatar
                        name="Test Student"
                        size={40} marginRight={16} />
                    <span style={{ fontSize: "20px" }}>Test Student</span>
                </div>
                <div style={{ fontSize: "20px", display: "flex", flexDirection: "row" }}>
                    <span>Average Rating: &nbsp;</span>
                    <RatingStars sellerRating={4.6} />
                    <span>(4.6)&emsp;&emsp;&emsp;</span>
                    <span>Items sold: 15&emsp;&emsp;&emsp;&emsp;Trades made: 4&emsp;&emsp;&emsp;&emsp;Pickup location: Blair Hall</span>

                </div>

            </div>
        )
    }
}


export default itemPage2;