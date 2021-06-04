import React, { useContext, useState } from 'react'
import { FlatList, Text,StyleSheet } from 'react-native'
import Card from '../components/Card'
import CategoryModal from '../components/AddModal';
import Summery from '../components/Summery';
import { Context } from '../context/expenseContext'
export default function Spending() {
    const { state} = useContext(Context);
    console.log(state);
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <CategoryModal modalVisible={modalVisible} onModelStateChange={() => setModalVisible(!modalVisible)}/>
           
            <Summery onModelStateChange={() => setModalVisible(!modalVisible)} />
            {state.length ? null : (
                <Text style={style.message}>Nothing to show! Add income or Expences</Text>
            )}
            <FlatList
                data={state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Card height={100} item={item} />
                )}
            />
        </>
    )
}

const style = StyleSheet.create({
    message: {
        alignSelf: 'center',
        marginTop: 30
    },

})

