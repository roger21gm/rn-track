import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const {
        state, signup, clearErrorMessage, tryLocalSignin,
    } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText="Sign Up"
            />
            <NavLink
                text="Already have an account? Sign in instead"
                routeName="Signin"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => ({
    header: null,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});

export default SignupScreen;
