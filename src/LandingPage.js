import React from "react";
import Bottom from "./LandingPageBottom.js"
import SearchBar from "./SearchBar.js"

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <SearchBar/>
                <Bottom/>
            </div>
        )
    }
}

export default LandingPage;
