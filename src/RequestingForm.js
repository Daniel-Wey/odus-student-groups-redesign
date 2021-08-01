import React from "react";
import {
    TextInputField, Button, Combobox
} from 'evergreen-ui'

class RequestingForm extends React.Component {
    render() {
        return (
            <div>
                <h6>What would you like to request?</h6>
                <TextInputField
                    placeholder="Enter name of item here"
                />

                <h6>Price Range</h6>
                <TextInputField
                    placeholder="Enter price range here"
                />


                <h6>Category</h6>
                <Combobox
                    openOnFocus
                    width="100%"
                    items={['clothing', 'shoes', 'accessories', 'dorm furniture', 'books', 'other']}
                    onChange={selected => console.log(selected)}
                    placeholder="Select a category that matches your item"
                />

                <br></br>
                <Button marginRight={16} appearance="primary">
                    Post
                </Button>

            </div>
        )
    }
}

export default RequestingForm;
