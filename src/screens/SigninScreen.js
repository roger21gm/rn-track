import React, {useContext} from 'react';
import { NavigationEvents } from "react-navigation";
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    const {state, signin, clearErrorMessage } = useContext(AuthContext);



    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign In for Tracker'
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText='Sign In'
            />
            <NavLink
                text='Already have an account? Sign up instead'
                routeName='Signup'
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        header: null,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    }
});

export default SigninScreen;

