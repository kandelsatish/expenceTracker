import React from 'react'
import { View, StyleSheet } from 'react-native'
import SegmentedControlTab from "react-native-segmented-control-tab";
export default function Segment({ indx, onTabChange }) {
    return (
        <View style={styles.container}>
            <SegmentedControlTab
                values={["Expense", "Income"]}
                selectedIndex={indx}
                onTabPress={(val) => onTabChange(val)}
                activeTabStyle={{
                    backgroundColor: '#ba6325',
                    borderBottomWidth: 4,
                    borderColor: '#ba6325',
                }}
                tabStyle={{
                    borderColor:'#ba6325'
                }}
                tabTextStyle={{
                    color:'#ba6325'
                }}
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
