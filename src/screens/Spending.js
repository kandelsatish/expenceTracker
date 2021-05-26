import React,{useContext} from 'react'
import {FlatList,Text, View,StyleSheet} from 'react-native'
import Card from '../components/Card'
import Summery from '../components/Summery';
import {Context} from '../context/expenseContext'
export default function Spending() {
    const {state}=useContext(Context);
    return (
        <>
            <Summery/>
            {state.length? null: (
                <Text style={style.message}>Nothing to show! Add income or Expences</Text>
            )}
            <FlatList 
            data={state}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={(item)=>(
                <Card height={100}/>
            )}
            />
        </>
    )
}

const style=StyleSheet.create({
    message:{
        alignSelf:'center',
        marginTop:30
    },
    
})

