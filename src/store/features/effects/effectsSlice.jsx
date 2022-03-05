import { createSlice } from '@reduxjs/toolkit';

const effectsSlice = createSlice({
  name: 'effects',
  initialState: {
    data: {},
  },
  reducers: {
    FETCH_DATA: () => {},
    FETCH_DATA_SUCCESS: (state, payload) => {
      console.log(payload);
      return {
        ...state,
        data: payload,
      };
    },
  },
});

export const effectsReducer = effectsSlice.reducer;
export const { FETCH_DATA, FETCH_DATA_SUCCESS } =
  effectsSlice.actions;
