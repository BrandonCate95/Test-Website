'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
	"use strict";

	if (!Function.prototype.$asyncbind) {
		Object.defineProperty(Function.prototype, "$asyncbind", {
			value: $asyncbind,
			enumerable: false,
			configurable: true,
			writable: true
		});
	}

	if (!$asyncbind.trampoline) {
		$asyncbind.trampoline = function trampoline(t, x, s, e, u) {
			return function b(q) {
				while (q) {
					if (q.then) {
						q = q.then(b, e);
						return u ? undefined : q;
					}

					try {
						if (q.pop) {
							if (q.length) return q.pop() ? x.call(t) : q;
							q = s;
						} else q = q.call(t);
					} catch (r) {
						return e(r);
					}
				}
			};
		};
	}

	if (!$asyncbind.LazyThenable) {
		$asyncbind.LazyThenable = function () {
			function isThenable(obj) {
				return obj && obj instanceof Object && typeof obj.then === "function";
			}

			function resolution(p, r, how) {
				try {
					var x = how ? how(r) : r;
					if (p === x) return p.reject(new TypeError("Promise resolution loop"));

					if (isThenable(x)) {
						x.then(function (y) {
							resolution(p, y);
						}, function (e) {
							p.reject(e);
						});
					} else {
						p.resolve(x);
					}
				} catch (ex) {
					p.reject(ex);
				}
			}

			function _unchained(v) {}

			function thenChain(res, rej) {
				this.resolve = res;
				this.reject = rej;
			}

			function Chained() {}

			;
			Chained.prototype = {
				resolve: _unchained,
				reject: _unchained,
				then: thenChain
			};

			function then(res, rej) {
				var chain = new Chained();

				try {
					this._resolver(function (value) {
						return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
					}, function (ex) {
						resolution(chain, ex, rej);
					});
				} catch (ex) {
					resolution(chain, ex, rej);
				}

				return chain;
			}

			function Thenable(resolver) {
				this._resolver = resolver;
				this.then = then;
			}

			;

			Thenable.resolve = function (v) {
				return Thenable.isThenable(v) ? v : {
					then: function then(resolve) {
						return resolve(v);
					}
				};
			};

			Thenable.isThenable = isThenable;
			return Thenable;
		}();

		$asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
			tick = tick || (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
				setTimeout(f, 0);
			};

			var soon = function () {
				var fq = [],
				    fqStart = 0,
				    bufferSize = 1024;

				function callQueue() {
					while (fq.length - fqStart) {
						try {
							fq[fqStart]();
						} catch (ex) {}

						fq[fqStart++] = undefined;

						if (fqStart === bufferSize) {
							fq.splice(0, bufferSize);
							fqStart = 0;
						}
					}
				}

				return function (fn) {
					fq.push(fn);
					if (fq.length - fqStart === 1) tick(callQueue);
				};
			}();

			function Zousan(func) {
				if (func) {
					var me = this;
					func(function (arg) {
						me.resolve(arg);
					}, function (arg) {
						me.reject(arg);
					});
				}
			}

			Zousan.prototype = {
				resolve: function resolve(value) {
					if (this.state !== undefined) return;
					if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
					var me = this;

					if (value && (typeof value === "function" || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object")) {
						try {
							var first = 0;
							var then = value.then;

							if (typeof then === "function") {
								then.call(value, function (ra) {
									if (!first++) {
										me.resolve(ra);
									}
								}, function (rr) {
									if (!first++) {
										me.reject(rr);
									}
								});
								return;
							}
						} catch (e) {
							if (!first) this.reject(e);
							return;
						}
					}

					this.state = STATE_FULFILLED;
					this.v = value;
					if (me.c) soon(function () {
						for (var n = 0, l = me.c.length; n < l; n++) {
							STATE_FULFILLED(me.c[n], value);
						}
					});
				},
				reject: function reject(reason) {
					if (this.state !== undefined) return;
					this.state = STATE_REJECTED;
					this.v = reason;
					var clients = this.c;
					if (clients) soon(function () {
						for (var n = 0, l = clients.length; n < l; n++) {
							STATE_REJECTED(clients[n], reason);
						}
					});
				},
				then: function then(onF, onR) {
					var p = new Zousan();
					var client = {
						y: onF,
						n: onR,
						p: p
					};

					if (this.state === undefined) {
						if (this.c) this.c.push(client);else this.c = [client];
					} else {
						var s = this.state,
						    a = this.v;
						soon(function () {
							s(client, a);
						});
					}

					return p;
				}
			};

			function STATE_FULFILLED(c, arg) {
				if (typeof c.y === "function") {
					try {
						var yret = c.y.call(undefined, arg);
						c.p.resolve(yret);
					} catch (err) {
						c.p.reject(err);
					}
				} else c.p.resolve(arg);
			}

			function STATE_REJECTED(c, reason) {
				if (typeof c.n === "function") {
					try {
						var yret = c.n.call(undefined, reason);
						c.p.resolve(yret);
					} catch (err) {
						c.p.reject(err);
					}
				} else c.p.reject(reason);
			}

			Zousan.resolve = function (val) {
				if (val && val instanceof Zousan) return val;
				var z = new Zousan();
				z.resolve(val);
				return z;
			};

			Zousan.reject = function (err) {
				if (err && err instanceof Zousan) return err;
				var z = new Zousan();
				z.reject(err);
				return z;
			};

			Zousan.version = "2.3.3-nodent";
			return Zousan;
		})();
	}

	function boundThen() {
		return resolver.apply(self, arguments);
	}

	var resolver = this;

	switch (catcher) {
		case true:
			return new $asyncbind.Thenable(boundThen);

		case 0:
			return new $asyncbind.LazyThenable(boundThen);

		case undefined:
			boundThen.then = boundThen;
			return boundThen;

		default:
			return function () {
				try {
					return resolver.apply(self, arguments);
				} catch (ex) {
					return catcher(ex);
				}
			};
	}
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _webpackDev = require('./webpack.dev.js');

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _App = require('./lib/App');

var _App2 = _interopRequireDefault(_App);

var _webpack3 = require('react-loadable/webpack');

var _reactLoadable3 = require('./react-loadable.json');

var _reactLoadable4 = _interopRequireDefault(_reactLoadable3);

var _clientSessions = require('client-sessions');

var _clientSessions2 = _interopRequireDefault(_clientSessions);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

require('cross-fetch/polyfill');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('./lib/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _styledComponents = require('styled-components');

var _ApolloProvider = require('react-apollo/ApolloProvider');

var _ApolloProvider2 = _interopRequireDefault(_ApolloProvider);

var _renderToStringWithData = require('react-apollo/renderToStringWithData');

var _awsAppsync = require('aws-appsync');

var _awsAppsync2 = _interopRequireDefault(_awsAppsync);

var _AppSync = require('./lib/AppSync');

var _AppSync2 = _interopRequireDefault(_AppSync);

var _awsExports = require('./lib/aws-exports');

var _awsExports2 = _interopRequireDefault(_awsExports);

var _awsAmplify = require('aws-amplify');

var _awsAmplify2 = _interopRequireDefault(_awsAmplify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
	"use strict";

	if (!Function.prototype.$asyncbind) {
		Object.defineProperty(Function.prototype, "$asyncbind", {
			value: $asyncbind,
			enumerable: false,
			configurable: true,
			writable: true
		});
	}

	if (!$asyncbind.trampoline) {
		$asyncbind.trampoline = function trampoline(t, x, s, e, u) {
			return function b(q) {
				while (q) {
					if (q.then) {
						q = q.then(b, e);
						return u ? undefined : q;
					}

					try {
						if (q.pop) {
							if (q.length) return q.pop() ? x.call(t) : q;
							q = s;
						} else q = q.call(t);
					} catch (r) {
						return e(r);
					}
				}
			};
		};
	}

	if (!$asyncbind.LazyThenable) {
		$asyncbind.LazyThenable = function () {
			function isThenable(obj) {
				return obj && obj instanceof Object && typeof obj.then === "function";
			}

			function resolution(p, r, how) {
				try {
					var x = how ? how(r) : r;
					if (p === x) return p.reject(new TypeError("Promise resolution loop"));

					if (isThenable(x)) {
						x.then(function (y) {
							resolution(p, y);
						}, function (e) {
							p.reject(e);
						});
					} else {
						p.resolve(x);
					}
				} catch (ex) {
					p.reject(ex);
				}
			}

			function _unchained(v) {}

			function thenChain(res, rej) {
				this.resolve = res;
				this.reject = rej;
			}

			function Chained() {}

			;
			Chained.prototype = {
				resolve: _unchained,
				reject: _unchained,
				then: thenChain
			};

			function then(res, rej) {
				var chain = new Chained();

				try {
					this._resolver(function (value) {
						return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
					}, function (ex) {
						resolution(chain, ex, rej);
					});
				} catch (ex) {
					resolution(chain, ex, rej);
				}

				return chain;
			}

			function Thenable(resolver) {
				this._resolver = resolver;
				this.then = then;
			}

			;

			Thenable.resolve = function (v) {
				return Thenable.isThenable(v) ? v : {
					then: function then(resolve) {
						return resolve(v);
					}
				};
			};

			Thenable.isThenable = isThenable;
			return Thenable;
		}();

		$asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
			tick = tick || (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
				setTimeout(f, 0);
			};

			var soon = function () {
				var fq = [],
				    fqStart = 0,
				    bufferSize = 1024;

				function callQueue() {
					while (fq.length - fqStart) {
						try {
							fq[fqStart]();
						} catch (ex) {}

						fq[fqStart++] = undefined;

						if (fqStart === bufferSize) {
							fq.splice(0, bufferSize);
							fqStart = 0;
						}
					}
				}

				return function (fn) {
					fq.push(fn);
					if (fq.length - fqStart === 1) tick(callQueue);
				};
			}();

			function Zousan(func) {
				if (func) {
					var me = this;
					func(function (arg) {
						me.resolve(arg);
					}, function (arg) {
						me.reject(arg);
					});
				}
			}

			Zousan.prototype = {
				resolve: function resolve(value) {
					if (this.state !== undefined) return;
					if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
					var me = this;

					if (value && (typeof value === "function" || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object")) {
						try {
							var first = 0;
							var then = value.then;

							if (typeof then === "function") {
								then.call(value, function (ra) {
									if (!first++) {
										me.resolve(ra);
									}
								}, function (rr) {
									if (!first++) {
										me.reject(rr);
									}
								});
								return;
							}
						} catch (e) {
							if (!first) this.reject(e);
							return;
						}
					}

					this.state = STATE_FULFILLED;
					this.v = value;
					if (me.c) soon(function () {
						for (var n = 0, l = me.c.length; n < l; n++) {
							STATE_FULFILLED(me.c[n], value);
						}
					});
				},
				reject: function reject(reason) {
					if (this.state !== undefined) return;
					this.state = STATE_REJECTED;
					this.v = reason;
					var clients = this.c;
					if (clients) soon(function () {
						for (var n = 0, l = clients.length; n < l; n++) {
							STATE_REJECTED(clients[n], reason);
						}
					});
				},
				then: function then(onF, onR) {
					var p = new Zousan();
					var client = {
						y: onF,
						n: onR,
						p: p
					};

					if (this.state === undefined) {
						if (this.c) this.c.push(client);else this.c = [client];
					} else {
						var s = this.state,
						    a = this.v;
						soon(function () {
							s(client, a);
						});
					}

					return p;
				}
			};

			function STATE_FULFILLED(c, arg) {
				if (typeof c.y === "function") {
					try {
						var yret = c.y.call(undefined, arg);
						c.p.resolve(yret);
					} catch (err) {
						c.p.reject(err);
					}
				} else c.p.resolve(arg);
			}

			function STATE_REJECTED(c, reason) {
				if (typeof c.n === "function") {
					try {
						var yret = c.n.call(undefined, reason);
						c.p.resolve(yret);
					} catch (err) {
						c.p.reject(err);
					}
				} else c.p.reject(reason);
			}

			Zousan.resolve = function (val) {
				if (val && val instanceof Zousan) return val;
				var z = new Zousan();
				z.resolve(val);
				return z;
			};

			Zousan.reject = function (err) {
				if (err && err instanceof Zousan) return err;
				var z = new Zousan();
				z.reject(err);
				return z;
			};

			Zousan.version = "2.3.3-nodent";
			return Zousan;
		})();
	}

	function boundThen() {
		return resolver.apply(self, arguments);
	}

	var resolver = this;

	switch (catcher) {
		case true:
			return new $asyncbind.Thenable(boundThen);

		case 0:
			return new $asyncbind.LazyThenable(boundThen);

		case undefined:
			boundThen.then = boundThen;
			return boundThen;

		default:
			return function () {
				try {
					return resolver.apply(self, arguments);
				} catch (ex) {
					return catcher(ex);
				}
			};
	}
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_awsAmplify2.default.configure(_awsExports2.default);

var app = (0, _express2.default)();
var DIST_DIR = _path2.default.join(__dirname, "dist");
var HTML_FILE = _path2.default.join(DIST_DIR, "index.html");
var HTML_FILE_DEV = _path2.default.join(__dirname, _webpackDev2.default.output.publicPath, "index.html");
var LOADABLE_JSON = _path2.default.join(__dirname, "react-loadable.json");
var isDevelopment = app.get('env') === "dev";
var DEFAULT_PORT = 3000;

app.set("port", process.env.PORT || DEFAULT_PORT);

app.use((0, _clientSessions2.default)({
	cookieName: 'session',
	secret: 'random_string_goes_here',
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000
}));

app.use(_express2.default.json());

// API CALLS
app.use('/api', _api2.default);

if (isDevelopment) {

	var compiler = (0, _webpack2.default)(_webpackDev2.default);

	app.use(require("webpack-dev-middleware")(compiler, {
		noInfo: true, publicPath: _webpackDev2.default.output.publicPath
	}));

	app.use(require("webpack-hot-middleware")(compiler));

	app.get("/*", function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
			var loadable, template;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							loadable = _fs2.default.readFileSync(LOADABLE_JSON, 'utf8');

							loadable = JSON.parse(loadable);
							template = compiler.outputFileSystem.readFileSync(HTML_FILE, 'utf8');

							sendRes(req, res, template, loadable);

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}());
} else {

	var template = _fs2.default.readFileSync(HTML_FILE, 'utf8');
	// app.use('/service-worker.js', express.static(path.join(__dirname, "service-worker.js")))
	// app.use('/manifest.json', express.static(path.join(__dirname, "manifest.json")))
	app.use('/dist', _express2.default.static(DIST_DIR));

	app.get("/*", function (req, res) {
		return sendRes(req, res, template);
	});
}

function sendRes(req, res, template, loadable) {
	var _this = this;

	var context = {};
	var modules = [];

	var sheet = new _styledComponents.ServerStyleSheet();

	var client = new _awsAppsync2.default({
		url: _AppSync2.default.graphqlEndpoint,
		region: _AppSync2.default.region,
		auth: {
			type: _AppSync2.default.authenticationType,
			credentials: function () {
				var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
					return _regenerator2.default.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									_context2.next = 2;
									return _awsAmplify.Auth.currentCredentials();

								case 2:
									return _context2.abrupt('return', _context2.sent);

								case 3:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, _this);
				}));

				function credentials() {
					return _ref2.apply(this, arguments);
				}

				return credentials;
			}()
		},
		disableOffline: true,
		complexObjectsCredentials: function complexObjectsCredentials() {
			return _awsAmplify.Auth.currentCredentials();
		}
	});
	client.ssrMode = true; // appsync client dosent allow for ssrmod option so this is best option

	var store = (0, _redux.createStore)(_reducers2.default);
	store.dispatch({ type: 'RESTORE_STATE', payload: { user: req.session.user, addpage: { username: req.session.user ? req.session.user.username : 'anon' } } });

	var reactDom = _react2.default.createElement(
		_reactLoadable2.default.Capture,
		{ report: function report(moduleName) {
				return modules.push(moduleName);
			} },
		_react2.default.createElement(
			_ApolloProvider2.default,
			{ client: client },
			_react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(
					_reactRouter.StaticRouter,
					{ location: req.url, context: context },
					_react2.default.createElement(
						_styledComponents.StyleSheetManager,
						{ sheet: sheet.instance },
						_react2.default.createElement(_App2.default, null)
					)
				)
			)
		)
	);

	(0, _renderToStringWithData.renderToStringWithData)(reactDom).then(function (content) {
		var apolloState = client.extract();
		var reduxState = store.getState();
		var styleTags = sheet.getStyleTags();

		var bundles = (0, _webpack3.getBundles)(loadable ? loadable : _reactLoadable4.default, modules);

		var scripts = bundles.filter(function (bundle) {
			return bundle ? bundle.file.endsWith('.js') : null;
		});
		var uniqueScripts = [].concat(_toConsumableArray(new Set(scripts))); // removes any duplicates

		var styles = bundles.filter(function (bundle) {
			return bundle ? bundle.file.endsWith('.css') : null;
		});
		var uniqueStyles = [].concat(_toConsumableArray(new Set(scripts))); // removes any duplicates

		var html = template.replace('{{content}}', content).replace('{{styleTags}}', styleTags).replace("'{{apolloState}}'", JSON.stringify(apolloState).replace(/</g, '\\u003c')).replace("'{{reduxState}}'", JSON.stringify(reduxState).replace(/</g, '\\u003c')).replace('{{loadableScripts}}', uniqueScripts.map(function (script) {
			return '<script src="' + script.publicPath + '"></script>';
		}).join('\n')).replace('{{loadableScripts}}', uniqueStyles.map(function (style) {
			return '<script src="' + style.publicPath + '"></script>';
		}).join('\n'));

		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(html);
	}).catch(function (e) {
		res.status(500);
		res.end('An error occurred:\n\n' + e.stack);
	});
}

// Serve the files on port 3000.
_reactLoadable2.default.preloadAll().then(function () {
	app.listen(app.get('port'), function () {});
}).catch(function (err) {});
