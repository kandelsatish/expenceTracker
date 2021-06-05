import createDataContext from './createDataContext'
import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'expense.db', createFromLocation: 1 });
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, actions) => {
    switch (actions.type) {
        case 'sign_in':
            return { error: '',username: actions.payload.username, password: actions.payload.password, token: actions.payload.username};
        case 'add_error':
            return { ...state, error: actions.payload };
        case 'sign_out':
            return { error: '', username: '', password: '', token:null};
        case 'update_local_token':
            return { ...state, token: actions.payload}
        default:
            return state;
    }
}

const updateLocalUser = (dispatch) => async () => {
    try {
        const token = AsyncStorage.getItem('user');
        if (!token==null) {
            dispatch({ type: 'update_local_token', payload: token });
        }
    } catch (error) {
        console.log(error.message);
    }
}

const signIn = (dispatch) => (username, password, callback) => {
    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT * FROM users",
            [],
            function (tx, res) {
                console.log(res.rows.length)
                if (res.rows.length > 0) {
                    var temp = [];
                    for (let i = 0; i < res.rows.length; ++i) {
                        temp.push(res.rows.item(i));
                    }
                    var user = temp.filter((item) => {
                        return item.username === username;
                    })
                    console.log(user);
                    if (user[0].password === password) {
                        alert("Signed in successfully");
                        (
                            async function (username) {
                                try {
                                    await AsyncStorage.setItem('user', username);
                                    alert("Signed in successfully");
                                    dispatch({ type: 'sign_in', payload: { username, password } });
                                } catch (error) {
                                    console.log(err.message);
                                }
                            }(user[0].username)
                        );
                    }
                    else {
                        // alert("invalid username or password");
                        dispatch({ type: 'add_error', payload: "Something went wrong." });
                    }
                }
            },
        );
    });
    if (callback) {
        callback();
    }
}

const signUp = (dispatch) => (username, password, callback) => {
    db.transaction(function (txn) {
        txn.executeSql(
            "INSERT INTO users(username,password) VALUES(?,?)",
            [username, password],
            function (tx, res) {
                console.log("rows affected", res.rowsAffected);
                if (res.rowsAffected > 0) {
                    alert("User Signed Up Successfully");
                };
            }
        );
    });
    if (callback) {
        callback();
    }
}

const signOut = (dispatch) => async (callback) => {
    try {
        await AsyncStorage.removeItem('user');
        dispatch({ type: 'sign_out' })
    } catch (error) {
        console.log(error.message);
    }
    if (callback) {
        callback();
    }
}




export const { Context, Provider } = createDataContext(
    authReducer,
    { signIn, signOut, signUp, updateLocalUser },
    { username: '', password: '' }
)