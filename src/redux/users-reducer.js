import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_IN_PROGRESS = 'TOGGLE_IS_FOLLOW_IN_PROGRESS';

let initialState = {
        users: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followInProgress: []
    };

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.booleanKey
            };
        case TOGGLE_IS_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.booleanKey
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ( { type: SET_USERS, users: users } );
export const setCurrentPage = (currentPage) => ( { type: SET_CURRENT_PAGE, currentPage } );
export const setTotalUsersCount = (usersCount) => ( { type: SET_TOTAL_USERS_COUNT, usersCount } );
export const toggleIsFetching = (booleanKey) => ( { type: TOGGLE_IS_FETCHING, booleanKey } );
export const toggleIsFollow = (booleanKey, userId) => ( { type: TOGGLE_IS_FOLLOW_IN_PROGRESS, booleanKey, userId } );

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(toggleIsFetching(false))
            });
    }
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollow(true, userId));
        usersAPI.postFollowUsers(userId)
            .then(data => {
                if (data.resultCode == 0 ) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollow(false, userId));
            });
    }
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollow(true, userId));
        usersAPI.deleteFollowUsers(userId)
            .then(data => {
                if (data.resultCode == 0 ) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollow(false, userId));
            });
    }
};

export default usersReducer;