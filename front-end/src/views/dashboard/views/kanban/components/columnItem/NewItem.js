import React, { useState } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AssessmentIcon from '@material-ui/icons/Assessment';
import './NewItem.css';
import { DialogContentText } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import { Tooltip } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addCard } from '../../../../../../actions/types';

function NewItem({open, handleClose, listID, listTitle}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("")
    const [error, setErrors] = useState("");

    const newCardSubmission = () => {
        if(title.length < 1 || text.length < 1) {
            setErrors("Please add title and description.")
        }else {
            dispatch(addCard(listID,title,text));
            setTitle("");
            setText("");
            setErrors("");
            handleClose();
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-description"
            >
            <DialogContent>
                <DialogContentText>
                    <h5 style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '1rem'}}>New Card</h5>
                    <div className="edit__item__container">
                        <div className="edit__item__section">
                            <div className="edit__item__header">
                                <Tooltip title="Card Title" placement="left-start">
                                    <AssessmentIcon />
                                </Tooltip>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" maxLength="15" />
                            </div>
                            <p className="edit__item__column__type">in column "{listTitle}"</p>
                            <div className="edit__item__textarea__section">
                                <Tooltip title="Card Description" placement="left-start">
                                    <DescriptionIcon />
                                </Tooltip>
                                <textarea placeholder="Card description..." className="edit__item__description" onChange={(e) => setText(e.target.value) } value={text} rows="6" />
                            </div>
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions className="column__dialog__buttons">
                <p style={{ color: 'red'}}>{error}</p>
                <div style={{cursor: 'pointer'}} onClick={newCardSubmission}>Add Card</div>
            </DialogActions>
        </Dialog>
    )
}

export default NewItem;