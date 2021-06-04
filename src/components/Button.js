import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'
export default function Button({onDone}) {
    return (
        <TouchableOpacity>
            <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    text: {
        fontSize: 20,
        color:'#ba6325',
        alignSelf:'center',
        marginTop:20
    }
})
