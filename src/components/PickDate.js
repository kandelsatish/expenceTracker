import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function PickDate({ selectedDate, onDateChange, isDatePickerVisible, onVisiblityChange }) {

  var fullTime = new Date(selectedDate).toISOString();
  fullTime = fullTime.split('T')[0];

  const showDatePicker = () => {
    onVisiblityChange(true);
  };

  const hideDatePicker = () => {
    onVisiblityChange(false);
  };

  const handleConfirm = (date) => {
    var time = date.getTime();
    // var fullTime = new Date(time).toISOString();
    // var date = fullTime.split('T')[0];
    onDateChange(time);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker} style={styles.date}>
        <Text style={styles.text}>{fullTime}</Text>
        <MaterialCommunityIcons name="chevron-down" size={25} color={'grey'} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 50,
    margin: 5
  },
  text: {
    fontSize: 15,
    color: 'grey'
  }
})


