function getS3ImageKeyFromURL(url){
    const tmp = url.split('?')[0].split('/')
    return tmp[tmp.length - 1]
}

export default getS3ImageKeyFromURL