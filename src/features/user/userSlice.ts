import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: 0,
    email: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setAge, setEmail } = userSlice.actions;
export default userSlice.reducer;
