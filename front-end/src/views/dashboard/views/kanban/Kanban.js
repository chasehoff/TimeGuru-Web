
import SideNav from '../../../../components/dashboard/side-nav/SideNav';
import TopNav from '../../../../components/dashboard/top-nav/TopNav';
import Column from './components/column/Column';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import ActionButton from './components/actionButton/ActionButton';


class Kanban extends Component {
  render() {
    const { lists } = this.props;
    console.log(lists)
    return (
        <div className="dashboard__container">
            <TopNav />
            <div className="dashboard__second__container">
                <SideNav />
                <div className="kanban__container">
                  { lists.map(list => <Column key={list.id} title={list.title} cards={list.cards} />)}
                  <ActionButton list />
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