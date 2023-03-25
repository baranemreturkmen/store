import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Login from './pages/Login';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name={"LoginPage"} component={Login} 
                options={{
                    title: 'Store',
                    headerStyle: {backgroundColor: '#4282e3'},
                    headerTitleStyle: {color: 'white'},
                }}></Stack.Screen>
                <Stack.Screen name={"ProductsPage"} component={Products} 
                options={{
                    title: 'Store',
                    headerStyle: {backgroundColor: '#4282e3'},
                    headerTitleStyle: {color: 'white'},
                }}></Stack.Screen>
                <Stack.Screen name={"DetailPage"} component={Detail} 
                options={{
                    title: 'Detail',
                    headerStyle: {backgroundColor: '#4282e3'},
                    headerTitleStyle: {color: 'white'},
                    headerTintColor: 'white',
                }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;