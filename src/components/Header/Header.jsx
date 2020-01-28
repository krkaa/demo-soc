import React from 'react';
import s from './Header.module.sass';
import {NavLink, Route} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://image.flaticon.com/icons/svg/145/145808.svg"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <a href='#'>{props.login}</a>
               : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;