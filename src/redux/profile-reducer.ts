import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likeCount: 14},
        {id: 2, message: 'Hi, how are you?', likeCount: 11},
        {id: 3, message: 'How hey hi', likeCount: 12}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

let profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likeCount: 11
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
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        default:
            return state;
    }
};

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});
type SetProfileDataActionType = {
    type: typeof SET_PROFILE_DATA
    data: ProfileType
}
export const setProfileData = (data: ProfileType): SetProfileDataActionType => ({type: SET_PROFILE_DATA, data});
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getProfile = (userId: number) => async (dispatch: any) => {
    let data = await usersAPI.getUserProfile(userId);
    dispatch(setProfileData(data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfileData = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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