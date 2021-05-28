import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { SpendingStack, CategoryStack, ProfileStack } from './src/navigations/navigation'
const Tab = createMaterialBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Provider as ExpendeProvider} from './src/context/expenseContext'
import {Provider as CategoryProvider} from './src/context/categoryContext'
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
            tabBarColor: '#c138d9',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="shield-account" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default () => {
  return (
    <ExpendeProvider>
      <CategoryProvider>
      <App />
      </CategoryProvider>
    </ExpendeProvider>
  )

}