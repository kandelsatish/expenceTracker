import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Spending from '../screens/Spending';
import Category from '../screens/Category';
import Account from '../screens/Account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity} from 'react-native';
const Stack = createStackNavigator();


export const SpendingStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Spending" component={Spending}
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: '#ba6325' }

                })}
            />
        </Stack.Navigator>
    )
}

export const CategoryStack = ({navigation}) => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Category"
                component={Category}
                options={({ navigation, route}) => ({
                    headerStyle: { backgroundColor: '#3a73c2' },
                    headerRight: () => (<TouchableOpacity onPress={()=>{}}>
                        <MaterialCommunityIcons name="plus" size={40} style={{ marginRight: 20 }} />
                    </TouchableOpacity>),
                })}
            />
        </Stack.Navigator>
    )
}

export const ProfileStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Account} />
        </Stack.Navigator>
    )

}
