import React from 'react'
import './Styles/homeStyle.css'

// Replace with local path, ensurre that "./" is at the beginning if sourced from same directory
import logo from './images/tigertradelogo.png'

import {
    Button, TextareaField, CornerDialog
} from 'evergreen-ui'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShown: false
        }
    }


    setIsShown(input){
        this.setState({
            isShown: input
        });
    }
    render() {
        return (
            <div id="Home-main">
                
                <img src={logo} alt="Tiger Trade logo"/>
                <br></br><br></br><br></br>
                <span><b>Trade goods with other Princeton students!</b></span>  
                <br></br><br></br><br></br>

                <button className="button" id="loginButton"><span><b>LOG IN!</b></span></button>
                <div id="feedback">
                    <span>Questions or concerns?</span>
                   {/* <button id="feedbackButton"><b><u>Send us feedback!</u></b></button> */}
                    <React.Fragment>
                        <CornerDialog
                            title="Send us feedback here!"
                            isShown={this.state.isShown}
                            onCloseComplete={() => this.setIsShown(false)}
                        >
                            <span>Enter your feedback for us below </span>
                                <TextareaField
                                    description="Pull down at the lower right of the textbox to adjust your view"
                                    name="textarea-1"
                                    placeholder="Enter text here"
                                    label=""
                                />
                        </CornerDialog>
                        <Button onClick={() => this.setIsShown(true)}>
                            <b>Send us feedback!</b>
                        </Button>
                </React.Fragment>
                </div>
                <br></br>

                {/* temporary link below 
                <p><a href="itemLeft">temporary link to specific item page (left)</a></p>
                <p><a href="itemRight">temporary link to specific item page (right)</a></p>*/}
                <span><a className="temp" href="itemPage">Item page</a></span><br></br>
                <span><a className="temp" href="itemPage2">Item page v2</a></span><br></br>

           {/*     <span><a className="temp" href="carousel">link to carousel</a></span><br></br>
                <span><a className="temp" href="landingPageBottom">link to landing page bottom</a></span><br></br> */}
            <span><a className="temp" href="landingPage">landing page merge</a></span><br></br>
                <span><a className="temp" href="sellingPage">selling page</a></span><br></br>
                <span><a className="temp" href="splashPage">splash page</a></span><br></br>



            
                <div id="bottomBar">
                    <span className = "bottomText" >Made with love @Hoagie </span>
                </div>
            </div>
        ) 
    }
}

export default Home;