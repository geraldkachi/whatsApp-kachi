import React from 'react'
import { StyleSheet, View , TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from  "@expo/vector-icons";
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native';

const FloatMsgBtn = () => {
    const navigation = useNavigation()

    const onPressT0Contact = () => {
        navigation.navigate('ChatContacts')
        console.warn('hits contach screen');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressT0Contact}>
              <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default FloatMsgBtn

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.light.tint,
        justifyContent:'center',
        alignItems:'center',
        position:"absolute",
        borderRadius: 50,
        width: 50,
        height: 50,
        right: 20,
        bottom: 20
    }
})
