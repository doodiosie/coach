"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require("material-ui/RaisedButton");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _Table = require("material-ui/Table");

var _Table2 = _interopRequireDefault(_Table);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _FilterComponents = require("../FilterComponents");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (_ref) {
    var data = _ref.data,
        onOrder = _ref.onOrder,
        onFilter = _ref.onFilter,
        loadMore = _ref.loadMore;
    return _react2.default.createElement("div", null, _react2.default.createElement(_Table2.default, {
        height: "70vh",
        fixedHeader: true,
        showCheckboxes: false,
        selectable: false }, _react2.default.createElement(_Table.TableHeader, { displaySelectAll: false, adjustForCheckbox: false }, _react2.default.createElement(_Table.TableRow, null, _react2.default.createElement(_Table.TableHeaderColumn, null, _react2.default.createElement("span", { onClick: function onClick() {
            return onOrder("id");
        } }, "Id"), _react2.default.createElement(_FilterComponents.TextFilter, { onFilter: onFilter, field: "id" })), _react2.default.createElement(_Table.TableHeaderColumn, null, "First Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Last Name"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Pickup Date"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Pickup Address"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Destination Address"), _react2.default.createElement(_Table.TableHeaderColumn, null, "Price"), _react2.default.createElement(_Table.TableHeaderColumn, null))), _react2.default.createElement(_Table.TableBody, { displayRowCheckbox: false }, data.map(function (booking) {
        return _react2.default.createElement(_Table.TableRow, { key: booking.id }, _react2.default.createElement(_Table.TableRowColumn, null, booking.id), _react2.default.createElement(_Table.TableRowColumn, null, booking.firstName), _react2.default.createElement(_Table.TableRowColumn, null, booking.lastName), _react2.default.createElement(_Table.TableRowColumn, null, (0, _moment2.default)(booking.pickupDate, "X").format("DD/MM/YY")), _react2.default.createElement(_Table.TableRowColumn, null, booking.pickupAddress), _react2.default.createElement(_Table.TableRowColumn, null, booking.destinationAddress), _react2.default.createElement(_Table.TableRowColumn, null, "\xA3", booking.price / 100), _react2.default.createElement(_Table.TableRowColumn, null, _react2.default.createElement(_link2.default, { href: "/admin/bookings/edit?id=" + booking.id }, _react2.default.createElement("a", null, _react2.default.createElement(_RaisedButton2.default, null, "Edit")))));
    }))), _react2.default.createElement("div", null, _react2.default.createElement("button", { onClick: function onClick() {
            return loadMore();
        }, className: "btn btn-primary" }, "Load More")));
};