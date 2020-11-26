import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BottomTabScreen from "../screens/BottomTabScreen";
import Colors from "../constants/Colors";
import { Octicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import ChatRoomScreen from "../screens/ChatRoomScreen";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      {/* linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 15,
          elevation: 0,
          borderColor: "#0c6157",
          borderBottomWidth: 0,
          shadowOffset: {
            height: 0,
          },

          // borderTopWidth: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 60,
                marginRight: 15,
              }}
            >
              <Octicons
                name="search"
                size={22}
                color={Colors.light.background}
              />
              {/* <MaterialCommunityIcons */}
              <Entypo
                name="dots-three-vertical"
                size={22}
                color={Colors.light.background}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
      <Stack.Screen name="BottomTab" component={BottomTabScreen} />
    </Stack.Navigator>
  );
}
