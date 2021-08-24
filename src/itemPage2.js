import plush1 from './images/plush1.jpg'
import plush2 from './images/plush2.jpeg'
import plush3 from './images/plush3.jpeg'

import RatingStars from './RatingStars';

import {Button} from 'evergreen-ui'


const imgHeight = "100px"
const imgSpacing = "30px"


function itemPage2() {
  return (
    <div style={{background:"white", width:"1200px", borderRadius:"20px", marginTop:"20px", display:"flex", flexDirection:"column", alignItems:"flex-start", paddingTop:"40px", paddingBottom:"20px"}}>
        <div style={{display:"flex", flexDirection:"row", width:"100%"}}>
            <div id="side-images" style={{background:"white", width:"15%", marginLeft:"20px", }}>
                <div>
                    <img style={{ height: imgHeight}} src={plush1} alt="sample" />
                </div>
                <div style={{paddingTop: imgSpacing}}>
                    <img style={{ height: imgHeight, filter:"grayscale(80%)"}} src={plush2} alt="sample" />
                </div>
                <div style={{paddingTop: imgSpacing}}>
                    <img style={{ height: imgHeight, filter:"grayscale(80%)"}} src={plush3} alt="sample" />
                </div>
            </div>

            <div id="main-image" style={{background:"white", width:"40%", marginLeft:"20px", display:"flex", flexDirection:"row", alignItems:"center", justifyContent: "center"}}>
                <Button borderRadius={100} width={60} height={60} style={{boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)", border:"none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Button>

                <img src={plush1} alt="sample" />

                <Button borderRadius={100} width={60} height={60} style={{boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)", border:"none"}}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Button>
            </div>

            <div>

            </div>
        </div>
        <span>Test</span>
        <RatingStars sellerRating={6}/>

    </div>
  );
}

export default itemPage2;