"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var typestyle_1 = require("typestyle");
var _1 = require("../base/");
var theme_util_1 = require("../theme-util");
var input_field_classes_1 = require("./input-field-classes");
var InputField = /** @class */ (function (_super) {
    __extends(InputField, _super);
    function InputField(props) {
        var _this = _super.call(this, props) || this;
        /**
         *   Following will force the text cursor to be at the end of the text when focused
         *   "event.stopPropagation()" is added on input onClick event.
         */
        _this.handleClick = function (event) {
            if (typeof _this.input.selectionStart === 'number') {
                _this.input.selectionStart = _this.input.selectionEnd = _this.input.value.length;
            }
            else if (typeof _this.input.createTextRange !== 'undefined') {
                var range = _this.input.createTextRange();
                range.collapse(false);
                range.select();
            }
            _this.input.focus();
        };
        _this.focus = function () {
            _this.setState({ focused: true });
            if (_this.props.setFluidFocus) {
                _this.props.setFluidFocus(_this.props.fluidIndex);
            }
        };
        _this.blur = function () {
            _this.setState({ focused: false });
        };
        _this.handleMouseOver = function () {
            var onMouseOver = _this.props.onMouseOver;
            if (onMouseOver) {
                onMouseOver();
            }
        };
        _this.theme = theme_util_1.getTheme(_this, 'textInput');
        _this.state = {};
        return _this;
    }
    InputField.prototype.render = function () {
        var _this = this;
        var _a = this.props, hint = _a.hint, _b = _a.value, value = _b === void 0 ? '' : _b, onChange = _a.onChange, onClear = _a.onClear;
        var focused = this.state.focused;
        return (React.createElement(_1.InputBase, __assign({ focus: this.focus, focused: focused, value: value, onClick: this.handleClick, hintClass: this.theme.hint, labelClass: this.theme.label, parentClass: this.theme.style, primaryIconClass: this.theme.primaryIcon, postLabel: React.createElement("div", { style: {
                    fontWeight: 700,
                    fontSize: 11,
                    color: 'rgb(120,120,120)',
                    paddingRight: 10,
                    cursor: 'pointer',
                    zIndex: 10,
                    display: value !== '' ? 'inline' : 'none'
                }, onClick: function (event) {
                    event.stopPropagation();
                    if (onClear) {
                        onClear();
                    }
                    _this.input.focus();
                } }, "CLEAR") }, this.props),
            React.createElement("div", { className: typestyle_1.classes(input_field_classes_1["default"].hint, this.theme.hint, focused && value === '' ? null : input_field_classes_1["default"].hintHide) }, hint),
            React.createElement("input", { className: input_field_classes_1["default"].input, ref: function (input) {
                    _this.input = input;
                }, onBlur: this.blur, onChange: function (event) {
                    if (onChange) {
                        onChange(event, event.target, event.target.value);
                    }
                }, onClick: function (event) {
                    event.stopPropagation();
                }, onFocus: this.focus, value: value })));
    };
    InputField.prototype.componentDidMount = function () {
        this.theme = theme_util_1.getTheme(this, 'textInput');
    };
    return InputField;
}(React.Component));
exports["default"] = InputField;
