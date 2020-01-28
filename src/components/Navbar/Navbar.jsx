import React from 'react';
import s from './Navbar.module.sass';
import Navigation from "./Navigation/Navigation";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {

    return (
        <div>
            <div className={s.navBar}>
                <Navigation/>
                <FriendsContainer/>
            </div>
        </div>
    );
}

export default Navbar;