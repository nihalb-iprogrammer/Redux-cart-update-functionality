import React from 'react';
import { Provider } from 'react-redux';
import Store from'./src/Redux/Store';
import CartScreen from './src/screens/CartScreen'; // Your Cart component
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartDetails from './src/screens/CartDetails';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CartScreen">
          <Stack.Screen 
            name="CartScreen" 
            component={CartScreen} 
            options={{ headerShown: false }} // Hide the header for CartScreen
          />
          <Stack.Screen 
            name="CartDetails" 
            component={CartDetails} 
            options={{ title: 'Cart Details' , headerStyle: {
              backgroundColor: '#B6D0E2', // Set your desired background color here
            }}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;