import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ChatListItem from "../../components/ChatListItem/ChatListItem";
import FloatMsgBtn from "../../components/floatbtn/FloatMsgBtn";
import ChatRooms from "../../data/ChatRoom";

const Chats = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <FloatMsgBtn />
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
     flex: 1 ,
    //  width: "100%",
    justifyContent:'center',
    alignItems:'center',
  }
});
