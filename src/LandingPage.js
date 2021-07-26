/* Note: run: 
npm install react-elastic-carousel
npm install --save styled-components
 */

import React from "react";
import Carousel from "react-elastic-carousel";
import './Styles/carousel.css';
import Card from './card.js';
import Bottom from "./LandingPageBottom.js"


class LandingPage extends React.Component {
    render() {
        const breakPoints = [
            {width:500, itemsToShow: 1},
            {width:768, itemsToShow: 2},
            {width:1200, itemsToShow: 3},
            {width:1500, itemsToShow: 4}
        ]
        return (
            <div id="carousel">
                <Carousel breakPoints={breakPoints}>
                    <Card img='https://i.ebayimg.com/images/g/pUEAAOSwNjJdgndO/s-l300.jpg' />
                    <Card img='https://cdn.shopify.com/s/files/1/1144/7988/products/3001_NA048741_CNA5676_PRINCETON_BLACK_adf3283a-95ff-491c-bee1-e93c1642f60e.jpg?v=1615343444' />
                    <Card img='https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2017/03/buyer-guide-mini-fridge1.jpg' />
                    <Card img='https://images.vintagebrand.com/pi?p=560mrvb-white-crop&geom=363%2C422%2C853%2C435%2C1346%2C425%2C363%2C1002%2C846%2C1005%2C1326%2C1002%2C397%2C1562%2C856%2C1579%2C1326%2C1582&meshType=bezier&h=600&a=7d82a7b39f119b38ff2bc7ec0cfda247%240.7251281478033201%2C0.6649757603236607%2C-0.12953344168987171%2C-0.057881393432617195%2C0'/>
                    <Card img='https://images-na.ssl-images-amazon.com/images/I/61RBdejyDRL._AC_UL1500_.jpg'/>
                    <Card img='https://pictures.abebooks.com/isbn/9780134439419-us.jpg'/>
                </Carousel>
                <Bottom/>
            </div>
        )
    }
}

export default LandingPage;
