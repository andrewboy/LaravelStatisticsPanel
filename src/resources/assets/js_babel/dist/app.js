'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StatisticsBox = require('boxes/StatisticsBox');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.ez = {};

window.ez.config = function () {
    var HelloWorld = function () {
        function HelloWorld(message) {
            _classCallCheck(this, HelloWorld);

            this.message = message;
        }

        _createClass(HelloWorld, [{
            key: 'getMessage',
            value: function getMessage() {
                return this.message;
            }
        }]);

        return HelloWorld;
    }();

    return {
        'bla': HelloWorld
    };
}();