function getKeyWithoutPrefix(key) {
    const [, , keyWithoutPrefix] = /([^/]+\/){2}(.*)$/.exec(key) || key;
    return keyWithoutPrefix;
}

export default getKeyWithoutPrefix