import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import chattingData from "../data/Chats";
import ChatMessages from "../components/ChatMessage/ChatMessages";

const ChatRoomScreen = () => {
  const route = useRoute();
  console.log(route.params);

  return (
    <FlatList
      style={styles.container}
      data={chattingData.messages}
      renderItem={({ item }) => <ChatMessages message={item} /> }
      keyExtractor={(item) => item.id}
    />
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: { width: "50%" },
});
