import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentId: null,
};

 const doctorSlice = createSlice({
  name: "Doctor",
  initialState,

  reducers: {
    id: (state, action) => {
      state.currentId = action.payload;
    },
  },
});
 export const {id}=doctorSlice.actions
  export default doctorSlice.reducer