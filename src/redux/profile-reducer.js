import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likeCount: '14'},
        {id: 2, message: 'Hi, how are you?', likeCount: '11'},
        {id: 3, message: 'How hey hi', likeCount: '12'}
    ],
    profile: null,
    status: ''
};

let profileReducer = (state = initialState, action) => {
    const stateCopy = {
        ...state
    };

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likeCount: '11'
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_PROFILE_DATA:
            return {...state, profile: action.data};
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setProfileData = (data) => ({type: SET_PROFILE_DATA, data});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const saveProfileSuccess = (profileData) => ({type: SAVE_PHOTO_SUCCESS, profileData});

export const getProfile = (userId) => async dispatch => {
    let data = await usersAPI.getUserProfile(userId);
    dispatch(setProfileData(data));
};

export const getStatus = (userId) => async dispatch => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfileData = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfileData(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    }
    else {
        debugger
        dispatch(stopSubmit("profile-data", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;