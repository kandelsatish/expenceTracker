import createDataContext from './createDataContext'

const expendeReducer = (state, actions) => {
    switch (actions.type) {
        case 'add_expense':
            return [...state,{id:Math.floor(Math.random(0,9)*99999),selectedDate:actions.payload.selectedDate,
            selectedCategory:actions.payload.selectedCategory,amount:actions.payload.amount,index:actions.payload.index}];
        case 'delete_expense':
            return state.filter((item)=>{
                return item.id!=actions.payload;
            })
        default:
            return state;
    }
}

initialStates = [];

const addExpense = (dispatch) => {
    return (selectedDate,selectedCategory,amount,index) => {
        dispatch({ type: 'add_expense', payload:{selectedDate,selectedCategory,amount,index}});
    }
}

const deleteExpense=(dispatch)=>{
    return (id)=>{
        dispatch({type:'delete_expense',payload:id});
    }
}

export const { Context, Provider } = createDataContext(
    expendeReducer,
    {addExpense,deleteExpense},
    initialStates
);