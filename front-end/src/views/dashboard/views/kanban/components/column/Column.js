import React from 'react';
import ActionButton from '../actionButton/ActionButton';
import ColumnItem from '../columnItem/ColumnItem';
import './index.css';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteColumn } from '../../../../../../actions/types';

function Column({ title, cards, listID, index }) {
    const dispatch = useDispatch();

    const deleteList = (listID, index) => {
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
                                    <DeleteIcon className="column__container__header__delete" onClick={() => deleteList(listID, index)}/>
                                </div>
                                {
                                    cards.map((card,i) => <ColumnItem  key={card.id} title={card.title} listID={listID} text={card.text} id={card.id} index={i} />)
                                }
                                {provided.placeholder}
                                <ActionButton listID={listID} />
                            </div>
                        )}
                    </Droppable>
                </div>
            }
        </Draggable>
        
    )
}
export default Column;
