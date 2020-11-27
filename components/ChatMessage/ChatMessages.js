import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ChatMessages = ({ message }) => {
  // const {message} = props

  return (
    <View style={styles.container}>
      <Text>{message.user.name}</Text>
      <Text>{message.content}</Text>
      <Text>{moment(message.createAt).fromNow()}</Text>
    </View>
  );
};

export default ChatMessages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});
