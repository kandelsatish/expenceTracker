import createDataContext from './createDataContext'

const expendeReducer = (state, actions) => {
    switch (actions.type) {
        default:
            return state;
    }
}

// const initialStates=[
//     {id:1,expenceCat:1,cat:'Food',Amount:100},
//     {id:2,expenceCat:1,cat:'Food',Amount:100},
//     {id:3,expenceCat:1,cat:'Food',Amount:100},
//     {id:4,expenceCat:1,cat:'Food',Amount:100},
//     {id:5,expenceCat:1,cat:'Food',Amount:100},
//     {id:6,expenceCat:1,cat:'Food',Amount:100},
// ]

initialStates=[];

const addExpense = (dispatch) => {
    return ({name,amount,category}) => {
       
    }
}

export const { Context, Provider } = createDataContext(
    expendeReducer,
    { addExpense },
    initialStates
);