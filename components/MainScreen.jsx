import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useSelector } from 'react-redux'



const MainScreen = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <View style={styles.container}>
      <Text>{appTitle}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebc1c4",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MainScreen;