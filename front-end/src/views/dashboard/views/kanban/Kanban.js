
import SideNav from '../../../../components/dashboard/side-nav/SideNav';
import TopNav from '../../../../components/dashboard/top-nav/TopNav';
import Column from './components/column/Column';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import ActionButton from './components/actionButton/ActionButton';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../../../../actions/types";

class Kanban extends Component {


  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      ))

  }

  render() {
    const { lists } = this.props;
    console.log(lists)
    return (
        <div className="dashboard__container">
            <TopNav />
            <div className="dashboard__second__container">
                <SideNav />
                <div className="kanban__container">
                  <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="all-lists" direction="horizontal" type="list">
                      {(provided) =>
                        <div {...provided.droppableProps} ref={provided.innerRef} className="kanban__container">
                          { lists.map((list, i) => <Column listID={list.id} key={list.id} title={list.title} cards={list.cards} index={i} />)}
                          <ActionButton list />
                        </div>
                      
                      }
                      
                    </Droppable>
                  </DragDropContext>
                </div>
            </div>
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});
export default connect(
  mapStateToProps
)(Kanban);