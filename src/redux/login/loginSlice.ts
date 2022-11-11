import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authenticate } from '../../services/authenticationService';
import { setTokens } from '../../services/localStorage';
import { RootState } from '../store';


export interface IAuthentication {
    data: object;
    loading: boolean;
    fetched: boolean;
    loggedIn: boolean;
    error: string | null;
    accessToken?: string;
  }
  const initialState: IAuthentication = { 
    data: {},
    loading: false,
    fetched: false,
    loggedIn: false,
    error: null
  };


  export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
      start: (state) => {
        return {
          ...state,
          data: {},
          loading: true,
          fetched: false,
          loggedin: false,
          error: null
        };
      },
      success: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          data: {...action.payload},
          loading: false,
          fetched: true,
          loggedIn: true,
          error: null
        };
      },
      logout: (state, action: PayloadAction<any>) => {
        return {
          ...state,
          data: {},
          loading: false,
          fetched: false,
          loggedIn: false,
          error: null
        };
      },
      error: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          data: {},
          fetched: false,
          loggedin: false,
          loading: true,
          error: action.payload
        };
      },
    },
  });

  export const authenticateUser = (userData: any) => async (dispatch: any) => {
    try {
      const authData = await authenticate(
       userData
      );
      if (authData.status == true){
        setTokens(authData.data);
        dispatch(success(authData.data));
      }else{
        var message = authData.data.toString()
        dispatch(error(message));
      }
      
    } catch (err) {
        var errors = toString()
      dispatch(error(errors));
    }
  };
  export const { start, success, error } = authenticationSlice.actions;
  export const selectAuthentication = (state: RootState) => state.authentication;
  export const authenticationReducer = authenticationSlice.reducer;
