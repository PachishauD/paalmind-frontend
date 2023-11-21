import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalSlice {
  showSignInModal: boolean;
}

const initialState = {
	showSignInModal: false
} as IModalSlice;

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setShowSignInModalAction(state, action: PayloadAction<boolean>) {
			state.showSignInModal = action.payload;
		}
	}
})

export const {
	setShowSignInModalAction
} = modalSlice.actions;

export default modalSlice.reducer;