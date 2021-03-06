import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

//timezone1: "4:00",
//timezone2: "7:10",

const RoutineButton = ({ routine }) => {
  //한사람의 todos 전체받기
  const navigation = useNavigation();
  const Title = routine.title;
  const Timezone1 = routine.timezone1;
  const Timezone2 = routine.timezone2;
  const Todo_list = routine.Todo_list;

  const toSeconds = (time) => {
    const parts = time.split(":");
    return parts[0] * 3600 + parts[1] * 60;
  };

  const calculate = () => {
    const difference = Math.abs(toSeconds(Timezone2) - toSeconds(Timezone1));
    const h = Math.floor(difference / 3600);
    const m = Math.floor((difference % 3600) / 60);
    if (h > 0) {
      if (m == 0) {
        return `${h}시간`;
      }
      return `${h}시간 \n ${m}분`;
    } else {
      return `${m}분`;
    }
  };

  const id = routine.id;

  const goTodoPage = () => {
    navigation.navigate("Others", { id });
  };
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      NanumSquareRoundB: require("../../assets/fonts/NanumSquareRoundB.ttf"),
      Cafe24Ohsquareair: require("../../assets/fonts/Cafe24Ohsquareair.ttf"),
    });
  };

  return isReady ? (
    <Pressable style={styles.container} onPress={goTodoPage}>
      <LinearGradient
        // Button Linear Gradient
        colors={[
          "rgba(184, 181, 255, 0.97) ",
          "rgba(210, 171, 217, 0.85) ",
          "rgba(248, 204, 187, 0.94) ",
          "rgba(255, 249, 179, 0.82) ",
        ]}
        style={styles.button}
      >
        <View
          style={{
            height: 110,
            width: 140,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
          }}
        >
          <Text style={styles.innertext}>{calculate()}</Text>
        </View>
      </LinearGradient>
      <View>
        <Text style={styles.routineName}>{Title}</Text>

        <Text style={styles.routineName}>🤍 100</Text>
        <Text style={styles.routineName}>💚 100</Text>
      </View>
    </Pressable>
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
  container: {},

  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
    borderRadius: 20,
    width: 160,
    height: 130,
  },
  innertext: {
    fontSize: 30,
    color: "black",
    fontFamily: "Cafe24Ohsquareair",
  },
  routineName: {
    left: 35,
    fontSize: 16,
    fontWeight: "500",
    bottom: 15,
  },
});
export default RoutineButton;
