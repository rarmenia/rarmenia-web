import {createStore, combineReducers, applyMiddleware, Store} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import {reducer as layoutReducer} from './layout/reducer';

import {LayoutState} from './layout/state';
import {createWrapper} from 'next-redux-wrapper';

export interface AppState {
  layout: LayoutState
}


const initStore = (initialState: any) => {
  return createStore(combineReducers({
    layout: layoutReducer,
  }), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export const wrapper = createWrapper<Store<AppState>>(initStore, {debug: true})
