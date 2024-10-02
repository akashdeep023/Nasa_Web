import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice";
import configReducer from "./slices/configSlice";

const appStore = configureStore({
	reducer: {
		user: useReducer,
		config: configReducer,
	},
});
export default appStore;
