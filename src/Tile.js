import React from 'react'
import "./Styles/TileStyle.css"
import { SearchInput, Pane, Badge, Pill, Button } from "evergreen-ui";


class Tile extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        var tagNames = this.props.tagNames;
        let categories = [];

        categories.push(<Badge fontSize = {15}>{tagNames[0]}</Badge>);
        for (let i = 1; i < tagNames.length; i++) {
            categories.push(<Badge marginLeft = {10} fontSize = {15}>{tagNames[i]}</Badge>);
        }

        return (
            <div>
                <Pane backgroundColor="white" borderRadius={20} width={250} marginTop={20} display="flex" justifyContent="flex-start" flexDirection="column" alignItems="center" paddingTop={10} paddingBottom={20} position ="relative" flexWrap="wrap">
                    <Pane marginTop={20} display="flex" flexDirection="column" alignItems="flex-start">
                        <span style={{fontSize:"20px"}}><b>{this.props.name}</b></span>
                        <span style={{fontSize:"15px"}} ><b>${this.props.amt}</b></span>
                        <img id="listingImage" src={this.props.productUrl} alt={this.props.alt} />
                        <Pane paddingTop = {10}>{categories}</Pane>

                    </Pane>

    
                </Pane>
            </div>
        )
    }
}

export default Tile;