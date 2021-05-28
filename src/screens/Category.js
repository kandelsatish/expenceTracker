import React, { useState, useContext } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Segment from '../components/Segment';
import { Context } from '../context/categoryContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AddModal from '../components/AddModal'
export default function Category() {
    const [index, setIndex] = useState(0);
    const {state} = useContext(Context);
    const [modalVisible, setModalVisible] = useState(true);
    console.log(state);
    return (
        <>
            <AddModal
                modalVisible={modalVisible}
                onModelStateChange={() => setModalVisible(!modalVisible)}
            />
            <Segment index={index}
                onTabChange={(newIndex) => setIndex(newIndex)}
            />
            <FlatList
                horizontal={false}
                data={state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.list}>
                                <MaterialCommunityIcons name={item.icon} size={35} />
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
        padding: 5
    },
    text: {
        fontSize: 20,
        marginLeft: 10
    }
})
