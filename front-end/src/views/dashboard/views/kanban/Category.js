import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function Category({ category, index }) {
    return (
        <Draggable draggableId={category.id} index={index}>
            {
                (provided) => (
                    <div className="container__category" {...provided.draggableProps} ref={provided.innerRef}>
                        <div className="container__category__header" {...provided.dragHandleProps}>
                            <h3>{category.title}</h3>
                        </div>
                        <Droppable droppableId={category.id} type="card">
                            {
                                (provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>

                                    </div>
                                )
                            }
                        </Droppable>
                    </div>
                    
                )
            }
        </Draggable>
    )
}

export default Category
