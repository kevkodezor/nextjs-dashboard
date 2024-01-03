import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CountState {
    count: number;
    isReady: boolean;
}

const initialState: CountState = {
    count: 0,
    isReady: false,
}

const counterReducer = createSlice({
  name: 'number',
  initialState,
  reducers: {
    initCounter (state, action: PayloadAction<number>) {
        if(state.isReady) return;
        state.count = action.payload;
        state.isReady = true;
    },
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

export const { upCount, downCount, resetCount, initCounter } = counterReducer.actions

export default counterReducer.reducer