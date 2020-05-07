// bookActions.js

// Redux action types
export const GET_BOOKS = 'GET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';

// Create Redux action creators that return an action
export const getBooks = (content) => ({
    type: GET_BOOKS,
    payload: content
});


export const addBook = (content) => ({
    type: ADD_BOOK,
    payload: content
});