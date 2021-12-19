import { LayoutState } from "./state";

export const SET_LAYOUT = '[Layout] Set State';
export const UPDATE_LAYOUT = '[Layout] Update State'

// @ts-ignore
export const setLayout = (newLayoutState: LayoutState) => {
  return {type: SET_LAYOUT, newState: newLayoutState}
};

// @ts-ignore
export const updateLayout = (layoutState: Partial<LayoutState>) => {
  return {type: UPDATE_LAYOUT, newState: layoutState}
};

export type LayoutActions = typeof SET_LAYOUT | typeof UPDATE_LAYOUT;
