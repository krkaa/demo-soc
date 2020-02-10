import {usersAPI} from "../api/api";
import {mapFilterObj} from "../Controls/object-helper";

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
    portionSize: 20,
    followInProgress: []
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
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

export const followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const toggleIsFetching = (booleanKey) => ({type: TOGGLE_IS_FETCHING, booleanKey});
export const toggleIsFollow = (booleanKey, userId) => ({type: TOGGLE_IS_FOLLOW_IN_PROGRESS, booleanKey, userId});

export const requestUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
};

const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(toggleIsFollow(true, userId));

    let data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollow(false, userId));
};

export const follow = (userId) => async dispatch => {
    await followUnfollowFlow(dispatch, userId, usersAPI.postFollowUsers.bind(usersAPI), followSuccess);
};

export const unfollow = (userId) => async dispatch => {
    await followUnfollowFlow(dispatch, userId, usersAPI.deleteFollowUsers.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;