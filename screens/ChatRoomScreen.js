import React from "react";
import { StyleSheet, FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import chattingData from "../data/Chats";
import ChatMessages from "../components/ChatMessage/ChatMessages";
import bg from "../assets/images/kachi2.jpg"

const ChatRoomScreen = () => {
  const route = useRoute();
  // console.log(route.params);

  return (
    <>
    <ImageBackground style={{width: '100', height:'100%'}} source={bg}>

    <FlatList
      style={styles.container}
      data={chattingData.messages}
      renderItem={({ item }) => <ChatMessages message={item} /> }
      keyExtractor={(item) => item.id}
      inverted
      />
      </ImageBackground>
    </>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: { width: "100%" },
});
