import React from 'react'

import {
    Pane, Badge, Pill
} from 'evergreen-ui'

// This will be where to make the "About" page
class BioCard extends React.Component {
    render() {
        return (
            <div>
                <Pane display="flex" justifyContent="flex-start" alignItems="center" flexDirection="row" borderRadius={20} textAlign="center" background="white" marginTop={40} padding={20} width={800} >
                    <Pane width={200}>
                        <img alt="profile" src='https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png'></img>
                    </Pane>
                    <Pane display="flex" flexDirection="column" alignItems="flex-start" width="100%" textAlign="left" >
                        <span style={{ fontSize: "30px" }}><b>{this.props.name} &nbsp;</b><Badge fontSize={15}>{this.props.major}</Badge>  <Pill display="inline-flex" margin={8} color="#F8E3DA" fontSize={15}>{this.props.class}</Pill></span>
                        <span style={{ fontSize: "25px" }}>{this.props.role}</span>
                        <span style={{ fontSize: "18px", textAlign: "justify" }}> {this.props.bio} </span>
                    </Pane>

                </Pane>
            </div>
        )
    }

}

export default BioCard;