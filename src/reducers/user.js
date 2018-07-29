const userInitialState =  {
    identityId: '',
    username: '',
    isLoading: false,
    isLoggedIn: false,
    emailVerified: false,
    error: '',
}

const user = ( state = userInitialState , action ) => {
    switch (action.type) {
        case 'RESTORE_STATE':
            return action.payload.user
        case 'USER_LOGIN_START':
            return Object.assign({}, state, {
                isLoading: true,
            })
        case 'USER_LOGIN_SUCCESS':
            return Object.assign({}, state, {
                identityId: action.payload.identityId,
                username: action.payload.username,
                emailVerified: action.payload.emailVerified,
                isLoggedIn: true,
                isLoading: false,
                error: '',
            })
        case 'USER_LOGIN_FAILURE':
            return Object.assign({}, state, {
                identityId: '',
                username: '',
                isLoggedIn: false,
                isLoading: false,
                error: action.error,
            })
        case 'USER_LOGOUT_START':
            return Object.assign({}, state, {
                isLoading: true,
                isLoggedIn: false, //this is optimistic response
                username: '',
                identityId: '',
            })            
        case 'USER_LOGOUT_SUCCESS':
            return Object.assign({}, state, {
                isLoggedIn: false,
                isLoading: false
            })
        case 'USER_LOGOUT_FAILURE':
            return Object.assign({}, state, {
                isLoggedIn: false,
                isLoading: false,
                error: action.error,
            })
        case 'USER_EMAIL_VERIFIED':
            return Object.assign({}, state, {
                emailVerified: true,
            })
        default:
            return state
    }
}

export default user