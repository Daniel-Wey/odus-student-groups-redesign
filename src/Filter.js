import React from 'react'
import {Pane,  Button, Checkbox, Badge, Pill} from "evergreen-ui";


class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: Array(3).fill(false),
        }
    }

    setChecked(state, index) {
        const newChecked = [...this.state.checked]
        newChecked[index] = state;
        this.setState({
            checked: newChecked
        });
    }

    filter() {
        
    }

    render() {
        // var tagNames = this.props.tagNames;
        // let categories = [];

        // categories.push(<Badge fontSize = {15}>{tagNames[0]}</Badge>);
        // for (let i = 1; i < tagNames.length; i++) {
        //     categories.push(<Badge marginLeft = {10} fontSize = {15}>{tagNames[i]}</Badge>);
        // }

        return (
            <div>
                <Pane backgroundColor="white" borderRadius={20} width={250} marginTop={25} display="flex" justifyContent="flex-start" flexDirection="column" paddingTop={10} paddingBottom={20} position ="relative" flexWrap="wrap">
                    <Pane marginTop={20} marginLeft = {20} display="flex" flexDirection="column" alignItems="flex-start" >
                        <span style={{fontSize:"30px"}}><b>Filter</b></span>

                        <Pane marginTop = {20}>
                            <span style={{fontSize:"20px"}} ><b>Dorm</b></span>
                            <Checkbox label = "Appliances" checked = {this.state.checked[0]} onChange={e => this.setChecked(e.target.checked, 0)}/>
                            <Checkbox label = "Furniture" checked = {this.state.checked[1]} onChange={e => this.setChecked(e.target.checked, 1)}/>
                        </Pane>
                        
                        <Button borderColor="#DE7548" color="#DE7548" borderRadius={10} onClick={this.props.dataHandler}>Filter</Button>
                    </Pane>
                </Pane>
            </div>
        )
    }
}

export default Filter;