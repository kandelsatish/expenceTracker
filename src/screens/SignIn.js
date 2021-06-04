import React, { useContext } from 'react'
import AuthenticationForm from '../components/AuthenticationForm'
import { Context} from '../context/authenticationContext'
import NavigationLink from '../components/NavigationLink'
export default function SignIn({ navigation }) {
    const {signIn}=useContext(Context);
    const submit = (username, password) => {
        signIn(username, password);
    }

    return (
        <>
            <AuthenticationForm
                screenName='Sign In'
                onSubmit={(userName, password) => submit(userName, password)}
                title='SIGN IN'
            />
            <NavigationLink
                navigation={navigation}
                route={"SignUp"}
                text="Don't have an account? SignUp instead."
            />
        </>
    )
}
