import React, { useState, useContext } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Segment from '../components/Segment';
import { Context } from '../context/categoryContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AddModal from '../components/AddModal'
export default function Category() {
    const [index, setIndex] = useState(0);
    const { state, deleteCategory } = useContext(Context);
    const [showDelete, setShowDelete] = useState(false);
    var category = [];
    if (index === 0) {
        category = state.filter(item => {
            return item.index === 0;
        });
    }
    if (index === 1) {
        category = state.filter((item) => {
            return item.index === 1;
        })
    }
    const [modalVisible, setModalVisible] = useState(false);
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
                data={category}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onLongPress={() => setShowDelete(true)} onPress={() => setShowDelete(false)} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: 'grey' }}>
                                <View style={styles.list}>
                                    <MaterialCommunityIcons name={item.icon} size={35} />
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                                {showDelete ? <TouchableOpacity onPress={() => deleteCategory(item.id)}>
                                    <MaterialCommunityIcons name="delete" size={35} color={'red'} style={{ marginRight: 10 }} />
                                </TouchableOpacity>
                                    : null
                                }
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
        alignItems: 'center',
        padding: 5
    },
    text: {
        fontSize: 20,
        marginLeft: 10
    }
})
