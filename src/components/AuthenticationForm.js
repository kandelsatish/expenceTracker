import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
export default function AuthenticationForm({ onSubmit, screenName, title }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.form}>
            <Text style={{ alignSelf: 'center', margin: 30, fontWeight: 'bold', fontSize: 20 }}>{screenName}</Text>
            <TextInput
                label="Email"
                mode="outlined"
                theme={{ colors: { primary: '#ba6325', underlineColor: 'transparent' } }}
                value={userName}
                onChangeText={setUserName}
            />
            <TextInput
                label="Password"
                mode="outlined"
                theme={{ colors: { primary: '#ba6325', underlineColor: 'transparent' } }}
                style={{ marginTop: 30 }}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            
            <TouchableOpacity
                style={styles.btnStyles}
                onPress={() => onSubmit(userName, password)}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    form: {
        width: '90%',
        margin: 20,
        marginTop: 60
    },
    btnStyles: {
        marginTop: 40,
        backgroundColor: '#ba6325',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})
