const initailState = {
    user : ''
}
export const reducer = (state=initailState,action) => {

    if(action.type=='Login'){
        return {
            ...state, 
            user : action.payload
        }
        
    }
    if(action.type=='Logout'){
        return {
            ...state, 
            user : ""
        }
        
    }
    return state
}