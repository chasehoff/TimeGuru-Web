import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Reorder } from "./Utils";
import SideNav from '../../../../components/dashboard/side-nav/SideNav';
import TopNav from '../../../../components/dashboard/top-nav/TopNav';
import Card from "./Card";
import AppsIcon from '@material-ui/icons/Apps';
import './Category.css';

// fake data generator
const getCategories = (count) => {
    Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `category-${k}`,
    content: `category ${k}`,
    cards: [`card-1`, `card-2`, `card-3`]
}))};

function Kanban() {
    const [ categories, setCategories] = useState([{id: 'category-1', content: 'category 1', cards: [`card-1`, `card-2`, `card-3`]},{id: 'category-2', content: 'category 2', cards: [`card-1`, `card-2`, `card-3`]},{id: 'category-3', content: 'category 3', cards: [`card-1`, `card-2`, `card-3`]}])

    const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      //console.log("no-change");
      return;
    }

    if (result.type === "categories") {
      console.log(result);
      console.log(result.source.index)
      console.log(result.destination.index)
      const newCategories = Reorder(
        categories,
        result.source.index,
        result.destination.index
      );

      setCategories(newCategories);
    } else {
      const cards = Reorder(
        categories[parseInt(result.type, 10)].cards,
        result.source.index,
        result.destination.index
      );

      const newCategories = JSON.parse(JSON.stringify(categories));

      newCategories[result.type].cards = cards;

      setCategories(newCategories);
    }
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
    return (
        <div className="dashboard__container">
            <TopNav />
            <div className="dashboard__second__container">
                <SideNav />
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable" direction="horizontal" type="categories">
                    {(provided) => (
                        <div className="dashboard__kanban__container" ref={provided.innerRef}>
                        {categories.map((category, index) => (
                            <Draggable
                            key={category.id}
                            draggableId={category.id}
                            index={index}
                            >
                            
                            {(provided) => (
                                <div className="container__category"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                >
                                {category.content}
                                <span {...provided.dragHandleProps}>
                                    <AppsIcon
                                    />
                                </span>
                                <Card categoryNum={index} category={category} />
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );

}

export default Kanban;