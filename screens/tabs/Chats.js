import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
// import ChatListItem from "../../components/ChatListItem/ChatListItem";
// import ChatRooms from "../../data/ChatRoom";

const Chats = ({ navigation }) => {
  return (
    <View>
      {/* <FlatList
        style={{ width: "100%" }}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
