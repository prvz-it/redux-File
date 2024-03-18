import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('count') ? JSON.parse(localStorage.getItem('count')) :0),
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
        let increase = state.value += 1
        localStorage.setItem('count', JSON.stringify(increase))
    },
    decrement: (state) => {
        let decrease = state.value
        if (decrease > 0) {
            state.value -= 1
            localStorage.setItem('count', JSON.stringify(decrease))
        }
    }
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer