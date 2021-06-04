import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { SpendingStack, CategoryStack, ProfileStack } from './src/navigations/navigation'
const Tab = createMaterialBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Provider as ExpendeProvider } from './src/context/expenseContext'
import { Provider as CategoryProvider } from './src/context/categoryContext'
import { Provider as AuthProvider, Context as AuthContect } from './src/context/authenticationContext'
import { AuthenticationStack } from './src/navigations/navigation'
const App = () => {
  const { state } = useContext(AuthContect)
  console.log(state.username);
  return (
    <NavigationContainer>
      {state.username
        ? <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#fff"
          barStyle={{ backgroundColor: '#3ddb5d' }}
          shifting={true}
        >
          <Tab.Screen
            name="SpendingStack"
            component={SpendingStack}
            options={{
              tabBarLabel: 'Spending',
              tabBarColor: '#ba6325',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="notebook" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="CategoryStack"
            component={CategoryStack}
            options={{
              tabBarLabel: 'Category',
              tabBarColor: '#3a73c2',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cupboard" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{
              tabBarLabel: 'Account',
              tabBarColor: '#c42399',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="shield-account" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
        : <AuthenticationStack/>}

    </NavigationContainer>
  )
};

export default () => {
  return (
    <AuthProvider>
      <ExpendeProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </ExpendeProvider>
    </AuthProvider>
  )
}