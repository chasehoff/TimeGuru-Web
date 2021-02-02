import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import SideNav from '../../../../components/dashboard/side-nav/SideNav';
import TopNav from '../../../../components/dashboard/top-nav/TopNav';
import Category from '../kanban/Category';

import './index.css';

function Kanban() {
    const categories = {"96107280-4c70-400e-9bb6-42d2c875303a":{"id":"96107280-4c70-400e-9bb6-42d2c875303a","title":"To Do","cardIds":["468d7581-74b8-4590-b1ed-2c0417bd1c61","86d4e012-7ee3-4865-b978-2cba8c7228c9","18a52798-71a6-438b-a9b3-635f0362457c","aa70a23b-8b0c-4360-b76d-8d0049732b08","1178c4f0-8744-440e-a260-dc80258eec2e"]},"25a315f8-09fc-4389-b82d-ba55827540de":{"id":"25a315f8-09fc-4389-b82d-ba55827540de","title":"Doing","cardIds":[]},"e2119815-a82a-46c2-8d1b-2be8e44e712f":{"id":"e2119815-a82a-46c2-8d1b-2be8e44e712f","title":"Done","cardIds":[]}}
    const defaultCards = {"468d7581-74b8-4590-b1ed-2c0417bd1c61":{"id":"468d7581-74b8-4590-b1ed-2c0417bd1c61","header":"Create First Category","description":"Click on the add category text box, and create your very first category box!","importance":"#cddc39","dueDate":"2020-12-31","timeDue":"00:00"},"86d4e012-7ee3-4865-b978-2cba8c7228c9":{"id":"86d4e012-7ee3-4865-b978-2cba8c7228c9","header":"Create First Task","description":"Click on the \"Add Task\" button within your desired column, then chose the title, description, due date, color, and time due.","importance":"#ffeb3b","dueDate":"2020-12-31","timeDue":"00:00"},"18a52798-71a6-438b-a9b3-635f0362457c":{"id":"18a52798-71a6-438b-a9b3-635f0362457c","header":"Delete a Category","description":"Select a desired category to delete! Remember, if this category contains cards you will not be able to undo it!.","importance":"#ffc107","dueDate":"2020-12-31","timeDue":"00:00"},"aa70a23b-8b0c-4360-b76d-8d0049732b08":{"id":"aa70a23b-8b0c-4360-b76d-8d0049732b08","header":"Delete a Task","description":"Delete a desired task within a category. Remeber, you will not be able to get this data back once deleted!","importance":"#f44336","dueDate":"2020-12-31","timeDue":"00:00"},"1178c4f0-8744-440e-a260-dc80258eec2e":{"id":"1178c4f0-8744-440e-a260-dc80258eec2e","header":"Edit a Task","description":"Click \"Edit Task\" on the task you would like to edit. Change the inputs to your likings then click \"Update\"!","importance":"#9c27b0","dueDate":"2020-12-31","timeDue":"00:00"}}
    const defCatOrder = ["96107280-4c70-400e-9bb6-42d2c875303a","25a315f8-09fc-4389-b82d-ba55827540de","e2119815-a82a-46c2-8d1b-2be8e44e712f"];
    return (
        <div className="dashboard__container">
            <TopNav />
            <div className="dashboard__second__container">
                <SideNav />
                {/* Main Dashboard Data */}
                <DragDropContext>
                    <Droppable droppableId="all-categories" direction="horizontal" type="category">
                        {(provided) => (
                            <div className="dashboard__kanban__container" {...provided.droppableProps} ref={provided.innerRef}>
                            {defCatOrder.map((catId, index)=>{
                                const category = categories[catId];
                                const cards = category.cardIds.map(cardId => defaultCards[cardId])
                                {console.log(cards)}
                                return <Category key={category.id} index={index} category={category} cards={cards} />
                                    
                            })}
                            {provided.placeholder}
                            </div>
                        )
                        }
                    </Droppable>
                </DragDropContext>
                    
                
            </div>
        </div>
    )
}

export default Kanban;