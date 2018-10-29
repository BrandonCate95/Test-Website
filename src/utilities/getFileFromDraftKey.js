import {Storage} from 'aws-amplify'

const getFileFromDraftKey = async (key) => {
    var selectedFile = await Storage.get(`imgs/${key}`, { level: 'protected' })
        .then(result => fetch(result))
        .then(async (res) => { 
            return await res.blob()
        })
        .catch(error => console.log(error))
    return selectedFile
}

export default getFileFromDraftKey