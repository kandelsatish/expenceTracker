import React, { useState } from 'react'
import { Modal, View} from 'react-native'
import From from './From'
import Header from './Header'
export default function AddModal({ modalVisible, onModelStateChange }) {
  const [amount, setAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
    >
      <View>
        <Header modalVisible={modalVisible} onModelStateChange={onModelStateChange} />
        
        <From amount={amount} onAmountChange={(newAmount) => setAmount(newAmount)}
          selectedDate={selectedDate} onDateChange={(newDate) => setSelectedDate(newDate)}
          isDatePickerVisible={isDatePickerVisible} onVisiblityChange={(status) => setDatePickerVisibility(status)}
       />

      </View>
    </Modal>
  )
}



