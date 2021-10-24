import React, { useState, useMemo } from "react";
import {  View, Image ,TouchableOpacity, Text } from "react-native";

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

  const [isDarkTheme , setIsDarkTheme] = React.useState(false)

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
          // headerBackTitleVisible: false,
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
          // headerBackTitleVisible: false,
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
          // headerBackground: () => (
          //   <Image
          //     style={{ height: 200}}
          //     source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
          //   />
          // ),
          headerBackImage: () => (
            <View style={{ flexDirection:'row' }}>
              <Ionicons style={{alignSelf:'center'}} onPress={() => navigation.goBack()} name="arrow-back" size={22} color="white" />
              <Image style={{margin:5, width: 30, height:30, borderRadius: 15, alignSelf:'center' }} source={{ uri: route.params.uri }} />
              {/* <Text style={{padding: 10, color:'white', marginHorizontal: 30}}>{console.log(`route.params.name`, route.params.name)}</Text>  */}
              {/* <Text style={{padding: 10}}>{console.log(`route.params.name`, route.params.uri)}</Text> */}
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 15, width: "100%", }} >
              <TouchableOpacity style={{ paddingHorizontal: 2 }} onPress={() => {}} >
                <FontAwesome5 name="video" size={22} color="white" />
              </TouchableOpacity>
              
              <TouchableOpacity style={{ paddingHorizontal: 2 }} onPress={() => {}}>
                <MaterialIcons name="call" size={22} color="white" />
              </TouchableOpacity>
              
              <TouchableOpacity style={{ paddingHorizontal: 2 }} onPress={() => {}} >
                <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen 
      options={{
        // headerBackTitleVisible: false,
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


const ChatRoomHeader = (props) => (
  <View style={{ flexDirection:'row' }}>
     <Image style={{ width:30, height:30, borderRadius:30}} source={{ uri: route.params.imageUri }} />
    <Text></Text>
  </View>
)