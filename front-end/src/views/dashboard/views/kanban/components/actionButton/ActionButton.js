import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import TextArea from 'react-textarea-autosize'
import './index.css';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { addList } from '../../../../../../actions/types';

class ActionButton extends Component {

    state = {
        formOpen: false,

    }

    toggleForm = () => {
        this.setState({
            formOpen: !this.state.formOpen
        });
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div onClick={this.toggleForm} className="action__btn__group" style={{ opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground }}>
                <AddIcon />
                <p>{buttonText}</p>
            </div>
        )
    }
    
    handleInputChange = (e) => {
        //handle state change on text area
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        
        if(text) {
            dispatch(addList(text));
        }

        //if not true return
        return;
    }

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? "Enter list column title..." : "Enter title for this card...";

        const buttonTitle = list ? "Add Column" : "Add Card";
        return <div>
            <div>
                <TextArea className="action__btn__textarea" placeholder={placeholder} autoFocus onBlur={this.toggleForm} value={this.state.text} onChange={this.handleInputChange} />
            </div>
            <div className="action__btn__group">
                <Button className="action__btn" variant="contained" style={{color: "white", backgroundColor: "#5aac44"}}>{buttonTitle}</Button>
                <CloseIcon style={{marginLeft: '1rem'}} onclick={this.toggleForm} />
            </div>
        </div>
            
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
    
}

export default connect()(ActionButton);
