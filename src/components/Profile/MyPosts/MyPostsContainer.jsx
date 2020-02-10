import React from 'react';
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            let action = AddPostActionCreator(newPostText);
            dispatch(action);
        }
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;