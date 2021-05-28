import React,{useState,useContext} from 'react'
import {Model,Text,FlatList, Touchable, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Context} from '../context/categoryContext'
export default function CategoryPicker() {
    const {state}=useContext(Context);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Model
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
         <FlatList
            data={state}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=> {
                return(
                    <TouchableOpacity>
                        <MaterialCommunityIcons name={item.icon}/>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )
            }}
         />   
        </Model>

    )
}
