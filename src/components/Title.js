import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const Title = ({ value, onChangeText }) => {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require("../../assets/fonts/NanumSquareRoundB.ttf"),
      Cafe24Ohsquareair: require("../../assets/fonts/Cafe24Ohsquareair.ttf"),
      
    });
  };

  return isReady ? (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholderTextColor={"gray"}
        placeholder="루틴 이름을 지어보세요!"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
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
    justifyContent: "center",
  },
  title: {
    width: "100%",
    fontSize: 25,
    fontWeight: "500",
    padding: 20,
    marginHorizontal: 70,
    marginBottom: 10,
    fontFamily: "Cafe24Ohsquareair",
  },
});

export default Title;
