import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./src/navigation";

const App = () => {
  return (
    //<View style={styles.container}>
    <Navigation />
    //</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
