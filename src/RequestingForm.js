import React from "react";
import {
    TextInputField, Button, Combobox
} from 'evergreen-ui'

class RequestingForm extends React.Component {
    render() {
        return (
            <div>
                <h6><b>What would you like to request?</b></h6>
                <TextInputField
                    placeholder="Enter name of item here"
                />

                <h6><b>Price Range</b></h6>
                <TextInputField
                    placeholder="Enter price range here"
                />


                <h6><b>Category</b></h6>
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
