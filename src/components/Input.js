import { useState } from "react";
import { Dimensions, StyleSheet, TextInput } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const Input = ({ value, onChangeText, onSubmitEditing }) => {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require("../../assets/fonts/NanumSquareRoundB.ttf"),
      Cafe24Ohsquareair: require("../../assets/fonts/Cafe24Ohsquareair.ttf"),
    });
  };

  return isReady ? (
    <TextInput
      style={styles.input}
      placeholder="To do, 시간"
      maxLength={50}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      placeholderTextColor={"gray"}
    />
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
  input: {
    width: Dimensions.get("window").width - 25,
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    margin: 5,
    padding: 8,
    alignItems: "center",
    fontFamily: "Cafe24Ohsquareair",
  },
});

export default Input;
