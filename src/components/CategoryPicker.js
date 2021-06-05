import React,{useState,useContext} from 'react'
import {StyleSheet,Text,FlatList,TouchableOpacity,Modal,View} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Context} from '../context/categoryContext'
import Header from './Header';
export default function CategoryPicker({setModalVisible,modalVisible,onCategorySelection,indx}) {
    console.log(indx)
    const {state}=useContext(Context);
    var category=[];
    if (indx === 0) {
      category=state.filter(item => {
            return item.indx === 0;
        })
    }
    if (indx === 1) {
      category= state.filter((item) => {
            return item.indx === 1;
        })
    }
    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View>
            <Header onModelStateChange={setModalVisible}/>
            <FlatList
                data={category}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>{
                            onCategorySelection(item.name);
                            setModalVisible();
                        }}>
                            <View style={styles.list}>
                                <MaterialCommunityIcons name={item.icon} size={25} style={styles.icon}/>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
      </Modal>
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
