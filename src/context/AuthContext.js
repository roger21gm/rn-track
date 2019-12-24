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
        case 'signup' : {
            return {
                ...state,
                token: action.payload,
                errorMessage: '',
            }
        }
        default:
            return state;
    }
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

const signin = (dispatch) => ({email, password}) => {


};


const signout = (dispatch) => () => {

};

export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signin,
        signout,
        signup,
    },
    {
        token: null,
        errorMessage: '',
    }
);
