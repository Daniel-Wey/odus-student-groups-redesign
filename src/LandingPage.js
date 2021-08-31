import React from "react";
import Filter from "./Filter.js";
import Bottom from "./LandingPageBottom.js"
import SearchBar from "./SearchBar.js"
import { Pane } from "evergreen-ui";


class TileModel {
    constructor(id, productUrl, alt, name, amt, tagNames) {
        this.id = id;
        this.productUrl = productUrl;
        this.alt = alt;
        this.name = name; 
        this.amt = amt;
        this.tagNames = tagNames;
    }
}

class LandingPage extends React.Component {
    constructor(props) {
        super(props)

        var dataList = [];

        const tile1 = new TileModel("product1", "https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg", "Princeton mug", "Princeton mug", 50, ["test", "test2"]);
        const tile2 = new TileModel("product2", "https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg", "Princeton mug", "Princeton mug", 50, ["test"]);
        const tile3 = new TileModel("product3", "https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg", "Princeton mug", "Princeton mug", 50, ["test"]);
        const tile4 = new TileModel("product4", "https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg", "Princeton mug", "Princeton mug", 50, ["test"]);


        dataList.push(tile1);
        dataList.push(tile2);
        dataList.push(tile3);
        dataList.push(tile4);

        this.state = {
            filteredData: dataList,
            dataList: dataList
        }

        this.dataHandler = this.dataHandler.bind(this);
    }

    dataHandler(newData) {
        this.setState({
            filteredData: newData
        });
    }

    render() {
        console.log("This is a test");
        return (
            <div>

                <Pane display="flex" flexDirection="row">
                <Filter dataList = {this.state.dataList} dataHandler = {this.dataHandler}/>
                    <Pane display="flex" flexDirection="column">
                        <SearchBar />
                        <Bottom filteredData = {this.state.filteredData}/>
                    </Pane>
                    <Pane width={250}></Pane>
                </Pane>

            </div>
        )
    }
}

export default LandingPage;
