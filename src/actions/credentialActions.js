export const deleteCredential = (id)=>{
    return{
        type : 'DELETE_CREDENTIAL',
        id
    }
};


export const addCredential = data => ({
  type: 'ADD_CREDENTIAL',
  
  ...data
})


export const updateCredential = data => ({
  type: 'UPDATE_CREDENTIAL',
  
  ...data
})