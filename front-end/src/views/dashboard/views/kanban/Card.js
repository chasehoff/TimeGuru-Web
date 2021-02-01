import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';

function Card(props) {
    return (
        <Draggable draggableId={props.card.id} index={props.index}>
            {
                (provided) => (
                    <div className="container__card" id={props.card.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <h3>{props.card.header}</h3>
                        <p>Placeholder text</p>
                    </div>
                )
            }
        </Draggable>
    )
}

export default Card;
