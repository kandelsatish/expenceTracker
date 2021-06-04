import createDataContext from './createDataContext'
const initialStates = [
    { id: 1, icon: 'food-fork-drink', name: 'Eating Out', index: 0 },
    { id: 2, icon: 'tshirt-crew', name: 'Clothes', index: 0 },
    { id: 3, icon: 'gamepad-variant-outline', name: 'Entertainment', index: 0 },
    { id: 4, icon: 'fuel', name: 'Fuel', index: 0 },
    { id: 5, icon: 'gift', name: 'Gifts', index: 0 },
    { id: 6, icon: 'briefcase', name: 'Holidays', index: 0 },
    { id: 7, icon: 'human-male-child', name: 'Kids', index: 0 },
    { id: 8, icon: 'cart', name: 'Shopping', index: 0 },
    { id: 9, icon: 'football', name: 'Sports', index: 0 },
    { id: 10, icon: 'bus-articulated-front', name: 'Travel', index: 0 },
    { id: 11, icon: 'currency-usd-circle', name: 'Salary', index: 1 },
    { id: 12, icon: 'bitcoin', name: 'Stocks', index: 1 },
    { id: 12, icon: 'arrow-left-thick', name: 'Others', index: 1 },
    { id: 12, icon: 'arrow-right-bold', name: 'Others', index: 0 },
]

const categoryReducer = (state, actions) => {
    switch (actions.type) {
        case 'delete_category':
            return state.filter(item => {
                return item.id != actions.payload;
            })
        default:
            return state;
    }
}
const deleteCategory = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_category', payload: id });
    }
}
export const { Context, Provider } = createDataContext(
    categoryReducer,
    { deleteCategory },
    initialStates
)