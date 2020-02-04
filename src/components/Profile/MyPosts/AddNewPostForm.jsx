import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Controls/Validators/Validators";
import {Textarea} from "../../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

export const AddNewPostForm = reduxForm({form: 'AddMyPost'})(props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                <Field component={Textarea} type="textarea" name={"newPost"} placeholder={"Type your post..."}
                       validate={[required, maxLength10]}/>
            </label>
            <button>send</button>
        </form>
    )
});