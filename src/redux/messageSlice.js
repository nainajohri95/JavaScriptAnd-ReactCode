import { createSlice } from "@reduxjs/toolkit"; //to get the createSlice fun

const messageSlice = createSlice({
  name: "messageSlice", //name of this slice
  initialState: {
    //inital data of this slice
    message: "", //this message is a variable or key with empty value at initial
  },
  reducers: {
    //reducers are use to update the data in a diff diff manner
    //reducers are just like a fun that takes prev state and an action and on this basis it works
    setMessage: (state, action) => {
      //here setMessage and resetMessage is  actions and we have to export this also
      //setMessage will update this state based on this action
      state.message = action.payload;
      //this state consist of this data  message: ""
      //we pass the data inside the payload
    },
    resetMessage: (state, action) => {
      state.message = "";
    },
  },
});

export default messageSlice.reducer;
// here we are using reducer but we are having many reducers but this reducer internally combine all the reducers into a single object(we don't have to export everything seperately)

//here setMessage and resetMessage is  actions and we have to export this also
export const { setMessage, resetMessage } = messageSlice.actions;
