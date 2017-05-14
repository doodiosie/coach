"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _MainTemplate = require("../../../src/templates/MainTemplate");

var _MainTemplate2 = _interopRequireDefault(_MainTemplate);

var _CardsTable = require("../../../src/admin/cards/CardsTable");

var _CardsTable2 = _interopRequireDefault(_CardsTable);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CardsTablePage = function (_Component) {
    _inherits(CardsTablePage, _Component);

    function CardsTablePage() {
        _classCallCheck(this, CardsTablePage);

        return _possibleConstructorReturn(this, (CardsTablePage.__proto__ || Object.getPrototypeOf(CardsTablePage)).apply(this, arguments));
    }

    _createClass(CardsTablePage, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_MainTemplate2.default, null, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement(_link2.default, { href: "/admin/cards/add" }, _react2.default.createElement("a", null, "Add a Card")), _react2.default.createElement(_CardsTable2.default, null)));
        }
    }]);

    return CardsTablePage;
}(_react.Component);

exports.default = CardsTablePage;