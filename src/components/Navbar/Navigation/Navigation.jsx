import React from 'react';
import s from './Navigation.module.sass';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;