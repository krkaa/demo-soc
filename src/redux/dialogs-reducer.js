const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Alesya'},
        {id: 3, name: 'Guram'},
        {id: 4, name: 'Roman'}
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Dratuti!'},
        {id: 3, message: 'Poka'}
    ],
    newMessageText: ''
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            return Object.assign({}, state, {
                newMessageText: '',
                messages: [...state.messages, newMessage]
            });
        case UPDATE_NEW_MESSAGE_TEXT:
            return Object.assign({}, state, {
                newMessageText: action.newText
            });
        default:
            return state;
    }
}

export const AddMessageActionCreator = () => ({type: ADD_MESSAGE});
export const UpdateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
});

export default dialogsReducer;