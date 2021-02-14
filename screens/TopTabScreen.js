import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Camera from "./tabs/Camera";
import Chats from "./tabs/Chats";
import Status from "./tabs/Status";
import Calls from "./tabs/Calls";

import { createStackNavigator } from "@react-navigation/stack";

import { Fontisto, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Tab = createMaterialTopTabNavigator();

const TopTabScreen = () => {
  // const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
    headerMode={false}
      screenOptions={{
        headerStyle: {
          borderTopColor: Colors.light.tintColorLight,
          shadowOpacity: 15,
          elevation: 0,
          borderColor: "#0c6157",
          // borderTopWidth: 0,
        },
        
      }}
      tabBarOptions={{
        activeTintColor: Colors.light.background,

        style: {
          backgroundColor: Colors.light.tint,
        },
        indicatorStyle: {
          backgroundColor: Colors.light.background,
          height: 4,
        },
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Camera"
        component={CameraStackNavigation}
        options={{
          tabBarLabel: () => null,
          // tabBarColor: "blue",
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Chats" component={ChatsStackNavigation} 
         options={{
           headerStyle: null,
           style:{
             borderTopColor: "yellow"
           }
          // tabBarLabel: () => null,
          // tabBarColor: "blue",
        }}
      />
      <Tab.Screen name="Status" component={StatusStackStackNavigation} />
      <Tab.Screen name="Calls" component={CallseStackStackNavigation} />
    </Tab.Navigator>
  );
};

const CameraStack = createStackNavigator();
const ChatsStack = createStackNavigator();
const StatusStack = createStackNavigator();
const CallseStack = createStackNavigator();

const CameraStackNavigation = () => (
  <CameraStack.Navigator headerMode={false}>
    <CameraStack.Screen name="CameraScreen" component={Camera} />
  </CameraStack.Navigator>
);
const ChatsStackNavigation = () => (
  <ChatsStack.Navigator headerMode={false}>
    <ChatsStack.Screen name="ChatsScreen" component={Chats} />
  </ChatsStack.Navigator>
);
const StatusStackStackNavigation = () => (
  <StatusStack.Navigator headerMode={false}>
    <StatusStack.Screen name="StatusScreen" component={Status} />
  </StatusStack.Navigator>
);
const CallseStackStackNavigation = () => (
  <CallseStack.Navigator headerMode={false}>
    <CallseStack.Screen name="CallsScreen" component={Calls} />
  </CallseStack.Navigator>
);

export default TopTabScreen;

const styles = StyleSheet.create({});

// borderTopWidth: 0,
// borderTopColor: "transparent",
// elevation: 0,
// shadowColor: "transparent",
// shadowOpacity: 0,
// shadowRadius: 0,
// shadowOffset: {
//   height: 0,
// },
