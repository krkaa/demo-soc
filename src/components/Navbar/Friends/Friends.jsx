import React from 'react';
import s from './Friends.module.sass';
import Person from "./Person/Person";

const Friends = (props) => {

    let personItems = props.state.friends
        .map(f => <Person imgUrl={f.imgUrl} name={f.name} key={f.id}/>);

    return (
        <div>
            <div className={s.friends}>
                <h3 className={s.h3}>Friends</h3>
                <div className={s.persons}>
                    { personItems }
                </div>
            </div>
        </div>
    );
}

export default Friends;