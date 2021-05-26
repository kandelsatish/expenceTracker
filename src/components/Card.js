import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
export default function Card({height}) {
    console.log(height);
    return (
        <View style={[styles.card,{height:height}]}>

        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        margin: 20,
        height:200,
        borderRadius:10,
        backgroundColor:'#fff',
        shadowColor: '#ba6325',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 9,
        position: 'relative'
    }
})
