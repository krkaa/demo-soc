import {usersAPI} from "../api/api";
import {mapFilterObj} from "../Controls/object-helper";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_IN_PROGRESS = 'TOGGLE_IS_FOLLOW_IN_PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    portionSize: 20,
    followInProgress: [] as Array<number>
};

export type InitialStateType = typeof initialState

let usersReducer = (state = initialState, action: any): InitialStateType => {
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
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId: userId});
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId: userId});
type setUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersActionType => ({type: SET_USERS, users: users});
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    usersCount: number
}
export const setTotalUsersCount = (usersCount: number): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, usersCount});
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    booleanKey: boolean
}
export const toggleIsFetching = (booleanKey: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, booleanKey});
type toggleIsFollowActionType = {
    type: typeof TOGGLE_IS_FOLLOW_IN_PROGRESS
    booleanKey: boolean
    userId: number
}
export const toggleIsFollow = (booleanKey: boolean, userId: number): toggleIsFollowActionType => ({type: TOGGLE_IS_FOLLOW_IN_PROGRESS, booleanKey, userId});

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
};

const followUnfollowFlow = async (dispatch: any,userId: number,apiMethod: any,actionCreator :any) => {
    dispatch(toggleIsFollow(true, userId));

    let data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollow(false, userId));
};

export const follow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.postFollowUsers.bind(usersAPI), followSuccess);
};

export const unfollow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.deleteFollowUsers.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;