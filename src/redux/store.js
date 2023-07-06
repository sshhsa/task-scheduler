import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { statusFilters } from './constants';

const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Learn SCSS and SASS', completed: true },
    { id: 2, text: 'Learn React', completed: true },
    { id: 3, text: 'Learn Redux', completed: false },
    { id: 4, text: 'Learn Node.js and TypeScript', completed: false },
    { id: 5, text: 'Finish commercial project', completed: false },
  ],
  filters: { status: statusFilters.all },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
