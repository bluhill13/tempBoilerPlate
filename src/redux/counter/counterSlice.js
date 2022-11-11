import { createSlice } from '@reduxjs/toolkit'

//Replaces counterReducer.js and counterActions.js
//see documentation: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux


const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action) {
            const counter = state.counter
            state.counter = counter + 1
            // return {
            //     ...state,
            //     counter: state.counter + 1
            // }
            //state.counter + 1
        },
        decrement(state, action) {
            const counter = state.counter
            state.counter = counter - 1
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // }
            //state.counter - 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer