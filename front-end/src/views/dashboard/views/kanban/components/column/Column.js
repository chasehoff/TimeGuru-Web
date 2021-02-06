import React from 'react';
import ActionButton from '../actionButton/ActionButton';
import ColumnItem from '../columnItem/ColumnItem';
import './index.css';
import { Draggable, Droppable } from "react-beautiful-dnd";
import { string } from 'prop-types';
import { Provider } from 'react-redux';

function Column({ title, cards, listID, index }) {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {(provided) =>
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className="column__container">
                    <Droppable droppableId={String(listID)}>
                        { (provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} >
                                <div className="column__container__header">
                                    <h3>{title}</h3>
                                </div>
                                {
                                    cards.map((card,i) => <ColumnItem  key={card.id} text={card.text} id={card.id} index={i} />)
                                }
                                <ActionButton listID={listID} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            }
        </Draggable>
        
    )
}
export default Column;
