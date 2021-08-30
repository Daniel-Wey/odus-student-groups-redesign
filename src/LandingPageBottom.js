import React from 'react'
import './Styles/LandingPageBottomStyle.css'
import Tile from "./Tile.js"



//import Divider from 'react-native-elements';

class LandingPageBottom extends React.Component {
    render() {
        return (
            <div>


                <div style={{ display: "flex", flexDirection:"row", alignItems: "center", }}>
                    <div id="firstRow">
                        <Tile id="product1" productUrl={"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt={"Princeton mug"} name={"Princeton mug"} amt={50} tagNames={["test", "test2"]} />
                        <Tile id="product2" productUrl={"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt={"Princeton mug"} name={"Princeton mug"} amt={50} tagNames={["test"]} />
                        <Tile id="product3" productUrl={"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt={"Princeton mug"} name={"Princeton mug"} amt={50} tagNames={["test"]} />

                    </div>

                    {/*
                    <div id = "secRow">
                    <Tile id ="product1" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product2" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product3" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product4" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product5" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    
                    
                    </div>
                    */}
                    {/*
                    <div id = "thirdRow">
                    <Tile id ="product1" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product2" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product3" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product4" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product5" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />


                    </div>

                    <div id = "fourthRow">
                    <Tile id ="product1" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product2" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product3" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product4" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />
                    <Tile id ="product5" productUrl = {"https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg"} alt = {"Princeton mug"} name = {"Princeton mug"} amt = {50} />


                    </div>
                
                    
                    */}
                    {/* 
                    <div id="item1">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>

                    </div>
                   
                    <div id="item2">
                        
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>
                   
                    <div id="item3">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>

                    <div id="item4">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>
                    <div id="item5">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>

                    <div id="item6">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>
                    <div id="item7">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>
                    <div id="item8">
                    <span class="name"> Item Name</span>
                    <span class="amt"> $$</span>
                    </div>
                    */}
                </div>

            </div>
        )
    }
}
export default LandingPageBottom;