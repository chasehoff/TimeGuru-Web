import React, { useState } from 'react';
import './index.css';
import { Draggable } from 'react-beautiful-dnd';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../../../../actions/types';

function ColumnItem({listID, title, text, id, index}) {
    const dispatch = useDispatch();

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
                            <div>
                                <DeleteIcon className="column__item__delete__button" onClick={()=> handleDeleteCard(listID, index)} />
                            </div>
                        </div>
                        
                        <p className="column__item__container__text">
                            {text}
                        </p>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default ColumnItem;
