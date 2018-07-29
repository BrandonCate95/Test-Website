import uuidv4 from 'uuid/v4'

function formatPostData(data){

    if(data.imgKey){
        const src = data.imgKey.split('?')[0].split('/')
        var imgKey = src[src.length - 1]
    }

    if(data.imgClass){
        var newClass = data.imgClass.replace('fr-view','').replace('fr-fil', '').replace('fr-dib','').replace('fr-error','').trim()
    }

    return {

        ...({postId: data.postId || uuidv4()}),
        ...(data.imgKey && {imgKey: imgKey}),
        ...(data.imgClass && newClass && {imgClass: newClass}),
        ...(data.title && {title: data.title}),
        ...(data.content && {content: data.content}),

    }

}

export default formatPostData