import {createSlice} from '@reduxjs/toolkit';

interface IUser {
  name: string;
  age: number;
}

const initialState: IUser = {
  name: 'tesst',
  age: 20,
};

const addUser = (state: any, {payload}: any) => {
  state.name = payload.name;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser,
  },
});

export const themeActions = userSlice.actions;

export default userSlice.reducer;
