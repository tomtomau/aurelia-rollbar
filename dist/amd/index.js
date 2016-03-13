define(['exports'], function (exports) {
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
      value: function error(logger, _error) {
        var rollbar = this.getRollbar();

        if (typeof rollbar !== 'undefined') {
          rollbar.error(_error);
        }
      }
    }, {
      key: 'info',
      value: function info(logger, _info) {
        var rollbar = this.getRollbar();

        if (typeof rollbar !== 'undefined') {
          rollbar.info(_info);
        }
      }
    }, {
      key: 'warn',
      value: function warn(logger, warning) {
        var rollbar = this.getRollbar();

        if (typeof rollbar !== 'undefined') {
          rollbar.warning(warning);
        }
      }
    }, {
      key: 'debug',
      value: function debug(logger, _debug) {
        var rollbar = this.getRollbar();

        if (typeof rollbar !== 'undefined') {
          rollbar.debug(_debug);
        }
      }
    }, {
      key: 'getRollbar',
      value: function getRollbar() {
        return window.Rollbar;
      }
    }]);

    return RollbarAppender;
  })();

  exports.RollbarAppender = RollbarAppender;
});