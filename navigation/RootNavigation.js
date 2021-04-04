import React, { useState, useMemo } from "react";
import {  View, Image ,TouchableOpacity } from "react-native";

import { 
  NavigationContainer,   
  DefaultTheme ,
  DarkTheme  } from "@react-navigation/native";


import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BottomTabScreen from "../screens/BottomTabScreen";
import Colors from "../constants/Colors";
import {
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  Ionicons
} from "@expo/vector-icons";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactsScreen from "../screens/ContactsScreen"; 



const Stack = createStackNavigator();

export default function RootNavigation() {

  const [isDarkTheme , setIsDarkTheme] = useState(false)

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

    const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
      text: '#333333'
    },
  }

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#333333',
      text: '#fff'
    },
  }

  const authContext = useMemo(() => ({

   }), []);


  return (
    <NavigationContainer>
      {/* linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} > */}
      <RootNavigator />
    </NavigationContainer>
  )
}

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          headerBackTitleVisible: false,
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
          headerBackTitleVisible: false,
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
      {/* ////////////////////////////////////////////////////////////////////// */}
      <Stack.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        // options={({ route }) => ({
        options={({ navigation, route }) => ({
          title: route.params.name, uri: route.params.imageUri,
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View>
              <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={22} color="white" />
              <Image source={{ uri: route.params.imageUri }} />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 15, width: "100%", }} >
              <TouchableOpacity style={{ paddingHorizontal: 2 }} onPress={() => {}} >
                <FontAwesome5 name="video" size={22} color="white" />
              </TouchableOpacity>
              {/*  */}
              <TouchableOpacity style={{ paddingHorizontal: 2 }} onPress={() => {}}>
                <MaterialIcons name="call" size={22} color="white" />
              </TouchableOpacity>
              {/*  */}
              <TouchableOpacity style={{ paddingHorizontal: 2 }} onPress={() => {}} >
                <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen 
      options={{
        headerBackTitleVisible: false,
        title: "Select contact",
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
      name="ChatContacts" component={ContactsScreen} />
      <Stack.Screen name="BottomTab" component={BottomTabScreen} />
    </Stack.Navigator>
  );
}
