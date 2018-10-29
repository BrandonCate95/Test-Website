
export const restoreState = (payload) => ({
    type: 'RESTORE_STATE',
    payload,
})

export const generateS3Hash = () => {
    return async (dispatch, getState) => {
        const hash = getState().addpage.s3Hash
        if (Object.keys(hash).length > 0 && hash.params && hash.params['x-amz-date'] && hash.params['x-amz-date'] === new Date().toISOString().replace(/-/g,'').split('T')[0]){
            // current hash works
            console.log('current hash works')
            return true
        }
        else {
            // fetch hash
            console.log('fetching new hash')
            const { default: Auth } = await import(/* webpackChunkName: "auth" */ '@aws-amplify/auth/lib')
            const res = await fetch("/api/get_signature", {
                method: 'POST',
                body: JSON.stringify({
                    IdentityId: (await Auth.currentCredentials()).params.IdentityId,
                }),
                headers: {"Content-Type": "application/json"}
            })
            dispatch(setS3Hash(await res.json()))
            return true
        }
    }
}

const setS3Hash = (s3Hash) => ({
    type: 'SET_S3_HASH',
    s3Hash
})

export const userLogin = (payload) => {
    return async (dispatch) => {
        dispatch(userLoginStart())
        const { default: Auth } = await import(/* webpackChunkName: "auth" */ '@aws-amplify/auth/lib')
        Auth.signIn( payload.username, payload.password )
            .then( async (userData) => { 
                dispatch(userLoginSuccess({
                    identityId: (await Auth.currentCredentials()).data.IdentityId,
                    username: userData.username,
                    emailVerified: userData.signInUserSession.idToken.payload.email_verified,
                }))

                fetch("/api/set_user", {
                    method: 'POST',
                    body: JSON.stringify({
                        user: {
                            authenticated: true,
                            username: userData.username,
                            emailVerified: userData.signInUserSession.idToken.payload.email_verified
                        }                        
                    }),
                    headers: {"Content-Type": "application/json"}
                })
            })
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
        const { default: Auth } = await import(/* webpackChunkName: "auth" */ '@aws-amplify/auth/lib')
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