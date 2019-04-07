import axios from '../../apis/axios';
import history from '../../history'

export const checked = () => {

}

export const authStart = (user) => {
    return {
        type: 'AUTH_START',
        user,
    }
};

export const authSuccess = (token, checkbox) => {
    return {
        type: 'AUTH_SUCCESS',
        token,
        checkbox,
    }
};


export const authFail = (error) => {
    return {
        type: 'AUTH_FAIL',
        error: error
    }
};

export const auth = ( user ) => {
    return dispatch => {
        dispatch(authStart(user))
        axios.post('/users/login',{
            email: user.email,
            password: user.password
        })
        .then(res => {
            if(!res.data.length) {
                console.log(res.data)
                axios.post('/users/login',{ ...user })
                .then(res => {
                    console.log(res.data)
                    localStorage.setItem('token',res.data.accessToken);
                    dispatch(authSuccess(res.data.accessToken, user.checkbox));
                    history.push('/product')
                })
            }else{
                dispatch(authSuccess());
            }
        }).catch(e => {
            dispatch(authFail(e));
        });  
    }
};

