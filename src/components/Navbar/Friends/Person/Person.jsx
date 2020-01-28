import React from 'react';
import s from './Person.module.sass';

const Person = (props) => {

    return (
        <div>
            <div className={s.personItem}>
                <img src={props.imgUrl}/>
                <p className={s.name}>{props.name}</p>
            </div>
        </div>
    );
}

export default Person;