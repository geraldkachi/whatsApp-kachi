import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Chats = ({ navigation }) => {
  return (
    <View>
      <Text>Chats</Text>
      <Button
        title="Go to BottoTabs"
        onPress={() => {
          navigation.navigate("BottomTab");
        }}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
Chats;
