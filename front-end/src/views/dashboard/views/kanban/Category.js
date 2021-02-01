import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import './Category.css';

function Category(props) {
    return (
        <Draggable draggableId={props.category.id} index={props.index}>
            {
                (provided) => (
                    <div className="container__category" {...provided.draggableProps} ref={provided.innerRef}>
                        <div className="container__category__header" {...provided.dragHandleProps}>
                            <h3>{props.category.title}</h3>
                        </div>
                        <Droppable droppableId={props.category.id} type="card">
                            {
                                (provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                        {props.cards.map((card, i) => <Card key={card.id} index={i} card={card} />)}
                                        {provided.placeholder}
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
