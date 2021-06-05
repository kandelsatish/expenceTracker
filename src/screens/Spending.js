import React, { useContext, useState, useEffect } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import Card from '../components/Card'
import CategoryModal from '../components/AddModal';
import Summery from '../components/Summery';
import {Context as ExpenseContext } from '../context/expenseContext'
import {Context as CategoryContext} from '../context/categoryContext'

export default function Spending() {
    const { state,updateExpences } = useContext(ExpenseContext);
    const {updateCategory}=useContext(CategoryContext)
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        updateCategory();
        updateExpences();
    }, []);

    return (
        <>
            <CategoryModal modalVisible={modalVisible} onModelStateChange={() => setModalVisible(!modalVisible)} />

            <Summery onModelStateChange={() => setModalVisible(!modalVisible)} />
            {state.length ? null : (
                <Text style={style.message}>Nothing to show! Add income or Expences</Text>
            )}
            
            <FlatList
                data={state}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Card height={100} item={item}/>
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

