import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Camera = () => {
  return <View style={styles.container}></View>;
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

// import Camera from "react-native-camera";
{
  /* <Camera
      ref={(cam)=>{
        camera = cam
      }}
      style={{}}
      aspect={Camera.constants.Aspect.fill} 
      /> */
}
