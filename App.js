import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation/RootNavigation";

const App = () => {
  return <RootNavigation />;
};

export default App;

const styles = StyleSheet.create({});


// results command resoect



//  <Stack.Navigator  >
//     Your screens 
// </Stack.Navigator>


// If you only want to remove it from one screen in react-native-navigation then:

// <Stack.Navigator>
//     <Stack.Screen 
//             name="Login" 
//             component={Login} 
//             options= {{headerShown: false}} />
// </Stack.Navigator> 