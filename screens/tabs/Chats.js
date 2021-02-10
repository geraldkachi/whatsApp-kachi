import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ChatListItem from "../../components/ChatListItem/ChatListItem";
import ChatRooms from "../../data/ChatRoom";

const Chats = () => {
  return (
    <View>
      <FlatList
        style={{ width: "100%", flex: 1 }}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
