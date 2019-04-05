import axios from '../../apis/axios';


export const auth = ( user ) => {
    return dispatch => {
        axios.get(`users?email=${user.email}`)
        .then(data => {
            if(!data.data.length) {
                axios.post('/users',{ ...user })
                .then(data => {
                    localStorage.setItem('token',data.data.accessToken)
                })
            }else{
                dispatch({type: 'USER_LOGED', payload: user})
            }
        }).catch(e => {
            console.log(e);
        });  
    }
};

