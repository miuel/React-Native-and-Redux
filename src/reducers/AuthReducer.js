// import {EMAIL_CHANGED , PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false }
export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case 'email_changed':
        // la logica seria, retornar un nuevo objeto {} 
        // con todas las prop que tiene state {...state}
        // y luego define la prop email y asigna un nuevo valor que sera el que tenga el action.payload { ...state, email: action.payload}
        // sobre el nuevo state
            return { ...state, email: action.payload };
        case 'password_changed':
            return { ...state, password: action.payload };
        case 'login_user':
            return { ...state, loading: true, error: '',  }
        case 'login_user_success':
            // si login user success, reseteo los valores para limpiarlos de la pantall usando ES6 spread (...INITIAL_STATE)
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case 'login_user_fail':
            // si falla la autenticacion lanzo el mensaje y limpio el password de la pantalla
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        default:
            return state
    }
}