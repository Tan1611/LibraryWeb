// import { useEffect, useReducer } from "react";
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: JSON.parse(localStorage.getItem('account')) || null,
  },
  reducers: {
    login: (state, action) => {
      // console.log('check state: ',action);
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("account", JSON.stringify(action.payload.accessToken));
      state.currentUser = action.payload.accessToken;
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.clear();
    },
    // create: (state, action) => {
    //   localStorage.setItem("user", JSON.stringify(action.payload.accessToken));
    //   state.currentUser = action.payload.accessToken;
    // }
  },
});
// export const AuthReducer = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [state, dispatch] = useReducer(authSlice.reducers, authSlice.initialState);

//   useEffect(()=> {
//     localStorage.setItem("user", JSON.stringify(state.currentUser))
//   }, [state.currentUser])
// } 
const { reducer, actions } = authSlice;
export const { login, logout } = actions;
export default reducer;
