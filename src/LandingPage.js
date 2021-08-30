import React from "react";
import Filter from "./Filter.js";
import Bottom from "./LandingPageBottom.js"
import SearchBar from "./SearchBar.js"

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredData: Array(3).fill(undefined),
        }

        this.dataHandler = this.dataHandler.bind(this);
    }

    dataHandler(newData) {
        this.setState({
            filteredData: newData
        });
    }

    setChecked(state, index) {
        const newChecked = [...this.state.checked]
        newChecked[index] = state;
        this.setState({
            checked: newChecked
        });
    }

    render() {
        return (
            <div>
                <Filter dataHandler = {this.dataHandler}/>
                <SearchBar/>
                <Bottom/>
            </div>
        )
    }
}

export default LandingPage;
