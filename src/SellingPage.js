import React, { Component } from 'react'
import {TextInput, TextInputField, TextareaField, Textarea, Positioner, Filepicker, FilePicker, TagInput} from 'evergreen-ui'

class SellingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: ['Kauri', 'Willow']
        }
    }
    
    render() {
        //const [values, setValues] = React.useState(['Kauri', 'Willow'])

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
                placeholder="Textarea placeholder..." 
                />
                <h3>Upload images of your item</h3>
                <FilePicker
                placeholder="Textarea placeholder..." 
                />
                {/*
                <TagInput
                    inputProps={{ placeholder: 'Add trees...' }}
                    values={values}
                    onChange={values => {
                        setValues(values)
                    }}
                />
                */}
            </div>
        )
    }
}

export default SellingPage;