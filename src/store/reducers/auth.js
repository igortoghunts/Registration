const initialstate = {
    user: null,
    checked: false,
    token: null,
    error: null,
    loading: false,
}


export const auth = (state = initialstate, action) => {
    switch(action.type){
        case 'AUTH_START': return { ...state, user: action.user, loading: true }
        case 'AUTH_SUCCESS': return { ...state, token: action.token, error: false, loading: false, checked: action.checkbox }
        case 'AUTH_FAIL': return { ...state, error: action.error, loading: false}
        default: return state;
    }
}



