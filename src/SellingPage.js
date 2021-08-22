import React from 'react'
import {
    Pane, Tablist, Tab
} from 'evergreen-ui'
import RequestingForm from './RequestingForm'
import StandardForm from './StandardForm'

export default function SellingPage() {

    // State for Selected Index
    const [indexSelected, setIndexSelected] = React.useState(0)

    // Tabs Heading Array
    const [tabsHeading] = React.useState(["Sell", "Auction", "Rent", "Request"])

    // Tabs Content Array
    const [tabsContent] = React.useState([<StandardForm type="sell" />, <StandardForm type="auction" extraInfo="Starting "/>,
    <StandardForm type="rent out" />, <RequestingForm />])

    return (
        <div style={{
            display: 'block', width: 700, paddingLeft: 30, paddingTop: 50, 
        }}>


            <Pane height={120} background="white" borderRadius={20} paddingTop={20}>
                <h5>Select type of trade below</h5>
                <Tablist marginBottom={20} >
                    {tabsHeading.map((tab, index) => (
                        <Tab
                            key={tab}
                            isSelected={index === indexSelected}
                            onSelect={() => setIndexSelected(index)}
                        >
                            {tab}
                        </Tab>
                    ))}
                </Tablist>
                <br></br>
                <Pane padding={16} background="white" flex="1" borderRadius={20} >
                    {tabsContent.map((tab, index) => (
                        <Pane
                            role="tabpanel"
                            key={tab}
                            display={index === indexSelected ? 'block' : 'none'}
                        >
                            {tab}
                        </Pane>
                    ))}
                </Pane>
            </Pane>
        </div>
    );
}




