import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Account() {
    return (
        <View style={styles.container}>
            <View style={styles.topImageView}>
                <Image style={styles.image} source={require('../assets/bull.jpg')} />
                <View style={{ flexDirection: 'row', marginTop: 10, width: '100%', justifyContent: 'space-around' }}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons size={35} name="account-edit" color={'blue'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons size={35} name="logout" color={'blue'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.userInfo}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Satish kandel</Text>
                    <Text style={{ color: '#000', fontSize: 15, fontStyle: "italic", alignSelf: 'center' }}>kandelsatish123@gmail.com</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topImageView: {
        height: 250,
        alignItems: 'center',
        marginTop: 30
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    userInfo: {
        marginTop: 25
    }
})
