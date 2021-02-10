import React, { useState } from 'react';
import ActionButton from '../actionButton/ActionButton';
import ColumnItem from '../columnItem/ColumnItem';
import './index.css';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteColumn } from '../../../../../../actions/types';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Tooltip } from '@material-ui/core';

function Column({ title, cards, listID, index }) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [disagree, setDisagree ] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const deleteList = () => {
        handleClose();
        dispatch(deleteColumn(listID, index))
        console.log("delete column works")
    }
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {(provided) =>
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className="column__container">
                    <Droppable droppableId={String(listID)}>
                        { (provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} >
                                <div className="column__container__header">
                                    <h3>{title}</h3>
                                    <Tooltip title="Delete Column" placement="top">
                                        <div className="column__container__header__delete" onClick={()=> setOpen(true)}/> 
                                    </Tooltip>
                                    
                                    {/*() => deleteList(listID, index) */}
                                </div>
                                {
                                    cards.map((card,i) => <ColumnItem  key={card.id} title={card.title} listID={listID} text={card.text} id={card.id} index={i} />)
                                }
                                {provided.placeholder}
                                <ActionButton listID={listID} />
                                <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-describedby="alert-dialog-description"
                                >
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                    Are you sure you want to delete this column?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions className="column__dialog__buttons">
                                    <div className="column__dialog__buttons__cancel" onClick={handleClose}>Cancel</div>
                                    <div className="column__dialog__buttons__delete" onClick={deleteList}>Delete</div>
                                </DialogActions>
                                </Dialog>
                            </div>
                        )}
                    </Droppable>
                </div>
            }
        </Draggable>
        
    )
}
export default Column;
