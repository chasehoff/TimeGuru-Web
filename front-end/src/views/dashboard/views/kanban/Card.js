import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import AppsIcon from '@material-ui/icons/Apps';

const Card = props => {
  const { category, categoryNum } = props;
  return (
    <Droppable droppableId={`droppable${category.id}`} type={`${categoryNum}`}>
      {(provided) => (
        <div
          ref={provided.innerRef}>
          {category.cards.map((card, index) => {
            return (
              <Draggable
                key={`${categoryNum}${index}`}
                draggableId={`${categoryNum}${index}`}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <span {...provided.dragHandleProps}>
                      <AppsIcon
                      />
                    </span>
                    {card}
                  </div>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Card;
