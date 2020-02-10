import React from "react";
import styles from "./FormControls.module.sass";
import {Field} from "redux-form";

const Element = Element => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span> {error} </span>}
        </div>
    );
};

export const Textarea = Element("textarea");
export const Input = Element("input");


export const createField = (placeholder, type, name, component, validator, props = {}, text = '') => (
    <div>
        <label>
            <Field placeholder={placeholder} type={type} name={name} component={component}
                   validate={validator}
                {...props}/>
        </label>{text}
    </div>
);

