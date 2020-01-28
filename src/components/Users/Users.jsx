import React from 'react';
import styles from './Users.module.sass'
import userPhoto from '../../assets/images/UnvailablePhoto.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }
    ;

    let maxSize1 = {
        currentPage: props.currentPage <= 1
            ? (
                props.currentPage - 1
            )
            : props.currentPage - 2,
    };
    let maxSize2 = {
        currentPage: props.currentPage <= 1
            ? (
                props.currentPage + 4
            )
            : props.currentPage + 3,
    };

    return <div>
        <div className={styles.pageNumbers}>
            {
                page.slice(maxSize1.currentPage, maxSize2.currentPage).map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e) => {
                                     props.onChangePage(p)
                                 }}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.userItem}>
                    <div className={styles.userItem_user}>
                        <div className={styles.photo}>
                            <NavLink to={"/profile/"+u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div className={styles.followBtn}>{
                                u.followed
                                    ? <button disabled={props.followInProgress.some( id => id === u.id)}
                                              onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                    : <button disabled={props.followInProgress.some( id => id === u.id)}
                                              onClick={ () => {props.follow(u.id)} }>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={styles.userItem_area}>
                        <div className={styles.information}>
                            <div className={styles.userName}>
                                {u.name}
                            </div>
                            <div className={styles.status}>
                                {u.status}
                            </div>
                        </div>
                        <div className={styles.location}>
                            <div className={styles.country}>{"u.location.country"},</div>
                            <div className={styles.city}>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
};

export default Users;