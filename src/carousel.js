/* Note: run: 
npm install react-elastic-carousel
npm install --save styled-components
 */

import React from "react";
import Carousel from "react-elastic-carousel";
import './carousel.css';
import Card from './card.js'

import plush1 from './images/plush1.jpg'
import plush2 from './images/plush2.jpeg'
import plush3 from './images/plush3.jpeg'


class carousel extends React.Component {
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
                    <Card img='https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2020/06/20170816_CL_DJA_152%281%29.jpg?itok=va4lLG5S' />
                    <Card img='https://www.princeton.edu//sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg' />
                    <Card img='https://njbmagazine.com/wp-content/uploads/2020/07/Princeton_University.jpeg' />
                    <Card img='https://www.collegeconsensus.com/wp-content/uploads/2016/12/20080421_CampLife_02_1-L-800x534.jpg'/>
                    <Card img='https://gradschool.princeton.edu/sites/gradschool/files/images/Grad%20College.jpg'/>
                    <Card img='https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F90c39704-f9bb-11ea-bed7-6729a62ebe0a.jpg?crop=6016%2C3384%2C0%2C313&resize=1180'/>
                </Carousel>
            </div>
        )
    }
}

export default carousel;
