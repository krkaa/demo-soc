import React from 'react';
import styles from './../Login.module.sass';
import {reduxForm} from "redux-form";
import {createField, Input} from "./../../../common/FormControls/FormControls";
import {required} from "../../../Controls/Validators/Validators";

export default reduxForm({form: 'login'})(({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {createField("Email...", "email", "email", Input, [required])}
            {createField("Password...", "password", "password", Input, [required])}
            {createField(null, "checkbox", "rememberMe", Input, null, null, "rember me")}
            {captchaUrl && <div className={styles.captcha}>
                <img src={captchaUrl} alt="captcha"/>
            </div>}
            {captchaUrl && createField("Type symbols", "captcha", "captcha", Input, [required])}
            {error && <div className={styles.loginError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
});