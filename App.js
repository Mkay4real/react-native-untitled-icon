import React from "react";
import { View, StyleSheet } from "react-native";
import UntitledIcon from "./src";

const App = () => {
  return (
    <View style={style.container}>
      <UntitledIcon name="eraser-fill" color="#006aff" size="48" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default App;
