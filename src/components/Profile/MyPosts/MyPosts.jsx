import React from 'react';
import s from './MyPosts.module.sass';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.state.posts.map( p => <Post message={p.message} likeCount={p.likeCount} key={p.id} id={p.id}/>)

    let newPostElement = React.createRef();


    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
            <div className={s.posts}>
                <h3 className={s.posts_h3}>My posts</h3>
                <div className={s.posts_form}>
                    <div className={s.form}>
                        <textarea ref={newPostElement}
                                  onChange={onPostChange}
                                  value={props.state.newPostText}/>
                        <button onClick={addPost}>send</button>
                    </div>
                </div>
                <div className={s.post}>
                    { postElements }
                </div>
            </div>
    );
}

export default MyPosts;