import React from 'react';
import {AddMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (action) =>
            dispatch(UpdateNewMessageTextActionCreator(action)),
        onMessageClick: () => dispatch(AddMessageActionCreator()),
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);