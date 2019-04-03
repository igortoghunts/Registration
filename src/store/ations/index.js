import axios from 'axios';

export const checkUser = (user) => {
    axios.get(`http://localhost:3001/users?email=${user.email}`)
    .then(data => {
        if(!data.data.length) {
            axios.post(`http://localhost:3001/users`,{ ...user })
        }
    })
    .catch(e => console.log(e));

    return dispatch => {
        dispatch({
            type: 'CHECK_USER',
            payload: user 
        })
    }

    
}

