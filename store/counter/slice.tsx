import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CountState {
    count: number;
}

const initialState: CountState = {
    count: 0
}

const counterReducer = createSlice({
  name: 'number',
  initialState,
  reducers: {
    upCount (state) {
        state.count++;
    },
    downCount (state) {
        if (state.count === 0) return;
        state.count--;
    },
    resetCount (state, action: PayloadAction<number> ) {
        if (action.payload < 0) action.payload = 0;
        state.count = action.payload;
    }
  }
});

export const { upCount, downCount, resetCount } = counterReducer.actions

export default counterReducer.reducer