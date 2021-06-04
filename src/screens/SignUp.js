import React, { useContext } from 'react'
import { View } from 'react-native'
import AuthenticationForm from '../components/AuthenticationForm'
import NavigationLink from '../components/NavigationLink';
import { Context } from '../context/authenticationContext'

export default function SignUp({ navigation }) {

    const { state, signUp } = useContext(Context);

    const submit = (username, password) => {
        signUp(username, password, () => {
            navigation.navigate('SignIn');
        });
    }

    return (
        <View>
            <AuthenticationForm
                screenName={'Sign Up'}
                onSubmit={(userName, password) => submit(userName, password)}
                onSignUp={({ userName, password }) => submit({ userName, password })}
                title='SIGN UP'
            />
            <NavigationLink
                navigation={navigation}
                route={"SignIn"}
                text="Alredy have an account? SignIn instead."
            />
        </View>
    )
}
