import React, { useState } from "react";
import { View, StyleSheet, TextInput,TouchableOpacity  } from "react-native";
import Colors from "../../constants/Colors";
import {
  FontAwesome5,
  Entypo,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";


const ChatRoomInputBox = () => {
  const [message, setmessage] = useState('')

    const onMicrophonePress = () => {
      console.warn("Microphone");
    }
    const onSendPress = () => {
      console.warn(`Sending: ${message}`)

      //  Send the messages the the backend
      setmessage('')
    }
    const onPress = () => {
      if (!message) {
        onMicrophonePress()
      }else {
        onSendPress()
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput 
        value={message} 
        multiline 
        placeholder="Type a message"
        onChangeText={setmessage}
        style={styles.textInput} />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
       {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
      </View>
      <TouchableOpacity>
      <View style={styles.buttonContainer}>
          {!message ? (<MaterialCommunityIcons onPress={onPress} name="microphone" size={24} color="white" />) :
          (<MaterialIcons onPress={onPress} name="send" size={24} color="white" />)
        }
      </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginRight: 10,
    borderRadius: 25,
    alignItems: 10
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5
  },
  icon: {
      marginHorizontal: 5
  },
  buttonContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center", 
  },
});

export default ChatRoomInputBox;
