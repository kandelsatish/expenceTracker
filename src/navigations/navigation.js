import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Spending from '../screens/Spending';
import Category from '../screens/Category';
import Account from '../screens/Account';
const Stack = createStackNavigator();


export const SpendingStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Spending" component={Spending} />
        </Stack.Navigator>
    )
}

export const CategoryStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
    )
}

export const ProfileStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Account} />
        </Stack.Navigator>
    )

}
