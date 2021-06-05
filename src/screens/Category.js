import React, { useState, useContext } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Segment from '../components/Segment';
import { Context } from '../context/categoryContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AddModal from '../components/AddModal'
export default function Category() {
    const [indx, setindx] = useState(0);
    const { state, deleteCategory } = useContext(Context);
    const [showDelete, setShowDelete] = useState(false);
    var category = [];
    if (indx === 0) {
        category = state.filter(item => {
            return item.indx === 0;
        });
    }
    if (indx === 1) {
        category = state.filter((item) => {
            return item.indx === 1;
        })
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <AddModal
                modalVisible={modalVisible}
                onModelStateChange={() => setModalVisible(!modalVisible)}
            />
            <Segment index={indx}
                onTabChange={(newindx) => setindx(newindx)}
            />
            <FlatList
                horizontal={false}
                data={category}
                keyExtractor={(item, indx) => indx.toString()}
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
