import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { statusFilters } from './constants';

const initialState = {
  tasks: [
    { id: 324568, text: 'Learn HTML and CSS', completed: true },
    { id: 468201, text: 'Learn SCSS and SASS', completed: true },
    { id: 135678, text: 'Learn React', completed: true },
    { id: 801276, text: 'Learn Redux', completed: false },
    { id: 694382, text: 'Learn Node.js and TypeScript', completed: false },
  ],
  filters: { status: statusFilters.all },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
