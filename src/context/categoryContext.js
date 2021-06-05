import createDataContext from './createDataContext'
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'expense.db', createFromLocation: 1 });

const categoryReducer = (state, actions) => {
    switch (actions.type) {
        case 'update_category':
            return actions.payload;
        case 'delete_category':
            return state.filter(item => {
                return item.id != actions.payload;
            });
        default:
            return state;
    }
}

const updateCategory = (dispatch) => () => {
    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT * FROM Category",
            [],
            function (tx, res) {
                if (res.rows.length > 0) {
                    var temp = [];
                    for (let i = 0; i < res.rows.length; ++i)
                        temp.push(res.rows.item(i));
                }
                dispatch({ type: 'update_category', payload: temp });
            },
        );
    });
}

const deleteCategory = (dispatch) => {
    return (id) => {
        db.transaction(function (txn) {
            txn.executeSql(
                "DELETE FROM Category WHERE id=?",
                [id],
                function (tx, res) {
                    console.log(res.rowsAffected)
                    if (res.rowsAffected > 0) {
                        alert("Item Deleted Successfully.")
                    }
                    dispatch({ type: 'delete_category', payload: id });
                },
            );
        });
    }
}

export const { Context, Provider } = createDataContext(
    categoryReducer,
    { deleteCategory, updateCategory },
    []
)