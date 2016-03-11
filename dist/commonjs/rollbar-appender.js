'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var RollbarAppender = (function () {
    function RollbarAppender() {
        _classCallCheck(this, RollbarAppender);
    }

    _createClass(RollbarAppender, [{
        key: 'error',
        value: function error(logger) {
            var rollbar = this.getRollbar();

            if (typeof rollbar !== 'undefined') {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _len = arguments.length, errors = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        errors[_key - 1] = arguments[_key];
                    }

                    for (var _iterator = errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;

                        rollbar.error(error);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'info',
        value: function info(logger) {}
    }, {
        key: 'warn',
        value: function warn(logger) {
            var rollbar = this.getRollbar();

            if (typeof rollbar !== 'undefined') {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _len2 = arguments.length, warnings = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                        warnings[_key2 - 1] = arguments[_key2];
                    }

                    for (var _iterator2 = warnings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var warning = _step2.value;

                        rollbar.warning(warning);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                            _iterator2['return']();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }, {
        key: 'debug',
        value: function debug() {}
    }, {
        key: 'getRollbar',
        value: function getRollbar() {
            return window.Rollbar;
        }
    }]);

    return RollbarAppender;
})();

exports.RollbarAppender = RollbarAppender;