import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Model {
  isOpen: boolean;
  isHeader: boolean;
  overlay: boolean;
}
type Action = {
  type: string;
  payload: string | boolean;
};
const initialState: Model = {
  isOpen: false,
  isHeader: false,
  overlay: false,
};

export const Models = createSlice({
  name: "model",
  initialState,
  reducers: {
    addModal(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setHeader(state) {
      state.isHeader = !state.isHeader;
    },
    resetHeader(state, action: PayloadAction<boolean>) {
      state.isHeader = action.payload;
    },
    setOverlay(state, action: PayloadAction<boolean>) {
      state.overlay = action.payload;
    },
  },
});
export const { addModal, setHeader, resetHeader, setOverlay } = Models.actions;
export default Models.reducer;
