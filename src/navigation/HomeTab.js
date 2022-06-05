import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import PopularScreen from "../screens/PopularScreen";
import NewScreen from "../screens/NewScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const HomeTab = createMaterialTopTabNavigator();

const HomeTabNav = () => {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require("../../assets/fonts/NanumSquareRoundB.ttf"),
    });
  };

  return isReady ? (
    <HomeTab.Navigator
      screenOptions={{
        //tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarItemStyle: { width: 100, height: 60 },
        swipeEnabled: false,
      }}
    >
      <HomeTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: ({ focused }) => (
            <Text style={focused ? styles.actTitle : styles.title}>홈</Text>
          ),
        }}
      />
      <HomeTab.Screen
        name="popular"
        component={PopularScreen}
        options={{
          title: ({ focused }) => (
            <Text
              style={focused ? styles.actTitle : styles.title}
              color={focused ? "blue" : "black"}
            >
              인기
            </Text>
          ),
        }}
      />
      <HomeTab.Screen
        name="new"
        component={NewScreen}
        options={{
          title: ({ focused }) => (
            <Text style={focused ? styles.actTitle : styles.title}>신규</Text>
          ),
        }}
      />
    </HomeTab.Navigator>
  ) : (
    // 앱 구성 컴포넌트
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setIsReady(true)}
      onError={() => {}}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "NanumSquareRoundB",
    fontSize: 20,
    fontWeight: "bold",
    color: "#757575",
  },
  actTitle: {
    fontFamily: "NanumSquareRoundB",
    fontSize: 20,
  },
});
export default HomeTabNav;
