import React from "react";
import {
    TextInputField, TextareaField, Textarea, Positioner, Filepicker,
    FilePicker, TagInput, Pane, Tablist, Tab, Paragraph, Button, Combobox
} from 'evergreen-ui'

class SellingForm extends React.Component {
    render() {
        return (
            <div>
                <h6>What would you like to {this.props.type}?</h6>
                <TextInputField
                    placeholder="Enter name of item here"
                />

                <h6>Describe your item</h6>
                <TextareaField
                    description="Pull down at the lower right of the textbox to adjust your view"
                    name="textarea-1"
                    placeholder="Enter description here"
                />
                <h6>{this.props.extra}Price</h6>
                <TextInputField
                    placeholder="Enter price here"
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

                <h6>Upload up to 3 images of your item (note that the first image will appear on the homepage)</h6>
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
