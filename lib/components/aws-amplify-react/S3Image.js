'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _lib = require('@aws-amplify/storage/lib');

var _lib2 = _interopRequireDefault(_lib);

var _Common = require('aws-amplify-react/dist/Storage/Common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var S3Image = function (_Component) {
    _inherits(S3Image, _Component);

    function S3Image(props) {
        _classCallCheck(this, S3Image);

        var _this = _possibleConstructorReturn(this, (S3Image.__proto__ || Object.getPrototypeOf(S3Image)).call(this, props));

        _this.handleOnLoad = _this.handleOnLoad.bind(_this);
        _this.handleOnError = _this.handleOnError.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);

        var initSrc = _this.props.src || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

        _this.state = { src: initSrc };
        return _this;
    }

    _createClass(S3Image, [{
        key: 'getImageSource',
        value: function getImageSource(key, level, identityId, track) {
            var _this2 = this;

            if (!_lib2.default || typeof _lib2.default.get !== 'function') {
                throw new Error('No Storage module found, please ensure @aws-amplify/storage is imported');
            }
            _lib2.default.get(key, { level: level ? level : 'public', identityId: identityId, track: track }).then(function (url) {
                _this2.setState({
                    src: url
                });
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'load',
        value: function load() {
            var _props = this.props,
                imgKey = _props.imgKey,
                path = _props.path,
                body = _props.body,
                contentType = _props.contentType,
                level = _props.level,
                identityId = _props.identityId,
                track = _props.track;

            if (!imgKey && !path) {
                console.log('empty imgKey and path');
                return;
            }

            var that = this;
            var key = imgKey || path;
            if (body) {
                var type = contentType || 'binary/octet-stream';
                if (!_lib2.default || typeof _lib2.default.put !== 'function') {
                    throw new Error('No Storage module found, please ensure @aws-amplify/storage is imported');
                }
                var ret = _lib2.default.put(key, body, {
                    contentType: type,
                    level: level ? level : 'public',
                    track: track
                });
                ret.then(function () {
                    that.getImageSource(key, level, identityId, track);
                }).catch(function (err) {
                    return console.log(err);
                });
            } else {
                that.getImageSource(key, level, identityId, track);
            }
        }
    }, {
        key: 'handleOnLoad',
        value: function handleOnLoad(evt) {
            var onLoad = this.props.onLoad;

            if (onLoad) {
                onLoad(this.state.src);
            }
        }
    }, {
        key: 'handleOnError',
        value: function handleOnError(evt) {
            var onError = this.props.onError;

            if (onError) {
                onError(this.state.src);
            }
        }
    }, {
        key: 'handlePick',
        value: function handlePick(data) {
            var that = this;

            var path = this.props.path || '';
            var _props2 = this.props,
                imgKey = _props2.imgKey,
                level = _props2.level,
                fileToKey = _props2.fileToKey,
                track = _props2.track;
            var file = data.file,
                name = data.name,
                size = data.size,
                type = data.type;

            var key = imgKey || path + (0, _Common.calcKey)(data, fileToKey);
            if (!_lib2.default || typeof _lib2.default.put !== 'function') {
                throw new Error('No Storage module found, please ensure @aws-amplify/storage is imported');
            }
            _lib2.default.put(key, file, {
                level: level ? level : 'public',
                contentType: type,
                track: track
            }).then(function () {
                that.getImageSource(key, level, identityId, track);
            }).catch(function (err) {
                return console.log('handle pick error', err);
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(evt) {
            var onClick = this.props.onClick;

            if (onClick) {
                onClick(evt);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.load();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var update = prevProps.path !== this.props.path || prevProps.imgKey !== this.props.imgKey || prevProps.body !== this.props.body;
            if (update) {
                this.load();
            }
        }
    }, {
        key: 'imageEl',
        value: function imageEl(src, style, className) {
            if (!src) {
                return null;
            }

            var selected = this.props.selected;

            var containerStyle = { position: 'relative' };
            return React.createElement(
                'div',
                { style: containerStyle, onClick: this.handleClick },
                React.createElement('img', {
                    style: style,
                    className: className,
                    src: src,
                    onLoad: this.handleOnLoad,
                    onError: this.handleOnError
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                hidden = _props3.hidden,
                style = _props3.style,
                picker = _props3.picker,
                translate = _props3.translate,
                imgKey = _props3.imgKey,
                className = _props3.className;

            var src = this.state.src;
            if (translate) {
                src = typeof translate === 'string' ? translate : translate({
                    type: 'image',
                    key: imgKey,
                    content: src
                });
            }
            if (!src && !picker) {
                return null;
            }

            return React.createElement(
                'div',
                { style: style },
                this.imageEl(src, style, className)
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return S3Image;
}(_react.Component);

var _default = S3Image;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(S3Image, 'S3Image', 'src/components/aws-amplify-react/S3Image.js');
    reactHotLoader.register(_default, 'default', 'src/components/aws-amplify-react/S3Image.js');
    leaveModule(module);
})();

;