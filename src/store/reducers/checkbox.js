const initialState = {
    user: null,
    checked: false
}

export const checkbox = ( state = initialState, action ) => {
    switch(action.type){
        case 'REMEMBER_ME': return  { ...state, checked: action.payload } 
        default: return state;
    }
}

