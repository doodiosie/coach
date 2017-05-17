"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _reactBootstrap = require("react-bootstrap");

var _FilterComponents = require("../FilterComponents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var data = _ref.data,
        onOrder = _ref.onOrder,
        onFilter = _ref.onFilter,
        loadMore = _ref.loadMore,
        onDelete = _ref.onDelete;
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/admin/bookings/add" },
            "Add a Booking"
        ),
        _react2.default.createElement(
            _reactBootstrap.Table,
            null,
            _react2.default.createElement(
                "thead",
                null,
                _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                        "th",
                        null,
                        _react2.default.createElement(
                            "span",
                            { onClick: function onClick() {
                                    return onOrder("id");
                                } },
                            "Id"
                        ),
                        _react2.default.createElement(_FilterComponents.TextFilter, { onFilter: onFilter, field: "id" })
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        "First Name"
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        "Last Name"
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        "Pickup Date"
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        "Pickup Address"
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        "Destination Address"
                    ),
                    _react2.default.createElement(
                        "th",
                        null,
                        "Price"
                    ),
                    _react2.default.createElement("th", null)
                )
            ),
            _react2.default.createElement(
                "tbody",
                null,
                data.map(function (booking) {
                    return _react2.default.createElement(
                        "tr",
                        { key: booking.id },
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.id
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.firstName
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.lastName
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            (0, _moment2.default)(booking.pickupDate, "x").format("DD/MM/YY")
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.pickupAddress
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            booking.destinationAddress
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            "\xA3",
                            booking.price / 100
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/admin/bookings/edit/" + booking.id },
                                "Edit"
                            )
                        ),
                        _react2.default.createElement(
                            "td",
                            null,
                            _react2.default.createElement(
                                "a",
                                { onClick: function onClick() {
                                        return onDelete(booking.id);
                                    } },
                                "Delete"
                            )
                        )
                    );
                })
            )
        ),
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "button",
                { onClick: function onClick() {
                        return loadMore();
                    }, className: "btn btn-primary" },
                "Load More"
            )
        )
    );
};