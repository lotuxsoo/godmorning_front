import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const inset = useSafeAreaInsets();
  console.log(inset);
  useEffect(() => {}, []);

  const login = () => {
    navigation.navigate("BottomTab");
  };

  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require("../../assets/fonts/NanumSquareRoundB.ttf"),
    });
  };

  return isReady ? (
    //<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <LinearGradient
      colors={[
        "#9DC0FF",
        "rgba(184, 181, 255, 0.97) ",
        "rgba(210, 171, 217, 0.85) ",
        "rgba(248, 204, 187, 0.94) ",
        "rgba(255, 249, 179, 0.82) ",
      ]}
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          position: "absolute",
          width: 550,
          height: 550,
        }}
        source={require("../../assets/images/title.png")}
      />
      <Pressable
        onPress={login}
        style={{
          top: 130,
          height: 50,
          width: 250,
          borderRadius: 10,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "gray",
            fontSize: 20,
            fontFamily: "NanumSquareRoundB",
          }}
        >
          Google
        </Text>
      </Pressable>
    </LinearGradient>
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
  button: {
    width: 130,
    height: 100,
    borderRadius: 30,
  },
  container: {},
});

export default LoginScreen;
