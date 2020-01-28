let initialState = {
    friends: [
        {id: 1, name: 'Pavel', imgUrl: 'https://avatarko.ru/img/kartinka/17/lisa_16103.jpg'},
        {id: 2, name: 'Alesya', imgUrl: 'https://avatarko.ru/img/kartinka/17/lisa_16103.jpg'},
        {id: 3, name: 'Natalia', imgUrl: 'https://avatarko.ru/img/kartinka/17/lisa_16103.jpg'},
        {id: 4, name: 'Nikolay', imgUrl: 'https://avatarko.ru/img/kartinka/17/lisa_16103.jpg'},
        {id: 5, name: 'Rocky', imgUrl: 'https://funpick.ru/wp-content/uploads/2017/10/Malenkie-8.jpg'}
    ]
};

let sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default sidebarReducer;