import React from 'react';
import styles from './User.module.sass'
import userPhoto from '../../../assets/images/UnvailablePhoto.png'
import {NavLink} from "react-router-dom";
import UserImg from "../../../common/UserImg/UserImg";

let User = ({user, followInProgress, unfollow, follow,  ...props}) => {

    return <div>
        <div className={styles.userItem}>
            <div className={styles.userItem_user}>
                <div className={styles.photo}>
                    <NavLink to={"/profile/" + user.id}>
                        <UserImg userImg={user.photos.small} />
                    </NavLink>
                </div>
                <div className={styles.followBtn}>{
                    user.followed
                        ? <button disabled={followInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={followInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>
                }
                </div>
            </div>
            <div className={styles.userItem_area}>
                <div className={styles.information}>
                    <div className={styles.userName}>
                        {user.name}
                    </div>
                    <div className={styles.status}>
                        {user.status}
                    </div>
                </div>
                <div className={styles.location}>
                    <div className={styles.country}>{"user.location.country"},</div>
                    <div className={styles.city}>{"user.location.city"}</div>
                </div>
            </div>
        </div>
    </div>
};

export default User;