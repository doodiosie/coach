"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextFilter = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFilter = exports.TextFilter = function TextFilter(_ref) {
    var onFilter = _ref.onFilter,
        field = _ref.field;
    return _react2.default.createElement("input", {
        type: "text",
        className: "form-control",
        onChange: function onChange(_ref2) {
            var value = _ref2.target.value;
            return onFilter({
                field: field,
                filter: "%" + value + "%"
            });
        }
    });
};