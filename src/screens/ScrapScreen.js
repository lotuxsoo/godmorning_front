import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import todos from "../../assets/data/todos";
import { useNavigation } from "@react-navigation/native";
import RoutineButton from "../components/RoutineButton";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const ScrapScreen = () => {
  const navigation = useNavigation();

  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundEB: require("../../assets/fonts/NanumSquareRoundEB.ttf"),
      NanumSquareRoundB: require("../../assets/fonts/NanumSquareRoundB.ttf"),
      NanumSquareRoundR: require("../../assets/fonts/NanumSquareRoundR.ttf"),
    });
  };

  return isReady ? (
    <View style={styles.container}>
      <Text style={styles.title}>스크랩한 모닝 루틴</Text>
      <ScrollView contentContainerStyle={styles.routine}>
        <View style={styles.column1}>
          {todos.map((routine) => (
            <RoutineButton routine={routine} key={routine.id} />
          ))}
        </View>
        <View style={styles.column2}>
          {todos.map((routine) => (
            <RoutineButton routine={routine} key={routine.id} />
          ))}
        </View>
      </ScrollView>
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
  title: {
    fontFamily: "NanumSquareRoundB",
    paddingLeft: 25,
    paddingBottom: 5,
    fontSize: 25,
  },
  todo: {
    borderWidth: 1,
  },
  container: {
    paddingTop: 70,
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
  routine: {
    flexDirection: "row",
    justifyContent: "center",
  },

  column1: { left: 18 },
  column2: { right: 18 },
});

export default ScrapScreen;
