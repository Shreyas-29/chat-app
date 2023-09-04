import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import Home from "../pages/Home";
import Chat from "../pages/Chat";

const Stack = createNativeStackNavigator();

export default function HomeNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen name="chat" component={Chat} />
        </Stack.Navigator>
    )
}