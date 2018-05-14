"use strict";

var _navbar = require("./components/navbar");

var _navbar2 = _interopRequireDefault(_navbar);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(_navbar2.default, {
    color: "green",
    title: "ZooKeepr",
    description: "Keep track of your animals",
    icon: "paw"
  }),
  _react2.default.createElement(_navbar2.default, {
    color: "blue",
    title: "Beekeepr",
    description: "Keep track of your bees",
    icon: "paw"
  })
), document.querySelector("#main"));

