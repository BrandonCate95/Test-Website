import {Auth} from 'aws-amplify'
import uuidv4 from 'uuid/v4'
import getAllIndicesOfSubstring from './getAllIndicesOfSubstring'
import getS3ImageKeyFromURL from './getS3ImageKeyFromURL'

function formatPostObjPromise(data){
    return new Promise( async (resolve, reject) => {
        const uploadObj = {}
        uploadObj.postId = data.postId || uuidv4()
    
        var imgStarts = getAllIndicesOfSubstring('<img', data.content, true)
    
        var imgEnds = []
        imgStarts.forEach((startIndice) => {
            imgEnds.push(data.content.indexOf('>', startIndice) + 1)
        })
    
        const identityId = (await Auth.currentUserInfo()).id
        
        var imgTagArr = []
        var s3TagArr = []
        var imgKeys = []
        for(let i = 0; i < imgStarts.length; i++){
            var img = data.content.substring(imgStarts[i],imgEnds[i])
            var tmpStr = img
            var start_pos = tmpStr.indexOf('src="') + 5
            var end_pos = tmpStr.indexOf('"',start_pos)
            var text_to_get = tmpStr.substring(start_pos,end_pos)
            var currentKey = getS3ImageKeyFromURL(text_to_get)
            var newKey = `imgs/${data.postId}/${currentKey}`

            imgKeys.push(currentKey)
    
            tmpStr = tmpStr.replace('<img', '<S3Image')
                .replace('src="', `level="protected" identityId="${identityId}" imgKey="`)
                .replace(text_to_get, newKey)
                .replace('>',' />')
            imgTagArr.push(img)
            s3TagArr.push(tmpStr)
        }
    
        for(let i = 0; i < imgTagArr.length; i++){
            data.content = data.content.replace(imgTagArr[i], s3TagArr[i])
        }

        uploadObj.imgKey = `imgs/${data.postId}/${data.imgKey}`
        uploadObj.imgClass = data.imgClass
        uploadObj.content = data.content
        uploadObj.title = data.title

        resolve({imgKeys, uploadObj})
    })
}

export default formatPostObjPromise