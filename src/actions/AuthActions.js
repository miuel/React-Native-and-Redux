//import EMAIL_CHANGED from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text
  };
};

export const passwordChanged = (text) =>
 {
     return {
         type: 'password_changed',
         payload: text
     }
 }

 // actions async otra manera de trabajar con actions a traves de un middleware (redux-thunk)
 // para poder hacer en este caso llamadas a una api o firrebase para autenticar usuario
 export const loginUser = ({ email, password }) => {
   return (dispatch) => {
   dispatch({ type: 'login_user' }); // created to start spinner 🔄
   firebase.auth().signInWithEmailAndPassword(email, password )
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
      console.log(error)
      firebase.auth().createUserWithEmailAndPassword(email, password )
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    })
  };
 };

 const loginUserFail = (dispatch) => {
   dispatch({ type: 'login_user_fail' })
 }

 const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: 'login_user_success', payload: user })

    // con el Actions tengo acceso al Router.js e invoco segun la Secene con key=employeeList
    Actions.employeeList()
 }