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
var input_base_template_1 = require("./input-base-template");
var input_base_classes_1 = require("./input-base-classes");
var InputBase = /** @class */ (function (_super) {
    __extends(InputBase, _super);
    function InputBase(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { mouseOver: false };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
        return _this;
    }
    InputBase.prototype.wrap = function (classNames) {
        var mouseOver = this.state.mouseOver;
        return (React.createElement(input_base_template_1["default"], __assign({}, this.props, { classNames: classNames, handleClick: this.handleClick, handleMouseLeave: this.handleMouseLeave, handleMouseOver: this.handleMouseOver, mouseOver: mouseOver })));
    };
    InputBase.prototype.render = function () {
        var layout = this.props.layout;
        switch (layout) {
            case 'vertical': {
                return this.wrap(input_base_classes_1["default"].vertical);
            }
            case 'horizontal':
            default: {
                return this.wrap(input_base_classes_1["default"].horizontal);
            }
        }
    };
    InputBase.prototype.handleClick = function (event) {
        var _a = this.props, focus = _a.focus, focused = _a.focused, input = _a.input, onClick = _a.onClick;
        if (onClick) {
            onClick(event);
        }
        else {
            if (!focused) {
                focus();
                if (input) {
                    input.focus();
                }
            }
        }
    };
    InputBase.prototype.handleMouseOver = function () {
        var onMouseOver = this.props.onMouseOver;
        if (onMouseOver) {
            onMouseOver();
        }
        this.setState({ mouseOver: true });
    };
    InputBase.prototype.handleMouseLeave = function () {
        this.setState({ mouseOver: false });
    };
    return InputBase;
}(React.Component));
exports["default"] = InputBase;
