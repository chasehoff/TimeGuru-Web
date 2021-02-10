import React, { useState } from 'react';
import './index.css';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../../../../actions/types';
import { Tooltip } from '@material-ui/core';
import EditItem from './EditItem';

function ColumnItem({listID, title, text, id, index, listTitle}) {
    const dispatch = useDispatch();
    const [editOpen, setEditOpen] = useState(false);

    const handleDeleteCard = (listID, index) => {
        dispatch(deleteCard(listID,index))
    }


    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="column__item__container">
                        <div className="column__item__container__header">
                            <h5>{title}</h5>
                            <div className="column__item__container__header__buttons">
                                <Tooltip title="Edit Card" placement="top">
                                    <div className="column__item__edit__button" onClick={() => setEditOpen(true)} />
                                </Tooltip>
                                <Tooltip title="Delete Card" placement="top">
                                    <div className="column__item__delete__button" onClick={()=> handleDeleteCard(listID, index)} />
                                </Tooltip>
                            </div>
                        </div>
                        <p className="column__item__container__text">
                            {text}
                        </p>
                        <EditItem listTitle={listTitle} listID={listID} title={title} text={text} index={index} open={editOpen} handleClose={()=> setEditOpen(false)}/>
                    </div>
                    
                </div>
            )}
        </Draggable>
    )
}

export default ColumnItem;
