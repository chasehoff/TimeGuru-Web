import React, { useState } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AssessmentIcon from '@material-ui/icons/Assessment';
import './EditItem.css';
import { DialogContentText } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Tooltip } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { editCardTitle, editCardText } from '../../../../../../actions/types';

function EditItem({open, handleClose, title, text, listID, listTitle, index}) {
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState(title);
    const [newText, setNewText] = useState(text)

    const updateCardTitle = (listID, index, newTitle) => {
        dispatch(editCardTitle(listID, index, newTitle))
    }

    const updateCardText = (listID, index, newText) => {
        dispatch(editCardText(listID,index, newText));
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-description"
            >
            <DialogContent>
                <DialogContentText>
                    <h5 style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '1rem'}}>Edit Card</h5>
                    <div className="edit__item__container">
                        
                        <div className="edit__item__section">
                            <div className="edit__item__header">
                                <Tooltip title="Card Title" placement="left-start">
                                    <AssessmentIcon />
                                </Tooltip>
                                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} onBlur={()=> updateCardTitle(listID, index, newTitle)} maxLength="15" />
                            </div>
                            <p className="edit__item__column__type">in column "{listTitle}"</p>
                            <div className="edit__item__textarea__section">
                                <Tooltip title="Card Description" placement="left-start">
                                    <DescriptionIcon />
                                </Tooltip>
                                <textarea className="edit__item__description" value={newText} onChange={(e) => setNewText(e.target.value)} onBlur={()=> updateCardText(listID, index, newText)} rows="6" />
                            </div>
                        </div>
                        <div className="edit__item__section">
                            <div className="edit__item__vertical__divider" />
                        </div>
                        <div className="edit__item__section">
                            <div className="edit__item__side__item">
                                <Tooltip title="Created at" placement="top">
                                    <CalendarTodayIcon />
                                </Tooltip>
                                <p>11-20-21</p>
                            </div>
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions className="column__dialog__buttons">
                <div className="column__dialog__buttons__cancel" onClick={handleClose}>Close</div>
            </DialogActions>
        </Dialog>
    )
}

export default EditItem;
