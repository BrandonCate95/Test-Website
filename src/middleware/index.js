export const localStorageLoad = store => next => action => {
    switch (action.type){
        case 'CLIENT_INIT':
            let result = next(action)
            try {
                const storedState = JSON.parse(
                    localStorage.getItem('REACT_ROUTER')
                )         
                if (storedState) {
                    store.dispatch({
                        type: 'RESTORE_STATE',
                        payload: storedState
                    })
                    fetch("/api/set_user", {
                        method: 'POST',
                        body: JSON.stringify({
                            user: storedState.user                      
                        }),
                        headers: {"Content-Type": "application/json"}
                    })
                }
                return;
            } catch (e) {
                // Unable to load or parse stored state, proceed as usual
            }
            return result
        default:
            return next(action)
    }
}

export const localStorageDump = store => next => action => {
    let result = next(action)
    const state = store.getState()
    localStorage.setItem('REACT_ROUTER', JSON.stringify(state))
    return result
}