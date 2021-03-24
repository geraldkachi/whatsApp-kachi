import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import Colors from '../../constants/Colors'

const ChatMessages = ({ message }) => {
  // const {message} = props

  const isMessage = () => message.user.id === "u1";

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMessage() ? "#DCF8C5" : "white",
            marginLeft: isMessage() ? 50 : 0,
            marginRight: isMessage() ? 0 : 50,  
          },
        ]}
      >
        {isMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createAt).fromNow()}</Text>
      </View>
    </View>
  );
}


export default ChatMessages;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // flex: 1,
    width: "100%",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  messageBox: {
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
  },
  name : {
    color: Colors.light.tint,
    fontWeight: "bold",
    margingBottom: 5
  },
  time: {
    alignSelf: "flex-end",
    color: 'grey'
  }
});
