import React from "react";
import {
    TextInputField, TextareaField, FilePicker, Button, Combobox
} from 'evergreen-ui'

class SellingForm extends React.Component {
    render() {
        return (
            <div>
                <h6><b>What would you like to {this.props.type}?</b></h6>
                <TextInputField
                    placeholder="Enter name of item here"
                />

                <h6><b>Describe your item</b></h6>
                <span style={{color: "#696f8c", fontSize:"13px", margin:"0"}}>Pull down at the lower right of the textbox to adjust your view</span>
                <TextareaField
                    name="textarea-1"
                    placeholder="Enter description here"
                />
                <h6><b>{this.props.extra}Price</b></h6>
                <TextInputField
                    placeholder="Enter price here"
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

                <h6><b>Upload up to 3 images of your item </b></h6>
                <span style={{color: "#696f8c", fontSize:"13px"}}>the first image will appear on the homepage</span>
                <FilePicker
                    placeholder="Accepted image formats: .jpg, .jpeg, .png"
                />
                <FilePicker
                    placeholder="Accepted image formats: .jpg, .jpeg, .png"
                />
                <FilePicker
                    placeholder="Accepted image formats: .jpg, .jpeg, .png"
                />

                <br></br>
                <Button marginRight={16} appearance="primary">
                    Post
                </Button>

            </div>
        )
    }
}

export default SellingForm;
