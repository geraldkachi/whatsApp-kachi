import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Camera from "./tabs/Camera";
import Chats from "./tabs/Chats";
import Status from "./tabs/Status";
import Calls from "./tabs/Calls";

import { Fontisto } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

const TopTabScreen = () => (
  <Tab.Navigator
    screenOptions={{ headerStyle: { backgroundColor: "#075E54" } }}
    tabBarOptions={{
      labelStyle: { fontSize: 12 },
      tabStyle: { width: 100 },
      style: { backgroundColor: "white" },
    }}
  >
    <Tab.Screen
      name="Camera"
      component={Camera}
      options={{
        // tabBarLabel: "Home",
        // tabBarColor: "blue",
        tabBarIcon: () => <Fontisto name="camera" size={24} color="black" />,
      }}
    />
    <Tab.Screen name="Chats" component={Chats} />
    <Tab.Screen name="Status" component={Status} />
    <Tab.Screen name="Calls" component={Calls} />
  </Tab.Navigator>
);

export default TopTabScreen;

const styles = StyleSheet.create({});
