import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
export default function Header({onModelStateChange,onSave}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>onModelStateChange()}>
                <Entypo name="circle-with-cross" size={30} color={'#ba6325'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onSave()}>
                <Text style={styles.text}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 10,
        backgroundColor:'#ffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity:1,
        elevation: 2,
        position: 'relative',
        marginBottom:10
    },
    text: {
        fontSize: 20,
        color:'#ba6325'
    }
})


