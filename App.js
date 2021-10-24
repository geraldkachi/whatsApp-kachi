import 'react-native-gesture-handler';
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation/RootNavigation";
import { StatusBar } from 'expo-status-bar';

const App = () => {

  const [hidden, setHidden] = useState(false);
  const changeStatusBarVisibility = () => setHidden(!hidden)
  return(
    <>
    <StatusBar animated={true} hidden={hidden} style="light" barStyle="light-content" StatusBarStyle="light-content" />
     <RootNavigation /> 
     </>
    );
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