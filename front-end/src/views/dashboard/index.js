import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import TopNav from "../../components/dashboard/top-nav/TopNav";
import SideNav from "../../components/dashboard/side-nav/SideNav";
import { Route, Switch } from "react-router-dom";
import './index.css'
import Test from "../../components/test/Test";

class Dashboard extends Component {
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        return (
            <div className="dashboard__container">
                <TopNav />
                <div className="dashboard__second__container">
                    <SideNav />
                    <div className="dashboard__content__container">
                        <button onClick={this.onLogoutClick}>Logout</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);