import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import TopNav from "../../components/dashboard/top-nav/TopNav";
import SideNav from "../../components/dashboard/side-nav/SideNav";
import './index.css'

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
                    <div>
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