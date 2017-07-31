'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Radio = function Radio(_ref) {
  var className = _ref.className,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      props = _objectWithoutProperties(_ref, ['className', 'label', 'name', 'value', 'checked', 'defaultChecked']);

  var radioClassNames = (0, _classnames2.default)(className, 'slds-radio');
  return _react2.default.createElement(
    'label',
    { className: radioClassNames },
    _react2.default.createElement('input', _extends({
      type: 'radio',
      name: name,
      value: value,
      checked: checked,
      defaultChecked: defaultChecked
    }, props)),
    _react2.default.createElement(
      'span',
      null,
      label
    )
  );
};

Radio.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool
};

exports.default = Radio;