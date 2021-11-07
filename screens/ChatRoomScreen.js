import React from "react";
import { StyleSheet, FlatList, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import chattingData from "../data/Chats";
import ChatMessages from "../components/ChatMessage/ChatMessages";
import bg from "../assets/images/kachi2.jpg"
import ChatRoomInputBox from "../components/chatroominputbox/ChatRoomInputBox";

const ChatRoomScreen = () => {

  const route = useRoute();
  console.log(route.params, "route.para,s");
  console.log(route, "route.paras");

  return (
    <>
    <ImageBackground style={{flex: 1, width: '100%', height:'100%'}} source={bg}>

    <FlatList
      style={styles.container}
      data={chattingData.messages}
      renderItem={({ item }) => <ChatMessages message={item} /> }
      keyExtractor={(item) => String(item.id)}
      inverted
      />
      <ChatRoomInputBox />
      </ImageBackground>
    </>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  container: { width: "100%" },
});
