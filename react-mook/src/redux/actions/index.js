import {ADD,DEL} from '../actionType'

export const add= ()=>{
    return{
        type:ADD,
        // data:newUser
    }
}
export const del= ()=>{
    return{
        type:DEL,
        // data:newUser
    }
}

export const addAsync= () => {
    return dispatch=>{
        setTimeout(() => {
            dispatch(add())
        }, 2000);
    }
}