import cryptoJSON  from 'crypto-json';

const keys = ['credentials','password','domain', 'username']
    const algorithm = 'aes256'
    const encoding = 'hex'
    const password = 'some random password'

const encrptr = (data) => {
    return cryptoJSON.encrypt(
        data, password, {encoding, keys, algorithm})
}



const decrptr = (data) => {
    return cryptoJSON.decrypt(
        data, password, {encoding, keys, algorithm})
}

 const crypto =(data)=>  {
    
     
    
}

export  {
    encrptr,
    decrptr
}




export default crypto ;