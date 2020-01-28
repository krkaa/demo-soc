import React from 'react';
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = AddPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = UpdateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;