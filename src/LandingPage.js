import React from "react";
import Filter from "./Filter.js";
import Bottom from "./LandingPageBottom.js"
import SearchBar from "./SearchBar.js"

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredData: [],
            dataList: []
        }

        this.dataHandler = this.dataHandler.bind(this);
    }

    dataHandler(newData) {
        this.setState({
            filteredData: newData
        });
    }

    render() {
        return (
            <div>
                <Filter data =  {} dataHandler = {this.dataHandler}/>
                <SearchBar/>
                <Bottom/>
            </div>
        )
    }
}

export default LandingPage;
