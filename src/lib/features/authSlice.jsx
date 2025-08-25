import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
     user: null,
     token:null,
     isLogin:false,
     country:null
    },
  
  reducers: {
    authuser: (state,action) => {
      state.user = action.payload;
    },
    usertoken: (state,action) => {
      state.token = action.payload;
    },
    setCountry:(state,action)=>{
      state.country=action.payload
    },
    logout:(state,action)=>{
      state.user=null
      state.token=null
      state.isLogin=false
    },
    isLogin: (state,action) => {
      state.isLogin = action.payload;
    },
 
  },
});

export const { authuser, usertoken,logout,isLogin,setCountry} = authSlice.actions;
export default authSlice.reducer;
