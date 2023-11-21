import { configureStore } from "@reduxjs/toolkit";

import modalSliceReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
		modal: modalSliceReducer
	},
	middleware: getDefaultMiddlware => getDefaultMiddlware({ serializableCheck: false },)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AsyncThunkConfig = {
  state: RootState,
  dispatch: AppDispatch;
};

export default store;