import React from 'react'

import {
    Pane, ApplicationIcon
} from 'evergreen-ui'
import BioCard from './BioCard.js'

// This will be where to make the "About" page
class About extends React.Component {
    render() {
        return (
            <div>
                <Pane display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginBottom={80}>
                    <Pane borderRadius={20} textAlign="center" background="white" marginTop={40} padding={40} width={800}>
                        <ApplicationIcon size={80} color="gray800" />
                        <h2><br></br><b>About</b></h2>
                        <h4><br></br>Meet the development team behind hoagie<b>trade</b></h4>
                    </Pane>
                    <BioCard name="Person #1" role="role" major="ECE" class="2024" bio="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."/>
                    <BioCard name="Person #2" role="role" major="PHY" class="2024" bio="Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."/>
                    <BioCard name="Person #3" role="role" major="CHM" class="2024" bio="Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. 
"/>

                </Pane>
            </div>
        )
    }

}

export default About;