import createDataContext from './createDataContext'
import {} from 'react-native-vector-icons/MaterialCommunityIcons'
const initialStates=[
    {id:1,icon:'food-fork-drink',name:'Eating Out',category:0},
    {id:2,icon:'tshirt-crew',name:'Clothes',category:0},
    {id:3,icon:'gamepad-variant-outline',name:'Entertainment',category:0},
    {id:4,icon:'fuel',name:'Fuel',category:0},
    {id:5,icon:'gift',name:'Gifts',category:0},
    {id:6,icon:'briefcase',name:'Holidays',category:0},
    {id:7,icon:'human-male-child',name:'Kids',category:0},
    {id:8,icon:'cart',name:'Shopping',category:0},
    {id:9,icon:'football',name:'Sports',category:0},
    {id:10,icon:'bus-articulated-front',name:'Travel',category:0},

]

const categoryReducer=(state,actions)=>{
    switch(actions.type){
        default:
            return state;
    }
}
const addCategory=(dispatch)=>{
    return ()=>{

    }
}
export const {Context,Provider}=createDataContext(
    categoryReducer,
    {addCategory},
    initialStates
)