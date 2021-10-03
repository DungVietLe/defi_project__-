import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user: [
    { id: 1, name: 'dũng' },
    { id: 2, name: 'ánh' },
    { id: 3, name: 'thành' },
  ],
};

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<object>) => {
      console.log('pending');
    },
    addUserSaga: (state, action) => {
      console.log(action);

      return {
        ...state,
        user: [...state.user, action.payload],
      };
    },
  },
});

const { reducer, actions } = userReducer;
export const { addUser, addUserSaga } = actions;
export default reducer;
