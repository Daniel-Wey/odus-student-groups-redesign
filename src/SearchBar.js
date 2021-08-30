import { SearchInput, Pane, Badge, Pill, Button } from "evergreen-ui";
import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <Pane backgroundColor="white" borderRadius={20} width={800} marginTop={40} height={150} display="flex" justifyContent="center" flexDirection="column" alignItems= "flex-start" paddingTop={10} paddingLeft={20}>
                    <Pane display="flex" flexDirection="column" alignItems="flex-start" width="100%" textAlign="left" >
                        <span style={{ fontSize: "30px" }}><b>Items for Sale</b></span>
                    </Pane>
                    <Pane marginTop={20} display="flex" justifyContent="center">
                        <SearchInput placeholder = "Search" />
                        <Button borderColor="#DE7548" color="#DE7548" borderRadius={10} marginLeft ={20}>Options</Button>                     
                    </Pane>

                </Pane>
            </div>
        )
    }
}

export default SearchBar;
