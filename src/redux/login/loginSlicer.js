import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import axios from 'axios'

const initialState = {
    data: {},
    loggedin: false,
    fetched: false,
    loading: false,
    error: ''
}



export const dispatchLoginUser = createAsyncThunk(
    'login/getLogin',
     async (params) => {
        const errorMessage = params.messages['toastLoginFailed']
        const okMessage = params.messages['toastLoginSuccessful']

        const response = await axios.get(`/login/${params.username}/${params.password}`)
            .then((result) => {
                console.log(result)
                if (result.status !== 200) {
                    (params.showToasts && params.toast.error(errorMessage))
                    //dispatch(loginFailure(errorMessage))
                } else {

                    (params.showToasts && params.toast.info(okMessage))
                  //  dispatch(loginSuccess(result.data))
                }
            })
            .catch((err) => {
                //let lErrMess = errorMessage + ' ' + getErrorMessage(err)
                let lErrMess = errorMessage + ' ' + err
                params.toast.error(lErrMess)
                //dispatch(loginFailure(lErrMess))
            })
        return response
})



// export const dispatchLoginUser = (showToasts, messages, username, password) => async 

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loading(state, action) {
            return {
                ...state,
                data: {},
                fetched: false,
                loggedin: false,
                loading: true,
                error: null
            }
        },
        dataFetched(state, action) {
            return {
                ...state,
                data: {...action.payload.data},
                fetched: false,
                loggedin: true,
                loading: false,
                error: null
            };
        },
        logout(state, action) {
            return {
                ...state,
                data: {},
                fetched: false,
                loggedin: false,
                loading: true,
                error: null
            };
        },
        error(state, action) {
            return {
                ...state,
                data: {},
                fetched: false,
                loggedin: false,
                loading: true,
                error: action.data
            }
        }
    },
    extraReducers: builder =>  {
        builder
        .addCase(dispatchLoginUser.pending, (state, action) => {
            state.loading = true
          })
        .addCase(dispatchLoginUser.fulfilled, (state, action) => {
            state = dataFetched(state, action)
        })
        .addCase(dispatchLoginUser.rejected, (state, action) => {
            //state = error(state, action)
            state.loggedin = true
        })
    }
})


export const { loading, dataFetched, logout, error, pending, fulfilled, rejected } = loginSlice.actions

export default loginSlice.reducer