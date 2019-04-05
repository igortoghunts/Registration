export const checkbox  = checked =>  dispatch => {
    dispatch({
        type: 'REMEMBER_ME',
        payload: checked
    })
} 

