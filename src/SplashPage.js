import React from 'react'
import './Styles/homeStyle.css'

// Replace with local path, ensurre that "./" is at the beginning if sourced from same directory
import logo from './images/tigertradelogo.png'

import {
    Button, TextareaField, CornerDialog, Pane, ExchangeIcon, Link, ArrowLeftIcon
} from 'evergreen-ui'

class Home extends React.Component {


    render() {

        return (

            <Pane display="flex" justifyContent="center" alignItems="center" flexDirection="row" >
                <Pane
                    borderRadius={20}
                    textAlign="center"
                    elevation={1}
                    background="white"
                    marginX={20}
                    maxWidth="600px"
                    width="100%"
                    paddingX="100px"
                    marginTop="40px"
                >
                <ExchangeIcon size={100} color="gray800" />
                <h1 className="h1">Trade with anyone <br></br>on campus, <b>instantly</b>.</h1>
                <p>No more convoluted exchange schemes</p>
                <div>
                    <Pane
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        marginTop="30px"
                    >
                        {/*{ Profile }*/}
                        <Link href='https://hoagie.io'><Button
                            height={56}
                            appearance="default"
                            marginTop={20}
                            iconBefore={ArrowLeftIcon}
                            borderColor="#DE7548"
                            color="#DE7548"
                            borderWidth="2px"
                        >
                            Back to <Pane marginTop="-3px">
                               &nbsp; hoagie<b>platform</b>
                            </Pane>
                        </Button></Link><br />
                    </Pane>
                </div>
            </Pane>
            </Pane>
        )
    }
}

export default Home;