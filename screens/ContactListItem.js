import React from "react";
import {  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert, } from "react-native";
import { useRoute } from "@react-navigation/native";


const ContactListItem = () => {
  const route = useRoute();
  // console.log(route.params);

  return (
    <>
   <TouchableWithoutFeedback onPress={onPressChats}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
};

export default ContactListItem;


  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      padding: 10,
    },
    leftContainer: {
      flexDirection: "row",
    },
    midContainer: {
      justifyContent: "space-around",
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 60,
      marginRight: 10,
    },
    username: {
      fontSize: 16,
      color: "grey",
    },
    lastMessage: {
      fontSize: 16,
      color: "grey",
      width: "100%",
    },
    time: {
      fontSize: 12,
      color: "grey",
    },
  });
