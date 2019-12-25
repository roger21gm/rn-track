import React, {useState} from 'react';
import {Button, Input, Text} from "react-native-elements";
import {StyleSheet} from "react-native";
import Spacer from "./Spacer";

const AuthForm = (props) => {

    const { headerText, errorMessage, onSubmit, submitButtonText } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
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
            {errorMessage ? <Text style={styles.errorMessage}> {errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({email, password})}
                />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15,
        color: 'red',
    },
});

export default AuthForm;
