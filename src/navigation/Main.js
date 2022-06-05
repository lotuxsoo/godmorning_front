import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { BottomTabNav } from "./BottomTab";
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BottomTab"
        component={BottomTabNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Main;
