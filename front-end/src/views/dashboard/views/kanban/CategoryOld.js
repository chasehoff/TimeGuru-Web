import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import Tooltip from '@material-ui/core/Tooltip';
import './Category.css';

function Category(props) {
    return (
        <Draggable draggableId={props.category.id} index={props.index}>
            {
                (provided) => (
                    <div className="container__category" {...provided.draggableProps} ref={provided.innerRef}>
                        <div className="container__category__header" {...provided.dragHandleProps}>
                            <h3>{props.category.title}</h3>
                            <div className="category__header__btn__section">
                                <Tooltip title="Add Category" placement="top">
                                    <div className="category__header__add" />
                                </Tooltip>
                                <Tooltip title="Edit Category" placement="top">
                                    <div className="category__header__edit" />
                                </Tooltip>
                                <Tooltip title="Delete Category" placement="top">
                                    <div className="category__header__delete" />
                                </Tooltip>
                            </div>
                            
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
