import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements'
import Spacer from "../components/Spacer";

const SignupScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            <Spacer/>
            <Spacer>
                <Button
                    title='Sign Up'
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
    }
});

export default SignupScreen;
