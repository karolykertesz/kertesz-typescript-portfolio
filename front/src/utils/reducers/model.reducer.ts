import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Model {
  isOpen?: boolean;
}
type Action = {
  type: string;
  payload: string | boolean;
};
const initialState: Model = {
  isOpen: false,
};

export const Models = createSlice({
  name: "model",
  initialState,
  reducers: {
    addModal(state) {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { addModal } = Models.actions;
export default Models.reducer;
