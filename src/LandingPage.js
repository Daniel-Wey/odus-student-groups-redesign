import React from "react";
import Carousel from "./carousel.js"
import Bottom from "./LandingPageBottom.js"


class landingPage extends React.Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Bottom/>
            </div>
        )
    }
}

export default landingPage;
