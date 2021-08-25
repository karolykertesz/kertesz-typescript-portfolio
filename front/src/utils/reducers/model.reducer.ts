import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Model {
  isOpen: boolean;
  isHeader: boolean;
}
type Action = {
  type: string;
  payload: string | boolean;
};
const initialState: Model = {
  isOpen: false,
  isHeader: false,
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
  },
});
export const { addModal, setHeader } = Models.actions;
export default Models.reducer;
