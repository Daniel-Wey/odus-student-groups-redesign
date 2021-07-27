import React, { Component } from 'react'
import {TextInputField, TextareaField, Textarea, Positioner, Filepicker, 
    FilePicker, TagInput, Pane, Tablist, Tab, Paragraph} from 'evergreen-ui'

class SellingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ['Example', 'Tags!'],
            tabs: ["Sell", "Auction", "Rent", "Request"],
            selectedIndex: 0
        }
    }

    setValues(input){
        this.setState({
            values: input
        });
    }
    
    setSelectedIndex(index){
        this.setState({
            selectedIndex: index
        });
    }

    render() {
        return (
            <div>
                <TextInputField
                label="Name of item"
                description="Give a clear, concise label that will be associated with your item"
                placeholder="Enter name of item here"
                />
 
                <TextareaField 
                label="Description"
                description="Specify the merits of your object to potential buyers in a more thorough explanation"
                name="textarea-1" 
                placeholder="Enter text here" 
                />
                <h6>Upload images of your item</h6>
                <FilePicker
                placeholder="" 
                />
                
                <TagInput
                    inputProps={{ placeholder: 'Add tags!' }}
                    values={this.state.values}
                    onChange={values => {
                        this.setValues(values)
                    }}
                />
                <br></br><br></br>
                <h6>Select type of trade below</h6>
                <Pane height={120}>
                    <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                        {this.state.tabs.map((tab, index) => (
                        <Tab
                            key={tab}
                            id={tab}
                            onSelect={() => this.setSelectedIndex(index)}
                            isSelected={index === this.state.selectedIndex}
                            aria-controls={`panel-${tab}`}
                        >
                            {tab}
                        </Tab>
                        ))}
                    </Tablist>
                    <Pane padding={16} background="tint1" flex="1">
                        {this.state.tabs.map((tab, index) => (
                        <Pane
                            key={tab}
                            id={`panel-${tab}`}
                            role="tabpanel"
                            aria-labelledby={tab}
                            aria-hidden={index !== this.state.selectedIndex}
                            display={index === this.state.selectedIndex ? "block" : "none"}
                        >
                            <Paragraph><b>Form for {tab}ing an Item</b></Paragraph>
                            <br></br>
                            <TextInputField
                                label="Test input field 1"
                                description=""
                                placeholder="Enter text here"
                            />

                            <TextareaField 
                                label="Test input field 2"
                                description=""
                                placeholder="Enter text here"
                            />

                        </Pane>
                        ))}
                    </Pane>
                </Pane>
                
            </div>
        )
    }
}

export default SellingPage;