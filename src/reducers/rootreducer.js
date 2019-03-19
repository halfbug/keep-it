import data from "../db.json"
// import cryptoJSON  from 'crypto-json';
//import {encrptr } from "../operations/crypto"


const initState = {
    credentials : data,
    credential: "",
}




const rootReducer = (state =initState , action) => {
    console.log(action);

    let {
        id,domain,username,password,detail
      } = action;

    switch (action.type) {
      case 'UPDATE_CREDENTIAL':
      
      const toupdate = state.credentials.map(credential => {
        if(credential.id === action.id)
        {
            credential={
        id,domain,username,password,detail
      }}

      return credential;
        });
        return {
          ...state,
          credentials: toupdate
        }

      case 'ADD_CREDENTIAL':
      
      //console.log([...state.credentials,{id,url,username,password,detail}])
        return {
          ...state,
          credentials: [...state.credentials,{id,domain,username,password,detail}]
        }
      case 'DELETE_CREDENTIAL':
      let newCredential = state.credentials.filter(credential => {
        return credential.id !== action.id
      });
     
      return {
        ...state,
        credentials: newCredential
      }
      default:
        return state
    }


    
}

export default rootReducer;