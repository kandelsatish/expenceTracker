import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Modal} from 'react-native'
import PickDate from './PickDate';
import CategoryPicker from './CategoryPicker'
export default function From({amount,onAmountChange,selectedDate,onDateChange,isDatePickerVisible,onVisiblityChange}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={style.form}>
            <View style={style.static}>
                <Text style={style.unit}>Date</Text>
                <Text style={style.unit}>Category</Text>
                <Text style={style.unit}>Amount</Text>
            </View>
            <View style={style.dynamic}>
                <PickDate
                    selectedDate={selectedDate}
                    onDateChange={onDateChange}
                    isDatePickerVisible={isDatePickerVisible}
                    onVisiblityChange={onVisiblityChange}
                />
                <TouchableOpacity>
                <Text style={style.unit} onPress={}>Category</Text>
                </TouchableOpacity>
                <TextInput placeholder="Amount"
                    style={[style.unit, style.input]}
                    keyboardType={'numeric'}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        // backgroundColor:'red',
        flexDirection: 'row',
        height: 200,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
    },
    static: {
        width: '25%',
        justifyContent: 'space-evenly',

    },
    dynamic: {
        borderLeftWidth: 1,
        borderColor: 'grey',
        width: '75%',
        justifyContent: 'space-evenly'
    },
    unit: {
        marginLeft: 10,
        height: 50,
        fontSize: 15,
        color:'grey'
    },
    input: {
        color: 'grey',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderBottomColor: 'grey',
        marginRight: 10
    }

})
