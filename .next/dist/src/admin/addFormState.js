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

exports.default = function (Form) {
    return function (_Component) {
        _inherits(AddFormState, _Component);

        function AddFormState(props) {
            _classCallCheck(this, AddFormState);

            var _this = _possibleConstructorReturn(this, (AddFormState.__proto__ || Object.getPrototypeOf(AddFormState)).call(this, props));

            _this.state = {
                value: (0, _immutable.Map)()
            };

            _this.handleChange = _this.handleChange.bind(_this);
            _this.handleSubmit = _this.handleSubmit.bind(_this);
            return _this;
        }

        _createClass(AddFormState, [{
            key: "handleChange",
            value: function handleChange(value) {
                this.setState({
                    value: this.state.value.merge(value)
                });
            }
        }, {
            key: "handleSubmit",
            value: function handleSubmit(data) {
                return this.props.mutate({
                    variables: {
                        record: data.toJS()
                    }
                });
            }
        }, {
            key: "render",
            value: function render() {
                return _react2.default.createElement(Form, {
                    data: this.state.value,
                    onChange: this.handleChange,
                    onSubmit: this.handleSubmit
                });
            }
        }]);

        return AddFormState;
    }(_react.Component);
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _immutable = require("immutable");

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