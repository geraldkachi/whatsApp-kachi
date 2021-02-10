import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Status = ({ navigation }) => {
  return (
    <View>
      <Text>Status</Text>
      <Button
        title="Go to BottoTabs"
        onPress={() => {
          navigation.navigate("BottomTab");
          // navigation.navigate("Setting");
        }}
      />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
Status;
