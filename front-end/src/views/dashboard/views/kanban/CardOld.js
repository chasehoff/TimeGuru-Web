import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Tooltip from '@material-ui/core/Tooltip';
import './Card.css';

function Card(props) {
    return (
        <Draggable draggableId={props.card.id} index={props.index}>
            {
                (provided) => (
                    <div className="container__card" id={props.card.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="card__header__container">
                            <h3>{props.card.header}</h3>
                            <div className="card__header__btn__section">
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
                        <div className="card__content">
                            <p>Placeholder text</p>
                        </div>
                    </div>
                )
            }
        </Draggable>
    )
}

export default Card;
