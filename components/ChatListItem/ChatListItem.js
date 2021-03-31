import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import moment from "moment";
// import ChatRooms from "../../data/ChatRoom";
import { useNavigation } from "@react-navigation/native";

const ChatListItem = ({ chatRoom }) => {
  // const { chatRoom } = props;
  // onPress={() => navigation.navigate("ChatRoomScreen")}

  const navigation = useNavigation();

  const onPressChats = () => {
    navigation.navigate("ChatRoomScreen", { 
      id: chatRoom.id, 
      name: user.name,
      // imageUri: user.imageUri or test it first
      uri: user.imageUri

    });
  }

  const user = chatRoom.users[0];
  // const user = chatRoom.users[1];

  return (
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
        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createAt).format("DD/MM/YYYY")}
        </Text>
        {/* <Text style={styles.time}>Yesterday</Text> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;

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
