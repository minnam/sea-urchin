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
var hover_effect_1 = require("../hover-effect");
var theme_provider_1 = require("../theme-provider");
var theme_util_js_1 = require("../theme-util.js");
var InputBaseTemplate = /** @class */ (function (_super) {
    __extends(InputBaseTemplate, _super);
    function InputBaseTemplate(props) {
        var _this = _super.call(this, props) || this;
        if (theme_util_js_1.checkPathValid(theme_provider_1["default"], 'default')) {
            _this.theme = theme_provider_1["default"]["default"];
        }
        else {
            _this.theme = {};
        }
        _this.state = {};
        return _this;
    }
    InputBaseTemplate.prototype.render = function () {
        var _a = this.props, classNames = _a.classNames, children = _a.children, disableHoverEffect = _a.disableHoverEffect, disableIcon = _a.disableIcon, focus = _a.focus, // Need to check if function
        focused = _a.focused, _b = _a.height, height = _b === void 0 ? 60 : _b, _c = _a.highlightOffset, highlightOffset = _c === void 0 ? 0 : _c, hint = _a.hint, hintStyle = _a.hintStyle, hintClass = _a.hintClass, input = _a.input, // need to check if dom input element
        label = _a.label, labelClass = _a.labelClass, labelFocusedClass = _a.labelFocusedClass, labelFocusedStyle = _a.labelFocusedStyle, labelParentStyle = _a.labelParentStyle, labelStyle = _a.labelStyle, layout = _a.layout, onClick = _a.onClick, // Need to check if function
        preLabel = _a.preLabel, primaryIcon = _a.primaryIcon, primaryIconStyle = _a.primaryIconStyle, primaryIconClass = _a.primaryIconClass, value = _a.value, parentClass = _a.parentClass, preLabelParentClass = _a.preLabelParentClass, preLabelClass = _a.preLabelClass, postLabel = _a.postLabel, postLabelClass = _a.postLabelClass, postLabelParentClass = _a.postLabelParentClass, mouseOver = _a.mouseOver;
        var blurredAndEmpty = !focused && value === '';
        var focusedAndEmpty = focused && value === '';
        return (React.createElement("div", { className: typestyle_1.classes(classNames.parent, parentClass, blurredAndEmpty ? classNames.parentFocused : null), onMouseOver: this.props.handleMouseOver, onMouseLeave: this.props.handleMouseLeave, onClick: this.props.handleClick, onTouchStart: this.props.handleClick },
            preLabel ? React.createElement("span", { className: typestyle_1.classes('noselect', classNames.preLabel, preLabelParentClass), style: height ? {} : {
                    height: height,
                    lineHeight: height + "px"
                } },
                disableHoverEffect ? '' : React.createElement(hover_effect_1["default"], { mouseOver: mouseOver }),
                React.cloneElement(preLabel, __assign({}, preLabel.props, { className: typestyle_1.classes(preLabel.props.className, classNames.preLabel, preLabelClass) }))) : '',
            React.createElement("div", { className: typestyle_1.classes('noselect', classNames.labelParent, blurredAndEmpty ? null : classNames.labelParentFocused) },
                React.createElement("i", { className: typestyle_1.classes('material-icons', classNames.primaryIcon, primaryIconClass, focused ? classNames.primaryIconFocused : null), style: {
                        lineHeight: blurredAndEmpty ? height + "px" : ''
                    } }, primaryIcon),
                React.createElement("span", { className: typestyle_1.classes(classNames.label, labelClass, focusedAndEmpty ? labelFocusedClass : null), style: {
                        lineHeight: blurredAndEmpty ? height + "px" : ''
                    } }, label)),
            postLabel ? React.createElement("span", { className: typestyle_1.classes(classNames.postLabel, postLabelParentClass), style: height ? {} : {
                    height: height,
                    lineHeight: height + "px"
                } },
                disableHoverEffect ? '' : React.createElement(hover_effect_1["default"], { mouseOver: mouseOver }),
                React.cloneElement(postLabel, __assign({}, postLabel.props, { className: typestyle_1.classes(postLabel.props.className, classNames.preLabel, postLabelClass) }))) : '',
            disableHoverEffect ? '' : React.createElement(hover_effect_1["default"], { mouseOver: mouseOver }),
            React.createElement("div", { className: typestyle_1.classes(classNames.highlight, focused ? classNames.highlightFocused : null), style: {
                    height: height,
                    top: highlightOffset
                } }),
            children));
    };
    return InputBaseTemplate;
}(React.Component));
exports["default"] = InputBaseTemplate;
