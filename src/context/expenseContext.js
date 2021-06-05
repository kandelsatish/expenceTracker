import createDataContext from './createDataContext'
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'expense.db', createFromLocation: 1 });

const randomNumberGenerator = () => Math.floor(Math.random(0, 1) * 99999999);


const expenseReducer = (state, actions) => {
    switch (actions.type) {
        case 'update_expenses':
            return actions.payload;

        case 'add_expenses':
            return [...state,actions.payload];

        case 'delete_expense':
            return state.filter((item) => {
                return item.id != actions.payload;
            })
        default:
            return state;
    }
}

const updateExpences = (dispatch) => () => {
    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT * FROM Expenses",
            [],
            function (tx, res) {
                if (res.rows.length > 0) {
                    var temp = [];
                    for (let i = 0; i < res.rows.length; ++i)
                        temp.push(res.rows.item(i));
                }
                dispatch({ type: 'update_expenses', payload: temp });
            },
        );
    });
}


const addExpense = (dispatch) => (date, category, amount,indx) => {
    const id = randomNumberGenerator();
    db.transaction(function (txn) {
        txn.executeSql(
            "INSERT INTO Expenses(amount,category,date,id,indx) VALUES (?,?,?,?,?)",
            [amount,category, date, id, indx],
            function (tx, res) {
                if (res.rowsAffected > 0) {
                    dispatch({ type: 'add_expenses', payload:{amount, category, date, id,indx} });
                };
            }
        );
    });
}

const deleteExpense = (dispatch) => (id) => {
    console.log(id);
    db.transaction(function (txn) {
        txn.executeSql(
            "DELETE FROM Expenses WHERE id=?",
            [id],
            function (tx, res) {
                if (res.rowsAffected > 0) {
                    alert("Item Deleted Successfully.")
                }
                dispatch({ type: 'delete_expense', payload: id });
            },
        );
    });
}

export const { Context, Provider } = createDataContext(
    expenseReducer,
    { addExpense, deleteExpense, updateExpences },
    []
);