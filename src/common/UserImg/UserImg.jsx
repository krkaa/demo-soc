import React from 'react';
import userPhoto from "../../assets/images/UnvailablePhoto.png";

export default ({userImg}) => {
    return <img src={userImg != null ? userImg : userPhoto}/>;
};