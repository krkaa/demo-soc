const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}

export const AddMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;