import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './counter/counterSlice'
import loginSlice from './login/loginSlicer'

//Documentation for updating from old redux createStore to configureStore
//see documentation: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
//this replaces redux/index.js and redux/createStorage.js 

const store = configureStore({
    reducer: {
        counter: counterSlice,
        login: loginSlice
    }
})

export default store