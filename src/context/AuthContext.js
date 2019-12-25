import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {AsyncStorage} from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error' : {
            return {
                ...state,
                errorMessage: action.payload,
            };
        }
        case 'signup':
        case 'signin': {
            return {
                ...state,
                token: action.payload,
                errorMessage: '',
            }
        }
        case 'clear_error_message': {
            return {
                ...state,
                errorMessage: '',
            }
        }
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({
        type: 'clear_error_message'
    })
};


const signup = (dispatch) => async ({email, password}) => {
    // make api request to sign up with that email and password
    // if we sign up, modify state, and say we are authenticated.
    // if signing up fails, reflect an error message.
    try {
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'signup',
            payload: response.data.token,
        });
        navigate('TrackList');
    } catch (e) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign up'
        })
    }
};

const signin = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'signin',
            payload: response.data.token,
        });
        navigate('TrackList');
    } catch (e) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        })
    }
};


const signout = (dispatch) => () => {

};

export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signin,
        signout,
        signup,
        clearErrorMessage
    },
    {
        token: null,
        errorMessage: '',
    }
);
