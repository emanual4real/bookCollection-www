import * as actions from '../actions';

export const initialState = {
   books: [{
         "_id": {
            "$oid": "5eaefa5b1baa3326307e07bf"
         },
         "Realm": "Forgotten Realms",
         "Series": "Abolethic Sovereignty",
         "Title": "City of Torment",
         "Author": "Bruce R. Cordell",
         "Editor": "",
         "Release": "",
         "ISBN": ""
      },
      {
         "_id": {
            "$oid": "5eaefa5b1baa3326307e07be"
         },
         "Realm": "Forgotten Realms",
         "Series": "Abolethic Sovereignty",
         "Title": "Plague of Spells",
         "Author": "Bruce R. Cordell",
         "Editor": "",
         "Release": "",
         "ISBN": ""
      },
      {
         "_id": {
            "$oid": "5eaefa5b1baa3326307e07c7"
         },
         "Realm": "Forgotten Realms",
         "Series": "Anthologies",
         "Title": "Realms of the Arcane",
         "Author": "",
         "Editor": "Brian M. Thomsen",
         "Release": "",
         "ISBN": ""
      }
   ]
};

const bookReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_BOOKS':

         return {
            ...state, loading: true
         };
      case 'ADD_BOOK':
         let {
            books
         } = state;
         books.push(action.payload)
         return {
            ...state, books
         }
         default:
            return state;
   }
};
export default bookReducer;