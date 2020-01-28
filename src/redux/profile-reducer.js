import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_STATUS = 'SET_STATUS';

let initialState = {
        posts: [
            {id: 1, message: 'It\'s my first post', likeCount: '14'},
            {id: 2, message: 'Hi, how are you?', likeCount: '11'},
            {id: 3, message: 'How hey hi', likeCount: '12'}
        ],
        newPostText: '',
        profile: null,
        status: ''
    };

let profileReducer = (state = initialState, action) => {
    const stateCopy = {
        ...state
    }

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: '11'
            };
            return  Object.assign({}, state, {
                    newPostText: '',
                    posts: [...state.posts, newPost]
                });
        case UPDATE_NEW_POST_TEXT:
            return Object.assign({}, state, {
                newPostText: action.newText
            });
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_PROFILE_DATA:
            return {...state, profile: action.data};
        default:
            return state;
    }
}

export const UpdateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export const AddPostActionCreator = () => ({type: ADD_POST});
export const setProfileData = (data) => ({type: SET_PROFILE_DATA, data});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setProfileData(data));
        });
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};

export default profileReducer;