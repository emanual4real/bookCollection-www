import * as actions from '../actions';

export const initialState = {
   header: [{
         name: "_id",
         title: "id",
         type: "label",
         sort: -1,
         order: 0,
         visible: true
      },
      {
         name: "Realm",
         title: "Realm",
         type: "label",
         sort: -1,
         order: 1,
         visible: true
      }, {
         name: "Series",
         title: "Series",
         type: "label",
         sort: -1,
         order: 2,
         visible: true
      },
      {
         name: "Title",
         title: "Title",
         type: "label",
         sort: -1,
         order: 3,
         visible: true
      },
      {
         name: "Author",
         title: "Author",
         type: "label",
         sort: -1,
         order: 4,
         visible: true
      },
      {
         name: "Editor",
         title: "Editor",
         type: "label",
         sort: -1,
         order: 5,
         visible: true
      },
      {
         name: "Release",
         title: "Release Date",
         type: "label",
         sort: -1,
         order: 6,
         visible: true
      },
      {
         name: "ISBN",
         title: "ISBN",
         type: "label",
         sort: -1,
         order: 7,
         visible: true
      },
      {
         name: "edit",
         title: "",
         type: "label",
         sort: -1,
         order: 100,
         visible: true
      }
   ],
   books: [{
         "_id": "5eaefa5b1baa3326307e07bf",
         "Realm": "Forgotten Realms",
         "Series": "Abolethic Sovereignty",
         "Title": "City of Torment",
         "Author": "Bruce R. Cordell",
         "Editor": "",
         "Release": "",
         "ISBN": ""
      },
      {
         "_id": "5eaefa5b1baa3326307e07be",
         "Realm": "Forgotten Realms",
         "Series": "Abolethic Sovereignty",
         "Title": "Plague of Spells",
         "Author": "Bruce R. Cordell",
         "Editor": "",
         "Release": "",
         "ISBN": ""
      },
      {
         "_id": "5eaefa5b1baa3326307e07c7",
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