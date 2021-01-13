import React from "react";
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './components/MainScreen'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={MainScreen}
          options={{ 
            title:appTitle ,
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTitleStyle: {
            color: 'pink',
            fontSize: 25
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
