import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTwitter from "./bottomtabs/HomeTwitter";
import Search from "./bottomtabs/Search";
import Message from "./bottomtabs/Message";
import Notification from "./bottomtabs/Notification";
import {
  Entypo,
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
  Octicons,
  // AntDesign,
  // MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

{
  /* <MaterialCommunityIcons
  name="star-four-points-outlinr"
  size={24}
  color="blue"
/>; */
}
{
  /* <AntDesig name="twitter" size={24} color="blue" /> */
}

const BottomTabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeTwitter"
      component={HomeTwitter}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "blue",
        tabBarIcon: () => <Octicons name="home" size={24} color="blue" />,
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "blue",
        tabBarIcon: () => <Octicons name="search" size={22} color="blue" />,
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarLabel: "Notification",
        tabBarColor: "blue",
        tabBarIcon: () => (
          <MaterialIcons name="notifications-none" size={28} color="blue" />
          // <Ionicons name="ios-notifications-outline" size={24} color="blue" />
        ),
      }}
    />
    <Tab.Screen
      name="Message"
      component={Message}
      options={{
        tabBarLabel: "Message",
        tabBarColor: "blue",
        tabBarIcon: () => (
          <SimpleLineIcons name="envelope" size={24} color="blue" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabScreen;

const styles = StyleSheet.create({});
