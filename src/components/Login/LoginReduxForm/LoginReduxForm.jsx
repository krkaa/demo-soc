import React from 'react';
import styles from './../Login.module.sass';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormControls/FormControls";
import {required} from "../../../Controls/Validators/Validators";

export default reduxForm({form: 'login'})(props => {
    return (
        <form className={styles.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <label>
                    <Field placeholder={"Email..."} type={"email"} name={"email"} component={Input}
                           validate={[required]}/>
                </label>
            </div>
            <div>
                <label>
                    <Field placeholder={"Password..."} type={"password"} name={"password"} component={Input}
                           validate={[required]}/>
                </label>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> rember me
            </div>
            { props.error && <div className={styles.loginError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
});