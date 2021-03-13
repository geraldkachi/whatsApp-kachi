import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
// import { useRoute } from "@react-navigation/native";

const ContactListItem = ({user}) => {
  // const route = useRoute();
  // console.log(route.params);

  const onPressChats = () => {
    console.warn("i pressed something");
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={onPressChats}>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
            <View style={styles.midContainer}>
            </View>
              <Text style={styles.status}>{user.status}</Text>
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
  status: {
    fontSize: 16,
    color: "grey",
    width: "100%",
  },
});
