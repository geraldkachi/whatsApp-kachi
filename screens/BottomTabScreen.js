import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeTwitter from "./bottomtabs/HomeTwitter";
import Search from "./bottomtabs/Search";
import Message from "./bottomtabs/Message";
import Notification from "./bottomtabs/Notification";

import PostScreen from "./bottomtabs/PostSreen"

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

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity onPress={onPress} style={{top: -30, justifyContent:"center", alignItems:'center', ...styles.shadow}}>
      <View style={{width: 70, height: 70, borderRadius: 35, backgroundColor: 'blue'}}>  
          {children}
      </View>
  </TouchableOpacity>
)
//'#e32f45'

const BottomTabScreen = () => (
  <Tab.Navigator
  tabBarOptions={{
    showLabel: false,
    style: {
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: "#fff",
        borderRadius: 15,
        height: 90,
        ...styles.shadow
    }
}}
  >
    <Tab.Screen
      name="HomeTwitter"
      component={HomeTwitter}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "blue",
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconview}>
            <Octicons name="home" size={24} color="blue" />
            <Text style={{color: focused ? "#e32f45" : "#748c94"}}>Home</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "blue",
        tabBarIcon: ({focused}) =>  (
        <View style={styles.iconview}>
          <Octicons name="search" size={22} style={{color: focused ? "blue" : "#748c94"}}  />
          <Text style={{color: focused ? "#e32f45" : "#748c94"}}>Search</Text>
        </View>
          ),
      }}
    />

<Tab.Screen name="Post" 
            options={{
                tabBarIcon: ({focused}) => <Octicons name="plus" size={24} style={{color: focused ? "white" : "#748c94"}} />,
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}
            component={PostScreen} />

    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarLabel: "Notification",
        tabBarColor: "blue",
        tabBarIcon: ({focused}) => (
          <View style={styles.iconview}>
            <MaterialIcons name="notifications-none" size={28} style={{color: focused ? "blue" : "#748c94"}}  />
            <Text style={{color: focused ? "#e32f45" : "#748c94"}}>Notification</Text>
          </View>
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
        tabBarIcon: ({focused}) => (
          <View style={styles.iconview}>
            <SimpleLineIcons name="envelope" size={24} color="blue" />
            <Text style={{color: focused ? "blue" : "#748c94"}}>Message</Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor:"#7F5DF0",
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
},
iconview: {
  justifyContent: 'center', alignItems:'center', top: 10
}
});



//  initial tab nav.. changed to modified tab. like a floating tab



// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeTwitter from "./bottomtabs/HomeTwitter";
// import Search from "./bottomtabs/Search";
// import Message from "./bottomtabs/Message";
// import Notification from "./bottomtabs/Notification";
// import {
//   Entypo,
//   Ionicons,
//   SimpleLineIcons,
//   MaterialIcons,
//   Octicons,
//   // AntDesign,
//   // MaterialCommunityIcons,
// } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

// const BottomTabScreen = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="HomeTwitter"
//       component={HomeTwitter}
//       options={{
//         tabBarLabel: "Home",
//         tabBarColor: "blue",
//         tabBarIcon: () => <Octicons name="home" size={24} color="blue" />,
//       }}
//     />
//     <Tab.Screen
//       name="Search"
//       component={Search}
//       options={{
//         tabBarLabel: "Home",
//         tabBarColor: "blue",
//         tabBarIcon: () => <Octicons name="search" size={22} color="blue" />,
//       }}
//     />
//     <Tab.Screen
//       name="Notification"
//       component={Notification}
//       options={{
//         tabBarLabel: "Notification",
//         tabBarColor: "blue",
//         tabBarIcon: () => (
//           <MaterialIcons name="notifications-none" size={28} color="blue" />
//           // <Ionicons name="ios-notifications-outline" size={24} color="blue" />
//         ),
//       }}
//     />
//     <Tab.Screen
//       name="Message"
//       component={Message}
//       options={{
//         tabBarLabel: "Message",
//         tabBarColor: "blue",
//         tabBarIcon: () => (
//           <SimpleLineIcons name="envelope" size={24} color="blue" />
//         ),
//       }}
//     />
//   </Tab.Navigator>
// );

// export default BottomTabScreen;

// const styles = StyleSheet.create({});