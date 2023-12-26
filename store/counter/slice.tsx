import { createSlice } from '@reduxjs/toolkit'

interface CountState {
    count: number;
}

const initialState: CountState = {
    count: 0
}

const counterReducer = createSlice({
  name: 'number',
  initialState,
  reducers: {}
});

export const {} = counterReducer.actions

export default counterReducer.reducer