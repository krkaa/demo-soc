import React from "react";
import styles from "./FormControls.module.sass";

const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ styles.formControl + " " + (hasError ? styles.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};

export const Textarea = Element("textarea");
export const Input = Element("input");