import React, { useState, useContext } from 'react'
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import From from './From'
import Segment from '../components/Segment';
import Entypo from 'react-native-vector-icons/Entypo'
import { Context } from '../context/expenseContext'
export default function AddModal({ modalVisible, onModelStateChange }) {
  var time = new Date().getTime();
  const { addExpense } = useContext(Context);
  const [amount, setAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState(time);
  const [selectedCategory, setSelectedCategory] = useState('Not Selected');
  const [indx, setIndx] = useState(0);


  const handelSave = () => {
    if (!amount == 0 && selectedCategory !== "Not Selected") {
      addExpense(selectedDate, selectedCategory, amount,indx);
      onModelStateChange();
      setSelectedCategory('Not Selected');
      setAmount('');
    }
    else {
      alert('Missing Entry');
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
    >
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onModelStateChange()}>
            <Entypo name="circle-with-cross" size={30} color={'#ba6325'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handelSave()}>
            <Text style={styles.text}>Done</Text>
          </TouchableOpacity>
        </View>
        
        <Segment indx={indx}
          onTabChange={(newIndx) => setIndx(newIndx)}
        />

        <From amount={amount} onAmountChange={(newAmount) => setAmount(newAmount)}
          selectedDate={selectedDate} onDateChange={(newDate) => setSelectedDate(newDate)}
          selectedCategory={selectedCategory} setSelectedCategory={(newCategory) => setSelectedCategory(newCategory)}
          indx={indx}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#ffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 2,
    position: 'relative',
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    color: '#ba6325'
  }
})



