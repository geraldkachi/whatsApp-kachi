import * as React from 'react'
// import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet ,Text, View, TouchableOpacity } from "react-native";
// import { NavigationRouteContext } from '@react-navigation/core';



const NoFoundScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This screen doesn't exist</Text>
            <TouchableOpacity onPress={()=> navigation.navigate.replace("Home")}>
                {/* <Text style={styles.linktext}>Go to home screen!</Text> */}
            </TouchableOpacity>
        </View>
    )
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    linktext: {
        fontSize: 14,
        color:'#2e78b7'
    }
})

export default NoFoundScreen

