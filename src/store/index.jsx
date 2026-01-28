import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./modules/commentStore";

const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
});

export default store;
