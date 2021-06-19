import { createStore } from "redux";

import {blogs} from "./components/Constants/Blogs";

let initialState = blogs;

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_BLOG':
      return [...state, action.payload]
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;