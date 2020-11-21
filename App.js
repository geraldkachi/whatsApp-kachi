import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        // headerMode={false}  children={HomeStack}
      >
        <Drawer.Screen name="Home" children={HomeScreen} />
        {/* <Drawer.Screen name="BottomTab" component={BottomTabScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View ,Alert} from 'react-native';
// import {Header, Left,Right,Body,Title,Subtitle,Icon,Button,Content,List,ListItem,Thumbnail} from "native-base";

// import Feed from "./src/Feed";
// import Detail from "./src/Detail";

// import Screen1 from "./src/screens/drawer/Screen1"
// import Screen2 from "./src/screens/drawer/Screen2"
// import Screen3 from "./src/screens/drawer/Screen3"

// import Tab1 from "./src/screens/tabs/Tab1"
// import Tab2 from "./src/screens/tabs/Tab2"
// import Tab3 from "./src/screens/tabs/Tab3"
// import Tab4 from "./src/screens/tabs/Tab4"

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

// export default function App() {

//   createHomeStack = () =>

//   <Stack.Navigator >
//     <Stack.Screen name="Feed" component={Feed} options={{title: "My Feed", headerStyle: {backgroundColor:"black"}, headerTintColor:"white"}}/>
//     <Stack.Screen name="Detail" component={Detail} options={{title: "Detail Screen", headerStyle: {backgroundColor:"blue"}, headerTintColor:"white"}} />
//     <Stack.Screen name="Top Tabs" component={createTopTabs}/>
//     <Stack.Screen name="Bottom Tabs" component={createBottomTabs}/>
//   </Stack.Navigator>

//   createTopTabs = (props) => {
//     return(
//       <MaterialTopTabs.Navigator>
//       <MaterialTopTabs.Screen name="Tab 1" component={Tab1} options={{title: props.route.params.name}}/>
//       <MaterialTopTabs.Screen name="Tab 2" component={Tab2}/>
//       <MaterialTopTabs.Screen name="Tab 3" component={Tab3}/>
//       <MaterialTopTabs.Screen name="Tab 4" component={Tab4}/>
//     </MaterialTopTabs.Navigator>
//     )
//   }
//   createBottomTabs = () => {
//     return(
//       <MaterialBottomTabs.Navigator>
//       <MaterialBottomTabs.Screen name="Tab 1" component={Tab1}/>
//       <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}/>
//       <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}/>
//       {/* <MaterialBottomTabs.Screen name="Tab 4" component={Tab4}/> */}
//     </MaterialBottomTabs.Navigator>
//     )
//   }

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator >
//         <Stack.Screen name="Home" children={createHomeStack} />
//         <Stack.Screen name="Contacts" component={Screen1} />
//         <Stack.Screen name="Favorites" component={Screen2} />
//         <Stack.Screen name="Settings" component={Screen3} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
// //   },
// // });

// {/* <NavigationContainer>
// <Stack.Navigator initialRouteName="Home">
//   <Stack.Screen name="Home" component={HomeScreen} />
//   <Stack.Screen name="Details" component={DetailsScreen} />
// </Stack.Navigator>
// </NavigationContainer> */}

// // return (
// //   <View style={styles.container}>
// //   <StatusBar style="auto" />
// //   <Header  style={{  backgroundColor:"#fff"}}>
// //   <Left>
// //       <Button transparent button onPress={() => Alert.alert("This is Card Header")}>
// //         <Icon size={32}  style={{ color: "black" }}name='arrow-back' />
// //         <Text> Back</Text>
// //       </Button>
// //     </Left>
// //     <Body>
// //       <Title style={{fontSize:"15%"}}>Header</Title>
// //       <Subtitle>love header</Subtitle>
// //     </Body>
// //     <Right>
// //       <Button transparent>
// //         <Icon active name='menu' />
// //       </Button>
// //     </Right>
// //   </Header>
// //   <Content>
// //   <List>
// //           <ListItem selected style={{borderTopWidth:1}}>
// //             <Left>
// //             <Thumbnail source={require("./assets/images/kachi1.jpg")} />
// //               <Body>
// //                 <Text>Simon Mignolet</Text>
// //               <Text>gerald kachi</Text>
// //               </Body>
// //             </Left>
// //             <Right>
// //               <Icon name="arrow-forward" />
// //             </Right>
// //           </ListItem>
// //           <ListItem>
// //            <Left>
// //               <Text>Nathaniel Clyne</Text>
// //             </Left>
// //             <Right>
// //               <Icon name="arrow-forward" />
// //             </Right>
// //           </ListItem>
// //           <ListItem>
// //             <Left>
// //               <Text>Dejan Lovren</Text>
// //             </Left>
// //             <Right>
// //               <Icon active name="arrow-forward" />
// //             </Right>
// //           </ListItem>
// //         </List>
// //   </Content>
// //     <Text>Open up App.js to start working on your app!</Text>
// //     <Text>Open up App.js to start working on your app!</Text>
// //     <Text >Open up App.js to start working on your app!</Text>
// //     <Icon name="microphone-settings" type="MaterialCommunityIcons" />
// //     <Icon name="person-pin" type="MaterialIcons" />
// //     <Icon name="download" type="AntDesign" />
// //     <Icon name="bookmark" type="Feather" />
// //   </View>
// // );

// // import Routes from "../src/Routes"

// // export default Routes;
