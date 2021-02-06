import React from 'react';
import './index.css';
import { Draggable } from 'react-beautiful-dnd';

function ColumnItem({text, id, index}) {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="column__item__container">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default ColumnItem;
