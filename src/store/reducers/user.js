const initialstate = {
    user: null,
    checkbox: false
}

export const user = (state = initialstate, actoin) => {
    switch(actoin.type){
        case 'USER_LOGED': return { user: actoin.payload }
        default: return state;
    }
}