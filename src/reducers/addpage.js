const addPageInitialState =  {
    postId: '',
    title: '',
    showTitle: false,
    username: 'Nameless',
    content: '',
    imgId: 'froalaImgEditor1',
    imgKey: '#',
    imgClass: 'fr-view fr-fil fr-dib',
    notes: '',

    preview: false,
    saveLoading: false,
    titleCheck: false,
    titleCheckUserMatch: false,
}

const addpage = ( state = addPageInitialState , action ) => {
    switch (action.type) {
        case 'RESTORE_STATE':
            return action.payload.addpage || state
        case 'UPDATE_ADD_PAGE_CACHE':
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}

export default addpage