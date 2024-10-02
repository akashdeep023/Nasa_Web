import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
	name: "config",
	initialState: {
		confirm: false,
		forgotPass: false,
	},
	reducers: {
		setConfirm: (state, action) => {
			state.confirm = action.payload;
		},
		setForgotPass: (state, action) => {
			state.forgotPass = action.payload;
		},
	},
});

export const { setConfirm, setForgotPass } = configSlice.actions;

export default configSlice.reducer;
