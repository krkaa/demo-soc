import React from 'react';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User/User";

let Users = ({totalUsersCount, pageSize, currentPage, onChangePage, users, portionSize, ...props}) => {

    return <div>
        <Paginator totalItemsCount={totalUsersCount} currentPage={currentPage}
                   onChangePage={onChangePage} pageSize={pageSize} portionSize={portionSize}/>
        <div>
            {
                users.map(u =>  <User follow={props.follow}
                                     followInProgress={props.followInProgress}
                                     unfollow={props.unfollow} user={u}
                                      key={u.id}
                    />
                )
            }
        </div>
    </div>
};

export default Users;