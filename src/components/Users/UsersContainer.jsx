import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from '../../redux/users-reducer';
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (p) => {
        this.props.getUsers(p, this.props.pageSize);
        this.props.setCurrentPage(p);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onChangePage={this.onChangePage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followInProgress={this.props.followInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
};



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})
)(UsersContainer);