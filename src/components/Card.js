import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Context as Category } from '../context/categoryContext'
import {Context as ExpencesContext} from '../context/expenseContext'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Card({ height, item }) {
    const { state } = useContext(Category);
    const {deleteExpense}=useContext(ExpencesContext);
    const selectedCategory = item.selectedCategory
    console.log(item);
    var date = new Date(item.selectedDate).toISOString();
    date = date.split('T')[0];

    var category = state.filter(function (category) {
        return category.name === selectedCategory;
    });

    const color=item.index===0? 'red':'green';

    return (
        <View style={[styles.card, { height: height }]}>
            <View style={styles.icon}>
                <MaterialCommunityIcons name={category[0].icon} size={60} color={'#ba6325'} />
            </View>
            <View style={{ height: '100%', flex: 1 }}>
                <Text style={styles.text}>{category[0].name}</Text>
                <Text style={[styles.text, { fontSize: 13, color: 'grey' }]}>{date}</Text>
                <Text style={[styles.text,{color:color}]}>Rs.{item.amount}</Text>
            </View>
            <TouchableOpacity style={styles.delete} onPress={()=>deleteExpense(item.id)}>
                <MaterialCommunityIcons name="delete" size={40} color={'red'} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        margin: 20,
        height: 200,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#ba6325',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 9,
        position: 'relative',
        flexDirection: 'row',
    },
    icon: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        color: 'grey',
        marginTop: 5
    },
    delete: {
        alignSelf: 'center',
        marginRight: 20
    }
})
