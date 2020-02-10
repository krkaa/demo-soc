import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, {addPost} from "./profile-reducer";

let state = {
  posts: [
    {id: 1, message: 'It\'s my first post', likeCount: '14'},
    {id: 2, message: 'Hi, how are you?', likeCount: '11'},
    {id: 3, message: 'How hey hi', likeCount: '12'}
  ]
};

it('length of state after add post should equale of 4', () => {
  let action = addPost('Hello!');

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});
