import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const PostSreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Post</Text>
            <Button title="Pls Press Me" onPress={()=> navigation.navigate("Home")} />
        </View>
    )
}

export default PostSreen

const styles = StyleSheet.create({
   container :{ justifyContent: 'center', alignItems:'center', top: 10}
})
