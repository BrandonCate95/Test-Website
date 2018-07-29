import { Auth } from 'aws-amplify'
import awsmobile from '../aws-exports'

async function formatFileToPostImg(selectedFile, postId, id){
    const { type: mimeType } = selectedFile
    const { identityId } = await Auth.currentCredentials()
    const visibility = 'protected'
    const bucket = awsmobile.aws_user_files_s3_bucket
    const region = awsmobile.aws_user_files_s3_bucket_region
    const key = `${visibility}/${identityId}/imgs/${postId}/${id}`

    const file = {
      bucket,
      key,
      region,
      mimeType,
      localUri: selectedFile,
    }

    return file
}

export default formatFileToPostImg