import React from 'react';
import styles from './Login.module.sass';
import LoginReduxForm from "./LoginReduxForm/LoginReduxForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <div className={styles.loginPage}>Login</div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login);