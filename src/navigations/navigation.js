import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Spending from '../screens/Spending';
import Category from '../screens/Category';
import Account from '../screens/Account';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
const Stack = createStackNavigator();


export const SpendingStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Spending" component={Spending}
                options={() => ({
                    headerStyle: { backgroundColor: '#ba6325' }

                })}
            />
        </Stack.Navigator>
    )
}

export const CategoryStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Category"
                component={Category}
                options={() => ({
                    headerStyle: { backgroundColor: '#3a73c2' },
                })}
            />
        </Stack.Navigator>
    )
}
export const AuthenticationStack = () => {
        return (
            <Stack.Navigator >
                <Stack.Screen name="SignIn"
                    component={SignIn}
                    options={() => ({
                        headerShown:false
                    })}
                />
                <Stack.Screen name="SignUp"
                    component={SignUp}
                    options={() => ({
                        headerShown:false
                    })}
                />
            </Stack.Navigator>
        )
}

export const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Account}
                options={() => ({
                    headerStyle: { backgroundColor: '#c42399' },
                })} />
                
        </Stack.Navigator>
    )

}
