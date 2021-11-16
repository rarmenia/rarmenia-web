import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LayoutState {
  topbar: boolean;
  sidebar: boolean;
  footer: boolean;
}

const initialState: LayoutState = {topbar: false, sidebar: false, footer: false};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setTopbar: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.topbar = action.payload;
    },
    setSidebar: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.sidebar = action.payload;
    },
    setFooter: (state: LayoutState, action: PayloadAction<boolean>) => {
      state.footer = action.payload;
    },
    setLayout: (state: LayoutState, action: PayloadAction<LayoutState>) => {
      state.topbar = action.payload.topbar;
      state.sidebar = action.payload.sidebar;
      state.footer = action.payload.footer;
    }
  }
});

export const {setTopbar, setSidebar, setFooter, setLayout} = layoutSlice.actions;
export default layoutSlice.reducer;
