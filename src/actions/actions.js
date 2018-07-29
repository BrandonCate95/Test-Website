import { Auth } from 'aws-amplify'

export const restoreState = (payload) => ({
    type: 'RESTORE_STATE',
    payload,
})

export const userLogin = (payload) => {
    return (dispatch) => {
        dispatch(userLoginStart())
        Auth.signIn( payload.username, payload.password )
            .then( async (userData) => { 
                dispatch(userLoginSuccess({
                    identityId: (await Auth.currentUserInfo()).id,
                    username: userData.username,
                    emailVerified: userData.signInUserSession.idToken.payload.email_verified,
                }))
                }
            )
            .catch( error => { dispatch(userLoginFailure(error)) } )            
    }
}

export const userLoginStart = () => ({
    type: 'USER_LOGIN_START'
})

export const userLoginSuccess = (payload) => ({
    type: 'USER_LOGIN_SUCCESS',
    payload,
})

export const userLoginFailure = (error) => ({
    type: 'USER_LOGIN_FAILURE',
    error,
})

export const userLogout = () => {
    return async (dispatch) => {
        dispatch(userLogoutStart())
        Auth.signOut()
            .then((data) => dispatch(userLogoutSuccess(data))) 
            .catch(error => dispatch(userLogoutFailure(error)));
    }
}

export const userLogoutStart = () => ({
    type: 'USER_LOGOUT_START'
})

export const userLogoutSuccess = (payload) => ({
    type: 'USER_LOGOUT_SUCCESS',
    payload,
})

export const userLogoutFailure = (error) => ({
    type: 'USER_LOGOUT_FAILURE',
    error,
})

// used in code verify page
export const userEmailVerified = () => ({
    type: 'USER_EMAIL_VERIFIED',
})

export const updateAddPageCache = (payload) => ({
    type: 'UPDATE_ADD_PAGE_CACHE',
    payload, 
}) 