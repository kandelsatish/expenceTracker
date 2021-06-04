import createDataContext from './createDataContext'
const authReducer = (state, actions) => {
    switch (actions.type) {
        case 'sign_in':
            return { ...state, username: actions.payload.username, password: actions.payload.password };
        case 'sign_up':
            return { error: '', username: actions.payload.username, password: actions.payload.password };
        case 'add_error':
            return { ...state, error: actions.payload.error };
        case 'sign_out':
            return { error: '', username: '', password: ''}
        default:
            return state;
    }
}

const signIn = (dispatch) => (username, password, callback) => {
    dispatch({ type: 'sign_in', payload: { username, password } })
    if (callback) {
        callback();
    }
}

const signUp = (dispatch) => (username, password, callback) => {
    dispatch({ type: 'sign_up', payload: { username, password } })
    if (callback) {
        callback();
    }

}

const signOut = (dispatch) => (callback) => {
    dispatch({ type: 'sign_out' })
    if (callback) {
        callback();
    }

}




export const { Context, Provider } = createDataContext(
    authReducer,
    { signIn, signOut, signUp },
    { username: '', password: '' }
)