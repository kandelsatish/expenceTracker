import React from 'react'
import { View, StyleSheet } from 'react-native'
import SegmentedControlTab from "react-native-segmented-control-tab";
export default function Segment({ index, onTabChange }) {
    return (
        <View style={styles.container}>
            <SegmentedControlTab
                values={["Expense", "Income"]}
                selectedIndex={index}
                onTabPress={(val) => onTabChange(val)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginHorizontal:50,
        marginBottom:40
    }
})
