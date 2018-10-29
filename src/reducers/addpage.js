const addPageInitialState =  {
    postId: '',
    title: '',
    showTitle: false,
    username: 'anon',
    content: '',
    imgId: 'froalaImgEditor1',
    imgKey: '#',
    imgClass: 'fr-view fr-fil fr-dib',
    notes: '',

    preview: false,
    saveLoading: false,
    titleCheck: false,
    titleCheckUserMatch: false,

    s3Hash: {},
}

const addpage = ( state = addPageInitialState , action ) => {
    switch (action.type) {
        case 'RESTORE_STATE':
            return Object.assign({}, state, action.payload.addpage)
        case 'UPDATE_ADD_PAGE_CACHE':
            return Object.assign({}, state, action.payload)
        case 'SET_S3_HASH':
            return Object.assign({}, state, {
                s3Hash: action.s3Hash
            })
        default:
            return state
    }
}

export default addpage