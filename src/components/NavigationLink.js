import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
export default function NavigationLink({onClick,text,navigation,route}) {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(route)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'grey',
        alignSelf: 'center',
        marginTop:20,
        fontSize:15
    }
});
