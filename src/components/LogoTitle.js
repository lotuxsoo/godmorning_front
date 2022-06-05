import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const LogoTitle = () => {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require("../../assets/fonts/NanumSquareRoundB.ttf"),
      NanumSquareRoundEB: require("../../assets/fonts/NanumSquareRoundEB.ttf"),
    });
  };

  return isReady ? (
    <>
      <View style={styles.container}>
        <Image
          style={{ height: 25, width: 25 }}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={styles.title}>GOD[T] Morning</Text>
      </View>
      <View
        style={{
          borderBottomColor: "#C4C4C4",
          borderBottomWidth: 1,
        }}
      />
    </>
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
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    left: 10,
    marginBottom: 10,
  },
  title: {
    left: 10,
    top: 5,
    color: "black",
    fontSize: 20,
    fontFamily: "NanumSquareRoundEB",
  },
});

export default LogoTitle;
