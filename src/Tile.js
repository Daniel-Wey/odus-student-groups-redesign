import React, { Component } from 'react'
import "./Styles/LandingPageBottomStyle.css"

class Tile extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id = "item1">
                <img src = {this.props.productUrl} alt = {this.props.alt}/>
                <span class="name">{this.props.name}</span>
                <span class="amt">{this.props.price}</span>
            </div>
        )
    }
}

export default Tile;