import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Main from '../screens/Main';
import Product from '../screens/Product';

const Stack = createNativeStackNavigator();
//<Stack.Screen name="Preload" component={Preload} />
export default () => (
    <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
);