import React from 'react';
import s from './Post.module.sass';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png"/>
            <p>{props.message}</p>
            <div>
                <span>
                    Likes: {props.likeCount}
                </span>
            </div>
        </div>
    );
}

export default Post;