import React, { Component } from 'react'
import "./Styles/TileStyle.css"


class Tile extends React.Component {

    render() {
        return (
            <div id = "item1">
                <img id ="listingImage" src = {this.props.productUrl} alt = {this.props.alt}/>
                <span class="name">{this.props.name}</span>
                <span class="amt">{this.props.amt}</span>
            </div>
            
        )
    }
}

export default Tile;