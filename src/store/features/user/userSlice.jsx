import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: [],
    uuid: [],
    isLoading: false,
  },
  reducers: {
    GET_USER_ID: (state) => {
      state.isLoading = true;
    },
    GET_USER_ID_SUCCESS: (state, action) => {
      state.id = action.payload;
      state.isLoading = false;
    },
    GET_USER_ID_FAILURE: (state) => {
      state.isLoading = false;
    },
    GET_UUID: (state) => {
      state.isLoading = true;
    },
    GET_UUID_SUCCESS: (state, action) => {
      state.uuid = action.payload;
      state.isLoading = false;
    },
    GET_UUID_FAILURE: (state) => {
      state.isLoading = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const {
  GET_USER_ID,
  GET_USER_ID_SUCCESS,
  GET_USER_ID_FAILURE,
  GET_UUID,
  GET_UUID_SUCCESS,
  GET_UUID_FAILURE,
} = userSlice.actions;
