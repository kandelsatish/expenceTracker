import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Context } from '../context/expenseContext'
export default function Summery({ onModelStateChange }) {

    const { state } = useContext(Context);
    var income = 0;
    var expense = 0;

    state.forEach(item => {
        if (item.indx === 0) {
            expense += parseInt(item.amount);
        }
        if (item.indx === 1) {
            income += parseInt(item.amount);
        }
    });
    
    const textColor = (income < expense ? { color: 'red' } : { color: 'green' });

    const addExpendes = () => {
        onModelStateChange();
    }

    const addIncome = () => {
        onModelStateChange();
    }

    return (
        <View style={[styles.card, styles.general]}>
            <View>
                <Text style={[styles.text, { alignSelf: 'flex-end' }, textColor]}> Rs {income - expense}</Text>
            </View>
            <View style={styles.summery}>
                <Text style={styles.text}>Total Expense - - - - - - - - - -  Rs.{expense}</Text>
                <Text style={styles.text}>Total Income - - - - - - - - - - - Rs.{income}</Text>
            </View>
            <View style={styles.buttonsView}>
                <TouchableOpacity style={[styles.button, styles.general]} onPress={addIncome}>
                    <Text>Income +</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.general]} onPress={addExpendes}>
                    <Text>Expense +</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        margin: 20,
        height: 200,
        borderRadius: 10,
        padding: 10
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        padding: 5,
        marginVertical: 10
    },
    general: {
        backgroundColor: '#fff',
        shadowColor: '#ba6325',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 9,
        position: 'relative',
        justifyContent: 'space-between',
        borderRadius: 5
    },
    summery: {
        height: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    }, text: {
        fontWeight: 'bold',
        fontStyle: 'italic'
    },

})