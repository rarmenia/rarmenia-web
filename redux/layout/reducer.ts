import {LayoutState} from './state';
import { SET_LAYOUT, UPDATE_LAYOUT} from './actions';
import {AnyAction} from 'redux';

export const initialState: LayoutState = {
  showHeader: true,
}

export const reducer = (state: LayoutState = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LAYOUT:
      return action.newState;
    case UPDATE_LAYOUT:
      return Object.assign({}, state, action.newState)
    default:
      return state;
  }
}
