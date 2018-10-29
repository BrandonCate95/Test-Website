import * as React from 'react'
import { Component } from 'react'

import Storage from '@aws-amplify/storage/lib'
import { calcKey } from 'aws-amplify-react/dist/Storage/Common'

export default class S3Image extends Component {
    constructor(props) {
        super(props)

        this.handleOnLoad = this.handleOnLoad.bind(this);
        this.handleOnError = this.handleOnError.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleClick = this.handleClick.bind(this);

        const initSrc = this.props.src || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

        this.state = { src: initSrc };
    }

    getImageSource(key, level, identityId, track) {
        if (!Storage || typeof Storage.get !== 'function') {
            throw new Error('No Storage module found, please ensure @aws-amplify/storage is imported');
        }
        Storage.get(key, { level: level? level : 'public', identityId: identityId, track })
            .then(url => {
                this.setState({
                    src: url
                });
            })
            .catch(err => console.log(err));
    }

    load() {
        const { imgKey, path, body, contentType, level, identityId, track } = this.props;
        if (!imgKey && !path) {
            console.log('empty imgKey and path');
            return ;
        }

        const that = this;
        const key = imgKey || path;
        if (body) {
            const type = contentType || 'binary/octet-stream';
            if (!Storage || typeof Storage.put !== 'function') {
                throw new Error('No Storage module found, please ensure @aws-amplify/storage is imported');
            }
            const ret = Storage.put(key, body, {
                contentType: type,
                level: level? level : 'public',
                track
            });
            ret.then(() => {
                that.getImageSource(key, level, identityId, track);
            })
            .catch(err => console.log(err));
        } else {
            that.getImageSource(key, level, identityId, track);
        }
    }

    handleOnLoad(evt) {
        const { onLoad } = this.props;
        if (onLoad) { onLoad(this.state.src); }
    }

    handleOnError(evt) {
        const { onError } = this.props;
        if (onError) { onError(this.state.src); }
    }

    handlePick(data) {
        const that = this;

        const path = this.props.path || '';
        const { imgKey, level, fileToKey, track } = this.props;
        const { file, name, size, type } = data;
        const key = imgKey || (path + calcKey(data, fileToKey));
        if (!Storage || typeof Storage.put !== 'function') {
            throw new Error('No Storage module found, please ensure @aws-amplify/storage is imported');
        }
        Storage.put(key, file, { 
            level: level? level: 'public',
            contentType: type, 
            track 
        })
            .then(() => {
                that.getImageSource(key, level, identityId, track);
            })
            .catch(err => console.log('handle pick error', err));
    }

    handleClick(evt) {
        const { onClick } = this.props;
        if (onClick) { onClick(evt); }
    }

    componentDidMount() {
        this.load();
    }

    componentDidUpdate(prevProps) {
        const update = prevProps.path !== this.props.path ||
                        prevProps.imgKey !== this.props.imgKey ||
                        prevProps.body !== this.props.body;
        if (update) {
            this.load();
        }
    }

    imageEl(src, style, className) {
        if (!src) { return null; }

        const { selected } = this.props;
        const containerStyle = { position: 'relative' };
        return (
            <div style={containerStyle} onClick={this.handleClick}>
                <img
                    style={style}
                    className={className}
                    src={src}
                    onLoad={this.handleOnLoad}
                    onError={this.handleOnError}
                />
            </div>
        )
    }

    render() {
        const { hidden, style, picker, translate, imgKey, className } = this.props;
        let src = this.state.src;
        if (translate) {
            src = (typeof translate === 'string')? translate : translate({
                type: 'image',
                key: imgKey,
                content: src
            });
        }
        if (!src && !picker) { return null; }

        return (
            <div style={style}>
                {this.imageEl(src, style, className)}
            </div>
        )
    }
}