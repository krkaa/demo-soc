const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogsType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number,
    message: string
}

export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Alesya'},
        {id: 3, name: 'Guram'},
        {id: 4, name: 'Roman'}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Dratuti!'},
        {id: 3, message: 'Poka'}
    ] as Array<MessagesType>
}

let dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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

export const AddMessageActionCreator = (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;