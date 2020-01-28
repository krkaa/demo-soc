import React from 'react';
import s from './FormArea.module.sass';
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const FormArea = (props) => {

    let newPostElement = React.createRef();



    let addPost = () => {
        props.dispatch(AddPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(UpdateNewPostTextActionCreator(text));
    };

    return (
                <div className={s.posts_form}>
                    <div className={s.form}>
                        <textarea ref={newPostElement}
                                  onChange={onPostChange}
                                  value={props.newPostText}/>
                        <button onClick={addPost}>send</button>
                    </div>
                </div>
    );
}

export default FormArea;