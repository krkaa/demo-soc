import React from 'react';
import s from './MyPosts.module.sass';
import Post from "./Post/Post";
import {AddNewPostForm} from "./AddNewPostForm";

const MyPosts = (props) => {

    let postElements = props.state.posts.map( p => <Post message={p.message} likeCount={p.likeCount} key={p.id} id={p.id}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPost);
    };

    return (
            <div className={s.posts}>
                <h3 className={s.posts_h3}>My posts</h3>
                <div className={s.posts_form}>
                    <div className={s.form}>
                       <AddNewPostForm onSubmit={addNewPost}/>
                    </div>
                </div>
                <div className={s.post}>
                    { postElements }
                </div>
            </div>
    );
};

export default MyPosts;