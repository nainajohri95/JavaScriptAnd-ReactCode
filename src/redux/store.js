import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";

export default configureStore({
  reducer: {
    messageReducer, //here key and value are same as messageReducre
  },
});
