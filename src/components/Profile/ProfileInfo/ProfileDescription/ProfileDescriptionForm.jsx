import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../../../common/FormControls/FormControls";
import styles from "../../../Login/Login.module.sass";

const ProfileDescriptionForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            {error && <div className={styles.loginError}>
                {error}
            </div>}
            <div>
                <b>Full Name:</b> {createField("Full name", "fullName", "fullName", Input)}
            </div>
            <div>
                <b> Looking for a job:</b> {createField("", "checkbox", "lookingForAJob", Input )}
            </div>
            <div>
                <b>My professional skills:</b> {createField("My professional skills", "textarea",
                "lookingForAJobDescription", Textarea)}
            </div>
            <div>
                <b>About Me:</b> {createField("About me", "textarea", "aboutMe", Textarea )}
            </div>
            <p><b>Контакты:</b></p>
            <ul>
                {Object.keys(profile.contacts).map(key => {
                    return <li>
                        <b>{key}:</b> {createField(key, key, "contacts." + key, Input)}
                    </li>
                })}
            </ul>
        </form>
    );
};

export const ProfileDescriptionFormRedux = reduxForm({form: 'profile-data'})(ProfileDescriptionForm);