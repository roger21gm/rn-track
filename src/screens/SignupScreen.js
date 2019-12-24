import React, { useState, useContext } from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements'
import Spacer from "../components/Spacer";
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {

    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    console.log(state);

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3> Signup for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer/>
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />
            {state.errorMessage ? <Text style={styles.errorMessage}> {state.errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title='Sign Up'
                    onPress={() => signup({ email, password })}
                />
            </Spacer>
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        header: null,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
    errorMessage: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15,
        color: 'red',
    }
});

export default SignupScreen;

