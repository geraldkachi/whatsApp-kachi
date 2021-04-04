import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import users from "../data/Users";
import ContactListItem from "../screens/ContactListItem";

const ContactsScreen = () => {
  const route = useRoute();
  // console.log(route.params);

  return (
    <>
      <View  style={styles.container}>
        <FlatList
          style={{ width: "100%"}}
          data={users}
          renderItem={({ item }) => <ContactListItem user={item} />}
          keyExtractor={(item) => item.id}
        //   inverted
        />
      </View>
    </>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: { width: "100%" },
});
