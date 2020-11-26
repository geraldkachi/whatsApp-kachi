import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screens/SettingScreen";
import BottomTabScreen from "./BottomTabScreen";
import TopTabScreen from "./TopTabScreen";

// import Colors from "../constants/Colors";

const HomeStack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {},
    }}
  >
    <HomeStack.Screen
      name="TopTab"
      component={TopTabScreen}
      options={{
        headerStyle: {},
      }}
    />
    <HomeStack.Screen name="BottomTab" component={BottomTabScreen} />
    <HomeStack.Screen name="Setting" component={SettingScreen} />
  </HomeStack.Navigator>
);

export default HomeScreen;

const styles = StyleSheet.create({});

// const [] = React.useState

// React.useEffect(() => {
//   setTimeout(() => {
//     StatusBar.setBackgroundColor("#1238c7e");
//   }, 100);
// }, []);
