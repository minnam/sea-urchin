webpackHotUpdate(5,{

/***/ 111:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/m/Work/sea-urchin/node_modules/babel-runtime/core-js/symbol/iterator.js'");

/***/ }),

/***/ 112:
false,

/***/ 130:
false,

/***/ 131:
false,

/***/ 132:
false,

/***/ 133:
false,

/***/ 134:
false,

/***/ 135:
false,

/***/ 136:
false,

/***/ 137:
false,

/***/ 138:
false,

/***/ 139:
false,

/***/ 140:
false,

/***/ 141:
false,

/***/ 142:
false,

/***/ 155:
false,

/***/ 156:
false,

/***/ 157:
false,

/***/ 158:
false,

/***/ 167:
false,

/***/ 168:
false,

/***/ 169:
false,

/***/ 170:
false,

/***/ 171:
false,

/***/ 172:
false,

/***/ 173:
false,

/***/ 174:
false,

/***/ 175:
false,

/***/ 176:
false,

/***/ 177:
false,

/***/ 178:
false,

/***/ 179:
false,

/***/ 189:
false,

/***/ 190:
false,

/***/ 22:
false,

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTheme = exports.checkPathValid = undefined;

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__(56);

var _typeof3 = _interopRequireDefault(_typeof2);

var _themeProvider = __webpack_require__(398);

var _themeProvider2 = _interopRequireDefault(_themeProvider);

var _lodash = __webpack_require__(399);

var _lodash2 = _interopRequireDefault(_lodash);

var _typestyle = __webpack_require__(395);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ((0, _typeof3.default)(global.seaurchin) === undefined) {
    global.seaurchin = {};
}

var checkPathValid = function checkPathValid(obj, path) {
    var parts = path.split(".");
    var root = obj;

    if (!root) {
        return false;
    }

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (root[part] && root.hasOwnProperty(part)) root = root[part];else return false;
    }

    return true;
};

var getTheme = function getTheme() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = arguments[1];
    var _obj$props = obj.props,
        theme = _obj$props.theme,
        layout = _obj$props.layout;

    var themeObj = {
        default: {
            style: {}
        }
    };
    themeObj[type] = {
        style: {}
    };

    if (checkPathValid(_themeProvider2.default[theme], 'default')) {
        themeObj.default = (0, _extends3.default)({}, themeObj.default, _themeProvider2.default[theme].default);
    }

    if (checkPathValid(_themeProvider2.default[theme], type)) {
        themeObj[type] = (0, _extends3.default)({}, themeObj[type], _themeProvider2.default[theme][type]);
    }

    var _obj$props2 = obj.props,
        hintStyle = _obj$props2.hintStyle,
        labelStyle = _obj$props2.labelStyle,
        primaryIconStyle = _obj$props2.primaryIconStyle,
        valueStyle = _obj$props2.valueStyle,
        preLabelStyle = _obj$props2.preLabelStyle,
        preLabelParentStyle = _obj$props2.preLabelParentStyle,
        preLabel = _obj$props2.preLabel,
        labelFocusedStyle = _obj$props2.labelFocusedStyle;

    console.log((0, _extends3.default)({}, _themeProvider2.default.default.style));

    return {
        style: (0, _typestyle.style)((0, _extends3.default)({}, _themeProvider2.default.default.style, themeObj.default.style, themeObj[type].style, obj.props.style)),
        primaryIcon: (0, _typestyle.style)((0, _extends3.default)({}, themeObj.default.style.primaryIcon, themeObj[type].style.primaryIcon, primaryIconStyle)),
        label: (0, _typestyle.style)((0, _extends3.default)({}, themeObj.default.style.label, themeObj[type].style.label, labelStyle)),
        hint: (0, _typestyle.style)((0, _extends3.default)({}, themeObj.default.style.hint, themeObj[type].style.hint, hintStyle)),
        valueStyle: (0, _typestyle.style)((0, _extends3.default)({}, themeObj.default.style.value, themeObj[type].style.value, valueStyle)),
        labelFocused: (0, _typestyle.style)((0, _extends3.default)({}, themeObj.default.style.labelFocused, themeObj[type].style.labelFocused, labelFocusedStyle)),
        preLabel: preLabel ? (0, _typestyle.style)((0, _extends3.default)({}, themeObj.default.style.preLabel, themeObj[type].style.preLabel, preLabel.props.style)) : null,
        preLabelParent: (0, _typestyle.style)((0, _extends3.default)({}, themeObj.default.style.preLabelParent, themeObj[type].style.preLabelParent, preLabelParentStyle))
    };
};

var getTheme2 = function getTheme2() {

    var _theme = _lodash2.default.cloneDeepWith(_themeProvider2.default, function (a) {
        if (a.style) return (0, _extends3.default)({}, a, { style: (0, _typestyle.style)((0, _extends3.default)({}, a.style)) });
    });

    if (!global.seaurchin) {
        global.seaurchin = {};
    }

    global.seaurchin.theme = _theme;
};

getTheme2();

exports.checkPathValid = checkPathValid;
exports.getTheme = getTheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS11dGlsLmpzIl0sIm5hbWVzIjpbIlRoZW1lIiwiXyIsInN0eWxlIiwiY2xhc3NlcyIsImdsb2JhbCIsInNlYXVyY2hpbiIsInVuZGVmaW5lZCIsImNoZWNrUGF0aFZhbGlkIiwib2JqIiwicGF0aCIsInBhcnRzIiwic3BsaXQiLCJyb290IiwiaSIsImxlbmd0aCIsInBhcnQiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFRoZW1lIiwidHlwZSIsInByb3BzIiwidGhlbWUiLCJsYXlvdXQiLCJ0aGVtZU9iaiIsImRlZmF1bHQiLCJoaW50U3R5bGUiLCJsYWJlbFN0eWxlIiwicHJpbWFyeUljb25TdHlsZSIsInZhbHVlU3R5bGUiLCJwcmVMYWJlbFN0eWxlIiwicHJlTGFiZWxQYXJlbnRTdHlsZSIsInByZUxhYmVsIiwibGFiZWxGb2N1c2VkU3R5bGUiLCJjb25zb2xlIiwibG9nIiwicHJpbWFyeUljb24iLCJsYWJlbCIsImhpbnQiLCJ2YWx1ZSIsImxhYmVsRm9jdXNlZCIsInByZUxhYmVsUGFyZW50IiwiZ2V0VGhlbWUyIiwiX3RoZW1lIiwiY2xvbmVEZWVwV2l0aCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBUSxBQUFPOzs7O0FBRWYsSUFBSSxzQkFBTyxPQUFQLEFBQWMsZUFBbEIsQUFBZ0MsV0FBVyxBQUN6QztXQUFBLEFBQU8sWUFBUCxBQUFtQixBQUNwQjs7O0FBRUQsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIsZUFBQSxBQUFDLEtBQUQsQUFBTSxNQUFTLEFBQ2xDO1FBQU0sUUFBUSxLQUFBLEFBQUssTUFBbkIsQUFBYyxBQUFXLEFBQ3pCO1FBQUksT0FBSixBQUFXLEFBRVg7O1FBQUksQ0FBSixBQUFLLE1BQU0sQUFDUDtlQUFBLEFBQU8sQUFDVjtBQUVEOztTQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBSSxNQUFwQixBQUEwQixRQUExQixBQUFr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QUFBUyxNQUFULEFBQWUsTUFGTCxBQUVXLGdCQXhDcEMsQUFDSSxBQXFDcUIsQUFHVixBQUlsQjtBQTVDTyxBQUNJO0FBN0NaOztBQTBGQSxJQUFNLFlBQVksU0FBWixBQUFZLFlBQU0sQUFFcEI7O1FBQU0sMEJBQVMsQUFBRSxBQUFjLHVDQUFPLFVBQUEsQUFBUyxHQUFHLEFBQzlDO1lBQUksRUFBSixBQUFNLE9BQ0Ysa0NBQUEsQUFBWSxLQUFHLE9BQU8saURBQVUsRUFBaEMsQUFBc0IsQUFBWSxBQUN6QztBQUhELEFBQWUsQUFLZixLQUxlOztRQUtYLENBQUMsT0FBTCxBQUFZLFdBQVcsQUFDbkI7ZUFBQSxBQUFPLFlBQVAsQUFBbUIsQUFDdEI7QUFFRDs7V0FBQSxBQUFPLFVBQVAsQUFBaUIsUUFBakIsQUFBeUIsQUFDNUI7QUFaRDs7QUFjQSxBQUVBOztRQUFBLEFBQVE7UUFBUixBQUF3QiIsImZpbGUiOiJ0aGVtZS11dGlsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tL1dvcmsvc2VhLXVyY2hpbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/theme-util.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/theme-util.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(180)))

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchBase = exports.InputBase = undefined;

var _inputBase = __webpack_require__(418);

var _inputBase2 = _interopRequireDefault(_inputBase);

var _switchBase = __webpack_require__(424);

var _switchBase2 = _interopRequireDefault(_switchBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.InputBase = _inputBase2.default;
exports.SwitchBase = _switchBase2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9iYXNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIklucHV0QmFzZSIsIlN3aXRjaEJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBc0IsQUFBdEI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBdUIsQUFBdkIsQUFFQTs7Ozs7O1FBQVEsQUFBUjtRQUFtQixBQUFuQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/base/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/base/index.js"); } } })();

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _themeProvider = __webpack_require__(398);

var _themeProvider2 = _interopRequireDefault(_themeProvider);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStyleProptype = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-style-proptype\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _base = __webpack_require__(397);

var _themeUtil = __webpack_require__(396);

var _typestyle = __webpack_require__(395);

var _checkboxClasses = __webpack_require__(445);

var _checkboxClasses2 = _interopRequireDefault(_checkboxClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/m/Work/sea-urchin/src/checkbox/checkbox.js';


var Checkbox = function (_Component) {
    (0, _inherits3.default)(Checkbox, _Component);

    function Checkbox(props) {
        (0, _classCallCheck3.default)(this, Checkbox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this, props));

        _this.handleClick = function (event) {
            var _this$props = _this.props,
                _this$props$onToggle = _this$props.onToggle,
                onToggle = _this$props$onToggle === undefined ? function () {} : _this$props$onToggle,
                onClick = _this$props.onClick;
            var focused = _this.state.focused;

            event.stopPropagation();

            if (!focused) {
                _this.setState({ focused: true });
                if (onClick) {
                    onClick(true);
                }
                onToggle(true);
            } else {
                _this.setState({ focused: false });
                onToggle(false);
                if (onClick) {
                    onClick(false);
                }
            }
        };

        _this.handleMouseDown = function () {
            var onMouseDown = _this.props.onMouseDown;

            if (onMouseDown) {
                console.log('white');
                onMouseDown();
            }
        };

        _this.handleMouseEnter = function () {
            var _this$props2 = _this.props,
                dragFlag = _this$props2.dragFlag,
                _this$props2$onToggle = _this$props2.onToggle,
                onToggle = _this$props2$onToggle === undefined ? function () {} : _this$props2$onToggle;

            if (dragFlag) {
                onToggle();
            }
        };

        _this.theme = (0, _themeUtil.getTheme)(_this, 'toggle');
        _this.state = { value: _this.props.default };
        return _this;
    }

    (0, _createClass3.default)(Checkbox, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                id = _props.id,
                className = _props.className,
                disableIcon = _props.disableIcon,
                height = _props.height,
                highlightOffset = _props.highlightOffset,
                togglePosition = _props.togglePosition,
                label = _props.label,
                labelStyle = _props.labelStyle,
                primaryIcon = _props.primaryIcon,
                primaryIconStyle = _props.primaryIconStyle,
                toggleIconStyle = _props.toggleIconStyle,
                onMouseMove = _props.onMouseMove,
                onMouseEnter = _props.onMouseEnter,
                style = _props.style,
                layout = _props.layout,
                toggled = _props.toggled,
                _props$onToggle = _props.onToggle,
                onToggle = _props$onToggle === undefined ? function () {} : _props$onToggle;
            var _state = this.state,
                value = _state.value,
                focused = _state.focused;

            return _react2.default.createElement(_base.SwitchBase, {
                onToggle: onToggle,
                disableIcon: disableIcon,
                togglePosition: togglePosition,
                focus: function focus() {
                    _this2.setState({ focused: true });
                },
                focused: focused,
                label: label,
                toggled: toggled,
                labelClass: this.theme.label,
                layout: layout,
                onClick: this.handleClick,
                onMouseOver: this.handleMouseOver,
                onMouseEnter: this.handleMouseEnter,
                onMouseMove: onMouseMove,
                onMouseDown: this.handleMouseDown,
                parentClass: (0, _typestyle.classes)(this.theme.style, _checkboxClasses2.default.parent),
                primaryIcon: primaryIcon,
                primaryIconClass: this.theme.primaryIcon,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            });
        }
    }]);

    return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
    /** Id to parent component */
    id: _propTypes2.default.string,
    /** Classname to parent component */
    className: _propTypes2.default.string,
    /** Toggle Icon*/
    toggleIcon: _propTypes2.default.node,
    /** Toggle container position*/
    togglePosition: _propTypes2.default.oneOf(['left', 'right']),
    /** A label text for Toggle. Can be styled by labelStyle */
    label: _propTypes2.default.string,
    /** An icon before a label */
    primaryIcon: _propTypes2.default.node,
    /** An offset of highlight border in pixels */
    highlightOffset: _propTypes2.default.number,
    /** A height of component that will affect both height and line-height in pixels */
    height: _propTypes2.default.number,
    /** Style for the most outer component */
    style: _reactStyleProptype2.default,
    /** Style for label */
    labelStyle: _reactStyleProptype2.default,
    /** Style for primary icon */
    primaryIconStyle: _reactStyleProptype2.default
};
Checkbox.defaultProps = {
    layout: 'vertical'
};

exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jaGVja2JveC9jaGVja2JveC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRoZW1lIiwiUHJvcFR5cGVzIiwic3R5bGVQcm9wVHlwZSIsIklucHV0QmFzZSIsIlN3aXRjaEJhc2UiLCJnZXRUaGVtZSIsInN0eWxlIiwiX3N0eWxlIiwiY2xhc3NlcyIsIkNMQVNTRVMiLCJDaGVja2JveCIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsIm9uVG9nZ2xlIiwib25DbGljayIsImZvY3VzZWQiLCJzdGF0ZSIsInN0b3BQcm9wYWdhdGlvbiIsInNldFN0YXRlIiwiaGFuZGxlTW91c2VEb3duIiwib25Nb3VzZURvd24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTW91c2VFbnRlciIsImRyYWdGbGFnIiwidGhlbWUiLCJ2YWx1ZSIsImRlZmF1bHQiLCJpZCIsImNsYXNzTmFtZSIsImRpc2FibGVJY29uIiwiaGVpZ2h0IiwiaGlnaGxpZ2h0T2Zmc2V0IiwidG9nZ2xlUG9zaXRpb24iLCJsYWJlbCIsImxhYmVsU3R5bGUiLCJwcmltYXJ5SWNvbiIsInByaW1hcnlJY29uU3R5bGUiLCJ0b2dnbGVJY29uU3R5bGUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VFbnRlciIsImxheW91dCIsInRvZ2dsZWQiLCJoYW5kbGVNb3VzZU92ZXIiLCJwYXJlbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJ0b2dnbGVJY29uIiwibm9kZSIsIm9uZU9mIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVEsQUFBVyxBQUFpQjs7QUFDcEMsQUFBUSxBQUFlOztBQUV2QixBQUFRLEFBQVMsQUFBUTs7QUFFekIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVkO3NDQThCRjs7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QWdCbUIsQUFDZjtrQ0FBb0IsS0FBQSxBQUFLLE1BakI3QixBQWlCbUM7OzhCQWpCbkM7Z0NBREosQUFDSSxBQW9CUDtBQXBCTztBQUNJLGFBREo7Ozs7O0FBeEdXLEE7O0FBQWpCLEEsU0FDSyxBO0FBRUg7UUFBSSxvQkFGVyxBQUVELEFBQ2Q7QUFDQTtlQUFXLG9CQUpJLEFBSU0sQUFDckI7QUFDQTtnQkFBWSxvQkFORyxBQU1PLEFBQ3RCO0FBQ0E7b0JBQWdCLG9CQUFBLEFBQVUsTUFBTSxDQUFBLEFBQUMsUUFSbEIsQUFRQyxBQUFnQixBQUFTLEFBQ3pDO0FBQ0E7V0FBTyxvQkFWUSxBQVVFLEFBQ2pCO0FBQ0E7aUJBQWEsb0JBWkUsQUFZUSxBQUN2QjtBQUNBO3FCQUFpQixvQkFkRixBQWNZLEFBQzNCO0FBQ0E7WUFBUSxvQkFoQk8sQUFnQkcsQUFDbEI7QUFDQTtBQWxCZSxBQWtCUixBQUNQO0FBQ0E7QUFwQmUsQUFvQkgsQUFDWjtBQUNBO0FBdEJlLEFBc0JHLEE7QUF0QkgsQUFDZjtBQUZGLEEsU0EwQkssQTtZLEFBQWUsQUFDVixBQW9HaEI7QUFyRzBCLEFBQ2xCOztrQkFvR1IsQUFBZSIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/checkbox/checkbox.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/checkbox/checkbox.js"); } } })();

/***/ }),

/***/ 405:
false,

/***/ 406:
false,

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(400);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _typestyle = __webpack_require__(395);

var _src = __webpack_require__(413);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/m/Work/sea-urchin/pages/index.js?entry';


(0, _typestyle.cssRaw)('@import url(\'https://fonts.googleapis.com/css?family=Roboto\'); @import url("https://fonts.googleapis.com/icon?family=Material+Icons");');
var fontFamily = {
    roboto: 'Roboto, sans-serif',
    arial: 'Arial' // etc
};

var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index(props) {
        (0, _classCallCheck3.default)(this, Index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

        _this.state = {
            checkboxes1: [{ name: 'A', toggled: true }, { name: 'B', toggled: true }, { name: 'C', toggled: true }, { name: 'D', toggled: true }, { name: 'E', toggled: true }],
            checkboxes2: [{ name: 'A', toggled: true }, {
                name: 'B',
                toggled: true
            }, {
                name: 'C',
                toggled: true
            }, {
                name: 'D',
                toggled: true
            }, {
                name: 'E',
                toggled: true
            }]
        };
        return _this;
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            var _this2 = this,
                _React$createElement;

            return _react2.default.createElement(_src.Grid, {
                container: true,
                className: (0, _typestyle.style)(fontFamily),
                style: {
                    background: 'white'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_src.Grid, {
                container: true,
                xl: {
                    size: 12,
                    alignItems: ['around', 'center'],
                    style: {
                        height: '100%'
                    }
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_src.Grid, {
                container: true,
                parallax: true,
                gap: 100,
                style: {
                    height: 900,
                    backgroundImage: 'url(/static/home-banner.png)'
                },
                xl: {
                    size: 12,
                    gap: 50,
                    alignItems: ['around', 'center']
                },
                lg: {
                    gap: 10,
                    size: 12,
                    alignItems: ['left', 'left']
                },
                sm: {
                    gap: 200,
                    size: 12
                },

                xs: {
                    align: ['center', 'center']
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_src.Grid, {
                container: true,
                xl: 12,
                alignItems: 'center',
                style: {
                    marginBottom: 30,
                    paddingBottom: 60,
                    borderBottom: '1px solid rgb(220,220,220)'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement(_src.Grid, {
                xl: 6,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, 'Getting Started '))), _react2.default.createElement(_src.Grid, {
                container: true,
                xl: 12,
                alignItems: 'center',
                style: {
                    marginBottom: 30,
                    paddingBottom: 60,
                    borderBottom: '1px solid rgb(220,220,220)'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement(_src.Grid, {
                xl: 6,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, 'Grid System '), _react2.default.createElement(_src.Grid, {
                container: true,
                xl: {
                    size: 12,
                    gap: 10
                },
                alignItems: ['between', 'center'],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement(_src.Grid, {
                xl: 6,
                style: {
                    fontSize: 20,
                    background: 'rgb(230,230,230)',
                    padding: 20
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, 'xl = {6}')), _react2.default.createElement(_src.Grid, {
                xl: 6,
                style: {
                    fontSize: 20,
                    background: 'rgb(230,230,230)',
                    padding: 20
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, 'xl = {6}')), _react2.default.createElement(_src.Grid, {
                xl: 4,
                style: {
                    fontSize: 20,
                    background: 'rgb(230,230,230)',
                    padding: 20
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, 'xl = {4}')), _react2.default.createElement(_src.Grid, {
                xl: 4,
                style: {
                    fontSize: 20,
                    background: 'rgb(230,230,230)',
                    padding: 20
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, 'xl = {4}')), _react2.default.createElement(_src.Grid, {
                xl: 4,
                style: {
                    fontSize: 20,
                    background: 'rgb(230,230,230)',
                    padding: 20
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, 'xl = {4}'))))), _react2.default.createElement(_src.Grid, {
                container: true,
                xl: 12,
                alignItems: 'center',
                style: {
                    marginBottom: 30,
                    paddingBottom: 60,
                    borderBottom: '1px solid rgb(220,220,220)'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, _react2.default.createElement(_src.Grid, {
                xl: 6,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                }
            }, 'Text Field'), _react2.default.createElement(_src.InputField, {
                status: false,
                label: 'On the Way to Work?',
                primaryIcon: 'business',
                hint: 'wha',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                }
            }))), _react2.default.createElement(_src.Grid, {
                container: true,
                xl: 12,
                alignItems: 'center',
                style: {
                    marginBottom: 30,
                    paddingBottom: 60,
                    borderBottom: '1px solid rgb(220,220,220)'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            }, _react2.default.createElement(_src.Grid, {
                xl: 6,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                }
            }, 'Smooth Box'), _react2.default.createElement(_src.FluidBox, {
                style: {
                    width: '100%'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                }
            }, _react2.default.createElement(_src.InputField, {
                style: {
                    width: '50%'
                },
                label: 'Find Child Care Services',
                primaryIcon: 'search',
                'default': '4523 Hudson Street, Vancouver, BC',
                hint: 'Find a near by child care services by address',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }), _react2.default.createElement(_src.InputField, {
                style: {
                    width: '50%'
                },
                status: false,
                label: 'On the Way to Work?',
                primaryIcon: 'business',
                hint: 'wha',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            })))), _react2.default.createElement(_src.Grid, {
                container: true,
                xl: 12,
                alignItems: 'center',
                style: {
                    marginBottom: 30,
                    paddingBottom: 60,
                    borderBottom: '1px solid rgb(220,220,220)'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266
                }
            }, _react2.default.createElement(_src.Grid, {
                xl: 6,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 279
                }
            }, 'Select '), _react2.default.createElement(_src.Select, {
                style: {
                    float: 'left'
                },
                status: false,
                label: 'Radius',
                primaryIcon: 'search',
                disableIcon: true,
                defaultValue: 2,
                items: [{ name: '5 km', value: 0 }, { name: '15 km', value: 1 }, { name: '20 km', value: 2 }, { name: '25 km', value: 3 }, { name: '25+ km', value: 4 }],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280
                }
            }), _react2.default.createElement(_src.Select, {
                style: {
                    float: 'left'
                },
                status: false,
                label: 'Radius',
                primaryIcon: 'search',
                layout: 'vertical',
                disableIcon: true,
                defaultValue: 2,
                items: [{ name: '5 km', value: 0 }, { name: '15 km', value: 1 }, { name: '20 km', value: 2 }, { name: '25 km', value: 3 }, { name: '25+ km', value: 4 }],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 297
                }
            }))), _react2.default.createElement(_src.Grid, {
                container: true,
                xl: 12,
                alignItems: 'center',
                style: {
                    marginBottom: 30,
                    paddingBottom: 60,
                    borderBottom: '1px solid rgb(220,220,220)'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 317
                }
            }, _react2.default.createElement(_src.Grid, {
                xl: 6,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 327
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 330
                }
            }, 'Checkbox '), _react2.default.createElement(_src.Checkbox, {
                label: 'Position Left',
                togglePosition: 'left',
                toggled: this.state.test1,
                onToggle: function onToggle() {
                    _this2.toggleShit('test1');
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 331
                }
            }), _react2.default.createElement(_src.Checkbox, (_React$createElement = {
                label: 'Position Right',
                togglePosition: 'right',
                toggled: true
            }, (0, _defineProperty3.default)(_React$createElement, 'toggled', this.state.test2), (0, _defineProperty3.default)(_React$createElement, 'onToggle', function onToggle() {
                _this2.toggleShit('test2');
            }), (0, _defineProperty3.default)(_React$createElement, '__source', {
                fileName: _jsxFileName,
                lineNumber: 339
            }), _React$createElement)), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 348
                }
            }, 'Multuple Checkboxes'), _react2.default.createElement(_src.Checkboxes, {
                data: this.state.checkboxes1,
                togglePosition: 'left',
                onToggle: function onToggle(data) {
                    _this2.setState({ checkboxes1: data });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 349
                }
            }), _react2.default.createElement(_src.Checkboxes, {
                data: this.state.checkboxes2,
                togglePosition: 'left',
                layout: 'horizontal',
                onToggle: function onToggle(data) {
                    _this2.setState({ checkboxes2: data });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 356
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 365
                }
            }, 'Radio Button'), _react2.default.createElement(_src.RadioButton, {
                data: ['Hey', 'Jude', 'Dont', 'Be', 'Afraid'],
                togglePosition: 'left',
                defaultValue: 0,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 366
                }
            })))), _react2.default.createElement(_src.Grid, {
                style: {
                    height: 1000
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 376
                }
            }));
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGUiLCJjc3NSYXciLCJDaGVja2JveCIsIlJhZGlvQnV0dG9uIiwiQ2hlY2tib3hlcyIsIkJ1dHRvbiIsIkRyb3Bkb3duIiwiVGhlbWUiLCJJbnB1dEZpZWxkIiwiTmF2U2VsZWN0IiwiRmx1aWRCb3giLCJTZWxlY3QiLCJHcmlkIiwiZm9udEZhbWlseSIsInJvYm90byIsImFyaWFsIiwiSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tib3hlczEiLCJuYW1lIiwidG9nZ2xlZCIsImNoZWNrYm94ZXMyIiwiYmFja2dyb3VuZCIsInNpemUiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiZ2FwIiwiYWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyQm90dG9tIiwiZm9udFNpemUiLCJwYWRkaW5nIiwid2lkdGgiLCJmbG9hdCIsInZhbHVlIiwidGVzdDEiLCJ0b2dnbGVTaGl0IiwidGVzdDIiLCJkYXRhIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUVmLEFBQVEsQUFBTzs7QUFFZixBQUFRLEFBQVUsQUFBYSxBQUFZLEFBQVEsQUFBVSxBQUFPLEFBQVksQUFBVyxBQUFVLEFBQVEsQUFBVzs7Ozs7OztBQUd4SDtBQUNBLElBQU07WUFBYSxBQUNULEFBQ1I7V0FGaUIsQUFFVixRQUZULEFBQW1CLEFBRUY7QUFGRSxBQUNqQjs7SSxBQUtJO21DQUNKOzttQkFBQSxBQUFhLE9BQU87NENBQUE7O3dJQUFBLEFBQ1osQUFDTjs7Y0FBQSxBQUFLO3lCQUNZLENBQ1QsRUFBQyxNQUFELEFBQU8sS0FBSyxTQURILEFBQ1QsQUFBcUIsUUFDckIsRUFBQyxNQUFELEFBQU8sS0FBSyxTQUZILEFBRVQsQUFBcUIsUUFDckIsRUFBQyxN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QUNsQjt3QkFISixBQUdhLEFBQ1Q7MEJBQVksa0JBQUEsQUFBQyxNQUFTLEFBQ2xCOzJCQUFBLEFBQUssU0FBUyxFQUFDLGFBQWYsQUFBYyxBQUFjLEFBQy9CO0FBTkw7OzhCQUFBO2dDQTdCSixBQTZCSSxBQVNBO0FBVEE7QUFDSSxnQ0FRSixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUF0Q0osQUFzQ0ksQUFDQSxpQ0FBQSxBQUFDO3NCQUNXLENBQUEsQUFBQyxPQUFELEFBQVEsUUFBUixBQUFnQixRQUFoQixBQUF3QixNQURwQyxBQUNZLEFBQThCLEFBQ3RDO2dDQUZKLEFBRXNCLEFBQ2xCOzhCQUhKLEFBR29COzs4QkFIcEI7Z0NBNVRoQixBQVNJLEFBa1FJLEFBVUksQUF1Q0ksQUFVWjtBQVZZO0FBQ0ksbUNBU2hCLEFBQUM7OzRCQUFELEFBQ2EsQUFDRztBQURILEFBQ0w7OzhCQUZSO2dDQXZVTixBQUNFLEFBc1VJLEFBU1A7QUFUTztBQUNJOzs7OztBQTFXTSxBLEFBcVhwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = exports.Checkboxes = exports.Checkbox = exports.Select = exports.NavSelect = exports.InputField = exports.FluidBox = exports.Dropdown = exports.Grid = exports.Button = undefined;

var _textField = __webpack_require__(449);

var _textField2 = _interopRequireDefault(_textField);

var _select = __webpack_require__(441);

var _select2 = _interopRequireDefault(_select);

var _navSelect = __webpack_require__(438);

var _navSelect2 = _interopRequireDefault(_navSelect);

var _dropdown = __webpack_require__(416);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _button = __webpack_require__(414);

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__(444);

var _fluidBox = __webpack_require__(426);

var _fluidBox2 = _interopRequireDefault(_fluidBox);

var _grid = __webpack_require__(428);

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _button2.default;
exports.Grid = _grid2.default;
exports.Dropdown = _dropdown2.default;
exports.FluidBox = _fluidBox2.default;
exports.InputField = _textField2.default;
exports.NavSelect = _navSelect2.default;
exports.Select = _select2.default;
exports.Checkbox = _checkbox.Checkbox;
exports.Checkboxes = _checkbox.Checkboxes;
exports.RadioButton = _checkbox.RadioButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbnB1dEZpZWxkIiwiU2VsZWN0IiwiTmF2U2VsZWN0IiwiRHJvcGRvd24iLCJCdXR0b24iLCJDaGVja2JveCIsIkNoZWNrYm94ZXMiLCJSYWRpb0J1dHRvbiIsIkZsdWlkQm94IiwiR3JpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUF1QixBQUF2Qjs7OztBQUNBLEFBQU8sQUFBUCxBQUFtQixBQUFuQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFzQixBQUF0Qjs7OztBQUNBLEFBQU8sQUFBUCxBQUFxQixBQUFyQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFtQixBQUFuQjs7OztBQUNBLEFBQVEsQUFBUixBQUFrQixBQUFsQixBQUE4QixBQUE5QixBQUFnRCxBQUFoRDs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBaUIsQUFBakIsQUFFQTs7Ozs7O1FBQ0ksQUFESjtRQUVJLEFBRko7UUFHSSxBQUhKO1FBSUksQUFKSjtRQUtJLEFBTEo7UUFNSSxBQU5KO1FBT0ksQUFQSjtRQVFJLEFBUko7UUFTSSxBQVRKO1FBVUksQUFWSiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/index.js"); } } })();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _inputBaseTemplate = __webpack_require__(419);

var _inputBaseTemplate2 = _interopRequireDefault(_inputBaseTemplate);

var _inputBaseHorizontalClasses = __webpack_require__(451);

var _inputBaseHorizontalClasses2 = _interopRequireDefault(_inputBaseHorizontalClasses);

var _inputBaseVerticalClasses = __webpack_require__(448);

var _inputBaseVerticalClasses2 = _interopRequireDefault(_inputBaseVerticalClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputBase = function (_Component) {
    (0, _inherits3.default)(InputBase, _Component);

    function InputBase(props) {
        (0, _classCallCheck3.default)(this, InputBase);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InputBase.__proto__ || (0, _getPrototypeOf2.default)(InputBase)).call(this, props));

        _this.state = {};
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(InputBase, [{
        key: 'handleClick',
        value: function handleClick(event) {
            var _props = this.props,
                focus = _props.focus,
                focused = _props.focused,
                input = _props.input,
                onClick = _props.onClick;

            if (onClick) {
                onClick(event);
            } else {
                if (!focused) {
                    focus();
                    if (input) {
                        input.focus();
                    }
                }
            }
        }
    }, {
        key: 'handleMouseOver',
        value: function handleMouseOver() {
            if (this.props.onMouseOver) this.props.onMouseOver();
            this.setState({ mouseOver: true });
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave() {
            this.setState({ mouseOver: false });
        }
    }, {
        key: 'wrapper',
        value: function wrapper(classNames) {
            return _react2.default.createElement(_inputBaseTemplate2.default, (0, _extends3.default)({}, this.props, {
                mouseOver: this.state.mouseOver,
                handleClick: this.handleClick,
                handleMouseOver: this.handleMouseOver,
                handleMouseLeave: this.handleMouseLeave,
                classNames: classNames
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var layout = this.props.layout;

            switch (layout) {
                case 'vertical':
                    {
                        return this.wrapper(_inputBaseVerticalClasses2.default);
                    }
                case 'horizontal':
                default:
                    {
                        return this.wrapper(_inputBaseHorizontalClasses2.default);
                    }
            }
        }
    }]);

    return InputBase;
}(_react.Component);

exports.default = InputBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9iYXNlL2lucHV0LWJhc2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbnB1dEJhc2VUZW1wbGF0ZSIsIklucHV0QmFzZUhvcml6b250YWxDbGFzc2VzIiwiSW5wdXRCYXNlVmVydGljYWxDbGFzc2VzIiwiSW5wdXRCYXNlIiwicHJvcHMiLCJzdGF0ZSIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJldmVudCIsImZvY3VzIiwiZm9jdXNlZCIsImlucHV0Iiwib25DbGljayIsIm9uTW91c2VPdmVyIiwic2V0U3RhdGUiLCJtb3VzZU92ZXIiLCJjbGFzc05hbWVzIiwiY3JlYXRlRWxlbWVudCIsImxheW91dCIsIndyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBdUI7Ozs7QUFDOUIsQUFBTyxBQUFnQzs7OztBQUN2QyxBQUFPLEFBQThCOzs7Ozs7SUFFL0IsQTt1Q0FFRjs7dUJBQUEsQUFBYSxPQUFPOzRDQUFBOztnSkFBQSxBQUNWLEFBRU47O2NBQUEsQUFBSyxRQUFMLEFBQWEsQUFDYjtjQUFBLEFBQUssY0FBYyxNQUFBLEFBQUssWUFBTCxBQUFpQixLQUFwQyxBQUNBO2NBQUEsQUFBSyxrQkFBa0IsTUFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBQTVDLEFBQ0E7Y0FBQSxBQUFLLG1CQUFtQixNQUFBLEFBQUssaUJBQUwsQUFBc0IsS0FOOUIsQUFNaEI7ZUFDSDs7Ozs7b0NBRVksQSxPQUFPO3lCQU1aLEtBTlksQUFNUDtnQkFOTyxBQUVaLGVBRlksQUFFWjtnQkFGWSxBQUdaLGlCQUhZLEFBR1o7Z0JBSFksQUFJWixlQUpZLEFBSVo7Z0JBSlksQUFLWixpQkFMWSxBQUtaLEFBR0o7O2dCQUFBLEFBQUksU0FBUyxBQUNUO3dCQUFBLEFBQVEsQUFDWDtBQUZELG1CQUVPLEFBQ0g7b0JBQUksQ0FBSixBQUFLLFNBQVMsQUFDVjtBQUNBO3dCQUFBLEFBQUksT0FBTyxBQUNQOzhCQUFBLEFBQU0sQUFDVDtBQUNKO0FBQ0o7QUFDSjs7OzswQ0FFa0IsQUFDZjtnQkFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLGFBQ1gsS0FBQSxBQUFLLE1BQUwsQUFBVyxBQUNmO2lCQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzdCOzs7OzJDQUVtQixBQUNoQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxXQUFmLEFBQWMsQUFBWSxBQUM3Qjs7OztnQ0FFUSxBLFlBQVksQUFDakI7bUNBQ0ksQUFBTSxBQUNGLHNFQUVPLEtBSFgsQUFHZ0I7MkJBQ0csS0FBQSxBQUFLLE1BSnhCLEFBSThCLEFBQ3RCOzZCQUFhLEtBTHJCLEFBSzBCLEFBQ2xCO2lDQUFpQixLQU56QixBQU04QixBQUN0QjtrQ0FBa0IsS0FQMUIsQUFPK0IsQUFDdkI7NEJBVFosQUFDSSxBQVlQO0FBUmUsY0FKUjs7OztpQ0FjRTtnQkFBQSxBQUNDLFNBQVUsS0FEWCxBQUNnQixNQURoQixBQUNDLEFBRVA7O29CQUFBLEFBQVEsQUFDSjtxQkFBQSxBQUFLLEFBQVk7QUFDYjsrQkFBTyxLQUFQLEFBQU8sQUFBSyxBQUFRLEFBQ3ZCO0FBQ0Q7cUJBQUEsQUFBSyxBQUNMO0FBQVM7QUFDTDsrQkFBTyxLQUFQLEFBQU8sQUFBSyxBQUFRLEFBQ3ZCO0FBUEwsQUFTSDs7Ozs7O0FBckVtQixBLEFBeUV4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbnB1dC1iYXNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tL1dvcmsvc2VhLXVyY2hpbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/base/input-base.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/base/input-base.js"); } } })();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _hoverEffect = __webpack_require__(404);

var _hoverEffect2 = _interopRequireDefault(_hoverEffect);

var _themeProvider = __webpack_require__(398);

var _themeProvider2 = _interopRequireDefault(_themeProvider);

var _typestyle = __webpack_require__(395);

var _themeUtil = __webpack_require__(396);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/m/Work/sea-urchin/src/base/input-base-template.js';


var InputBaseTemplate = function (_Component) {
    (0, _inherits3.default)(InputBaseTemplate, _Component);

    function InputBaseTemplate(props) {
        (0, _classCallCheck3.default)(this, InputBaseTemplate);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InputBaseTemplate.__proto__ || (0, _getPrototypeOf2.default)(InputBaseTemplate)).call(this, props));

        if ((0, _themeUtil.checkPathValid)(_themeProvider2.default, 'default')) {
            _this.theme = _themeProvider2.default.default;
        } else {
            _this.theme = {};
        }

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(InputBaseTemplate, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classNames = _props.classNames,
                children = _props.children,
                disableHoverEffect = _props.disableHoverEffect,
                disableIcon = _props.disableIcon,
                focus = _props.focus,
                focused = _props.focused,
                _props$height = _props.height,
                height = _props$height === undefined ? 60 : _props$height,
                _props$highlightOffse = _props.highlightOffset,
                highlightOffset = _props$highlightOffse === undefined ? 0 : _props$highlightOffse,
                hint = _props.hint,
                hintStyle = _props.hintStyle,
                hintClass = _props.hintClass,
                input = _props.input,
                label = _props.label,
                labelClass = _props.labelClass,
                labelFocusedClass = _props.labelFocusedClass,
                labelFocusedStyle = _props.labelFocusedStyle,
                labelParentStyle = _props.labelParentStyle,
                labelStyle = _props.labelStyle,
                layout = _props.layout,
                onClick = _props.onClick,
                preLabel = _props.preLabel,
                primaryIcon = _props.primaryIcon,
                primaryIconStyle = _props.primaryIconStyle,
                primaryIconClass = _props.primaryIconClass,
                value = _props.value,
                parentClass = _props.parentClass,
                preLabelParentClass = _props.preLabelParentClass,
                preLabelClass = _props.preLabelClass,
                postLabel = _props.postLabel,
                postLabelClass = _props.postLabelClass,
                postLabelParentClass = _props.postLabelParentClass,
                mouseOver = _props.mouseOver;

            var blurredAndEmpty = !focused && value == '';
            var focusedAndEmpty = focused && value == '';

            return _react2.default.createElement('div', {
                className: (0, _typestyle.classes)(classNames.parent, parentClass, blurredAndEmpty ? classNames.parentFocused : null),
                onMouseOver: this.props.handleMouseOver,
                onMouseLeave: this.props.handleMouseLeave,
                onClick: this.props.handleClick,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, preLabel ? _react2.default.createElement('span', {
                className: (0, _typestyle.classes)('noselect', classNames.preLabel, preLabelParentClass),
                style: height ? {} : {
                    height: height,
                    lineHeight: height + 'px'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, disableHoverEffect ? '' : _react2.default.createElement(_hoverEffect2.default, { mouseOver: mouseOver, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }), _react2.default.cloneElement(preLabel, (0, _extends3.default)({}, preLabel.props, {
                className: (0, _typestyle.classes)(preLabel.props.className, classNames.preLabel, preLabelClass)
            }))) : '', _react2.default.createElement('div', {
                className: (0, _typestyle.classes)('noselect', classNames.labelParent, blurredAndEmpty ? null : classNames.labelParentFocused),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('i', {
                className: (0, _typestyle.classes)("material-icons", classNames.primaryIcon, primaryIconClass, focused ? classNames.primaryIconFocused : null),
                style: { lineHeight: blurredAndEmpty ? height + 'px' : '' },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, primaryIcon), _react2.default.createElement('span', {
                className: (0, _typestyle.classes)(classNames.label, labelClass, focusedAndEmpty ? labelFocusedClass : null),
                style: { lineHeight: blurredAndEmpty ? height + 'px' : '' },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, label)), postLabel ? _react2.default.createElement('span', {
                className: (0, _typestyle.classes)(classNames.postLabel, postLabelParentClass),
                style: height ? {} : {
                    height: height,
                    lineHeight: height + 'px'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, disableHoverEffect ? '' : _react2.default.createElement(_hoverEffect2.default, { mouseOver: mouseOver, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }), _react2.default.cloneElement(postLabel, (0, _extends3.default)({}, postLabel.props, {
                className: (0, _typestyle.classes)(postLabel.props.className, classNames.preLabel, postLabelClass)
            }))) : '', disableHoverEffect ? '' : _react2.default.createElement(_hoverEffect2.default, { mouseOver: mouseOver, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }), _react2.default.createElement('div', {
                className: (0, _typestyle.classes)(classNames.highlight, focused ? classNames.highlightFocused : null),
                style: {
                    top: highlightOffset,
                    height: height
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }), children);
        }
    }]);

    return InputBaseTemplate;
}(_react.Component);

exports.default = InputBaseTemplate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9iYXNlL2lucHV0LWJhc2UtdGVtcGxhdGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJIb3ZlckVmZmVjdCIsIlRoZW1lIiwic3R5bGUiLCJjbGFzc2VzIiwiY2hlY2tQYXRoVmFsaWQiLCJJbnB1dEJhc2VUZW1wbGF0ZSIsInByb3BzIiwidGhlbWUiLCJkZWZhdWx0Iiwic3RhdGUiLCJjbGFzc05hbWVzIiwiY2hpbGRyZW4iLCJkaXNhYmxlSG92ZXJFZmZlY3QiLCJkaXNhYmxlSWNvbiIsImZvY3VzIiwiZm9jdXNlZCIsImhlaWdodCIsImhpZ2hsaWdodE9mZnNldCIsImhpbnQiLCJoaW50U3R5bGUiLCJoaW50Q2xhc3MiLCJpbnB1dCIsImxhYmVsIiwibGFiZWxDbGFzcyIsImxhYmVsRm9jdXNlZENsYXNzIiwibGFiZWxGb2N1c2VkU3R5bGUiLCJsYWJlbFBhcmVudFN0eWxlIiwibGFiZWxTdHlsZSIsImxheW91dCIsIm9uQ2xpY2siLCJwcmVMYWJlbCIsInByaW1hcnlJY29uIiwicHJpbWFyeUljb25TdHlsZSIsInByaW1hcnlJY29uQ2xhc3MiLCJ2YWx1ZSIsInBhcmVudENsYXNzIiwicHJlTGFiZWxQYXJlbnRDbGFzcyIsInByZUxhYmVsQ2xhc3MiLCJwb3N0TGFiZWwiLCJwb3N0TGFiZWxDbGFzcyIsInBvc3RMYWJlbFBhcmVudENsYXNzIiwibW91c2VPdmVyIiwiYmx1cnJlZEFuZEVtcHR5IiwiZm9jdXNlZEFuZEVtcHR5IiwicGFyZW50IiwicGFyZW50Rm9jdXNlZCIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJoYW5kbGVDbGljayIsImxpbmVIZWlnaHQiLCJjbG9uZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJsYWJlbFBhcmVudCIsImxhYmVsUGFyZW50Rm9jdXNlZCIsInByaW1hcnlJY29uRm9jdXNlZCIsImhpZ2hsaWdodCIsImhpZ2hsaWdodEZvY3VzZWQiLCJ0b3AiXSwibWFwcGluZ3MiOiI7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LEFBQTZDLFVBZnBFLEFBQVcsQUFhSCxBQUVlLEFBQXVEO0FBQWxFLG1CQTdCcEIsQUFnQ2tCLEFBR2Qsb0JBQUEsY0FBQTsyQkFFUSx3QkFBQSxBQUNJLFlBQ0EsV0FGSixBQUVlLGFBQ1gsa0JBQUEsQUFBa0IsT0FBTyxXQUxyQyxBQUVRLEFBR3dDOzs4QkFMaEQ7Z0NBQUEsQUFTSTtBQVRKO0FBQ0ksK0JBUUEsY0FBQTsyQkFDaUIsd0JBQUEsQUFDVCxrQkFDQSxXQUZTLEFBRUUsYUFGRixBQUdULGtCQUNBLFVBQVUsV0FBVixBQUFxQixxQkFMN0IsQUFDaUIsQUFJaUMsQUFFOUM7dUJBQVMsRUFBQyxZQUFZLGtCQUFBLEFBQXFCLGdCQVAvQyxBQU9hLEFBQStDOzs4QkFQNUQ7Z0NBQUEsQUFTSztBQVRMO0FBQ0ksZUFWUixBQVNJLEFBV0EsOEJBQUEsY0FBQTsyQkFFUSx3QkFDSSxXQURKLEFBQ2UsT0FEZixBQUVJLFlBQ0Esa0JBQUEsQUFBa0Isb0JBTDlCLEFBRVEsQUFHMEMsQUFHOUM7dUJBQVMsRUFBQyxZQUFZLGtCQUFBLEFBQXFCLGdCQVIvQyxBQVFhLEFBQStDOzs4QkFSNUQ7Z0NBQUEsQUFVSztBQVZMO0FBQ0ksZUF4RFosQUFtQ0ksQUFvQkksQUFlQSxxQ0FBWSxjQUFBOzJCQUNLLHdCQUFRLFdBQVIsQUFBbUIsV0FEeEIsQUFDSyxBQUE4QixBQUMzQzt1QkFDSSxTQUFBLEFBQVM7NEJBQ0wsQUFFQTtnQ0FBQSxBQUFlLFNBTmYsQUFJQTtBQUFBLEFBQ0E7OzhCQUxBO2dDQUFBLEFBV1A7QUFYTztBQUNSLGFBRFEsdUJBV1AsQUFBcUIscUJBQUssQUFBQyx1Q0FBWSxXQUFiLEFBQTBCOzhCQUExQjtnQ0FYbkIsQUFXbUIsQUFFdkI7QUFGdUI7YUFBQSxtQkFFdkIsQUFBTSxhQUFOLEFBQW1CLHNDQUNaLFVBRFAsQUFDaUI7MkJBQ0Ysd0JBQVEsVUFBQSxBQUFVLE1BQWxCLEFBQXdCLFdBQVcsV0FBbkMsQUFBOEMsVUFmckUsQUFBWSxBQWFKLEFBRWUsQUFBd0Q7QUFBbkUsbUJBckZwQixBQXdGa0IsQUFHWix5QkFBQSxBQUFxQixxQkFBSyxBQUFDLHVDQUFZLFdBQWIsQUFBMEI7OEJBQTFCO2dDQTNGaEMsQUEyRmdDLEFBRTVCO0FBRjRCO2FBQUE7MkJBSXBCLHdCQUNJLFdBREosQUFDZSxXQUNYLFVBQVUsV0FBVixBQUFxQixtQkFKakMsQUFFUSxBQUU0QyxBQUdoRDs7eUJBQVMsQUFDQSxBQUNMOzRCQVRSLEFBT2E7QUFBQSxBQUNMOzs4QkFSUjtnQ0E3RkosQUE2RkksQUFhQztBQWJEO0FBQ0ksZ0JBL0ZaLEFBQ0ksQUE2R1A7Ozs7O0FBbksyQixBLEFBc0toQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbnB1dC1iYXNlLXRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tL1dvcmsvc2VhLXVyY2hpbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/base/input-base-template.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/base/input-base-template.js"); } } })();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Theme = {
    default: {
        size: {},
        style: {
            fontFamily: 'Roboto'
        }
    },
    primary: {
        default: {
            style: {
                label: {
                    color: 'red'
                },
                primaryIcon: {
                    color: 'blue'
                },
                hint: {
                    color: 'purple'
                }
            }
        }
    },
    secondary: {
        default: {
            size: {},
            layout: 'vertical',
            style: {
                label: {
                    color: 'rgb(220,220,220)'
                }
            }
        },
        select: {
            style: {
                primaryIcon: {
                    color: 'rgb(220,220,220)'
                },
                value: {
                    color: 'white'
                }
            }
        },
        toggle: {
            style: {
                primaryIcon: {
                    color: 'rgb(220,220,220)'
                },
                toggleIcon: {
                    color: 'rgb(220,220,220)'
                },
                value: {
                    color: 'white'
                }
            }
        },
        dropdown: {
            style: {
                label: {
                    color: 'rgb(220,220,220)'
                }
            }
        }
    },
    third: {
        default: {
            style: {
                width: '100%',
                marginBottom: 10
            }
        },
        toggle: {
            style: {
                label: {
                    fontSize: 15
                }
            }
        }
    }
};

exports.default = Theme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJUaGVtZSIsImRlZmF1bHQiLCJzaXplIiwic3R5bGUiLCJmb250RmFtaWx5IiwicHJpbWFyeSIsImxhYmVsIiwiY29sb3IiLCJwcmltYXJ5SWNvbiIsImhpbnQiLCJzZWNvbmRhcnkiLCJsYXlvdXQiLCJzZWxlY3QiLCJ2YWx1ZSIsInRvZ2dsZSIsInRvZ2dsZUljb24iLCJkcm9wZG93biIsInRoaXJkIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNOztjQUNPLEFBQ0MsQUFHTjs7d0JBTE0sQUFDRCxBQUlFLEFBQ1MsQUFHcEI7QUFKVyxBQUNIO0FBTEMsQUFDTDs7Ozs7MkJBU1csQUFDSSxBQUNJLEFBRVg7QUFITyxBQUNIOzsyQkFGRCxBQUlVLEFBQ0YsQUFFWDtBQUhhLEFBQ1Q7OzJCQWhCTixBQVNELEFBQ0ksQUFDRSxBQU9HLEFBQ0ssQUFLdkI7QUFOa0IsQUFDRjtBQVJELEFBQ0g7QUFGQyxBQUNMO0FBRkMsQUFDTDs7O2tCQWVTLEFBQ0MsQUFHTjtvQkFKSyxBQUlHLEFBQ1I7OzsyQkFORyxBQUNFLEFBS0UsQUFDSSxBQUNJLEFBSW5CO0FBTGUsQUFDSDtBQUZELEFBQ0g7QUFOQyxBQUNMOzs7OzJCQVdPLEFBQ1UsQUFDRixBQUVYO0FBSGEsQUFDVDs7MkJBZkwsQUFZQyxBQUNHLEFBSUksQUFDSSxBQUluQjtBQUxlLEFBQ0g7QUFMRCxBQUNIO0FBRkEsQUFDSjs7OzsyQkFVTyxBQUNVLEFBQ0YsQUFFWDtBQUhhLEFBQ1Q7OzJCQUZELEFBSVMsQUFDRCxBQUVYO0FBSFksQUFDUjs7MkJBNUJMLEFBc0JDLEFBQ0csQUFPSSxBQUNJLEFBSW5CO0FBTGUsQUFDSDtBQVJELEFBQ0g7QUFGQSxBQUNKOzs7OzJCQS9DRSxBQXdCQyxBQW1DRyxBQUNDLEFBQ0ksQUFDSSxBQUt2QjtBQU5tQixBQUNIO0FBRkQsQUFDSDtBQUZFLEFBQ047QUFwQ0csQUFDUDs7Ozt1QkE0Q1csQUFDSSxBQUNQOzhCQUpKLEFBQ0ssQUFDRSxBQUVXLEFBR3RCO0FBTFcsQUFDSDtBQUZDLEFBQ0w7Ozs7OEJBckVaLEFBQWMsQUFtRUYsQUFPSyxBQUNFLEFBQ0ksQUFDTyxBQU85QjtBQVJ1QixBQUNIO0FBRkQsQUFDSDtBQUZDLEFBQ0w7QUFSQSxBQUNKO0FBcEVNLEFBQ1Y7O2tCQW1GSixBQUFlIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tL1dvcmsvc2VhLXVyY2hpbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/theme.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/theme.js"); } } })();

/***/ }),

/***/ 422:
false,

/***/ 423:
false,

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(400);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _typestyle = __webpack_require__(395);

var _inputBaseVerticalClasses = __webpack_require__(448);

var _inputBaseVerticalClasses2 = _interopRequireDefault(_inputBaseVerticalClasses);

var _hoverEffect = __webpack_require__(404);

var _hoverEffect2 = _interopRequireDefault(_hoverEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/m/Work/sea-urchin/src/base/switch-base.js';


var _CLASSES = {
    base: (0, _typestyle.style)({
        cursor: 'pointer'
    }),
    left: {
        primaryIconParent: (0, _typestyle.style)((0, _defineProperty3.default)({
            borderRight: '1px solid rgb(220,220,220)',
            height: '100%',
            width: 38,
            float: 'left',
            lineHeight: '40px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }, 'float', 'left'))
    },
    right: {
        primaryIconParent: (0, _typestyle.style)((0, _defineProperty3.default)({
            borderLeft: '1px solid rgb(220,220,220)',
            height: '100%',
            width: 38,
            float: 'left',
            lineHeight: '40px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }, 'float', 'right'))
    },
    primaryIcon: (0, _typestyle.style)({
        fontSize: 22,
        opacity: 0,
        borderRadius: 2.5,
        transition: '.1s all'
    }),
    defaultIcon: (0, _typestyle.style)({
        width: 18,
        height: 18,
        background: 'rgb(240,240,240)',
        borderRadius: 2.5,
        transition: '.25s all'
    }),
    primaryIconMouseDown: (0, _typestyle.style)({}),
    primaryIconToggled: (0, _typestyle.style)({
        opacity: 1,
        background: 'none',
        color: 'rgb(60,60,60)'
    }),
    defaultIconMouseDown: (0, _typestyle.style)({
        width: 15,
        height: 15
    }),
    defaultIconToggled: (0, _typestyle.style)({
        background: 'rgb(200,200,200)'
    }),
    label: (0, _typestyle.style)({
        width: 'calc(100% - 38px)',
        lineHeight: '40px',
        paddingLeft: 9,
        paddingRight: 9,
        float: 'left'
    })

};

var SwitchBase = function (_Component) {
    (0, _inherits3.default)(SwitchBase, _Component);

    function SwitchBase(props) {
        (0, _classCallCheck3.default)(this, SwitchBase);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SwitchBase.__proto__ || (0, _getPrototypeOf2.default)(SwitchBase)).call(this, props));

        _this.handleClick = function () {
            var _this$props$onToggle = _this.props.onToggle,
                onToggle = _this$props$onToggle === undefined ? function () {} : _this$props$onToggle;

            onToggle();
        };

        _this.handleMouseMove = function () {
            var onMouseMove = _this.props.onMouseMove;

            if (onMouseMove) onMouseMove();
        };

        _this.handleMouseOver = function () {
            _this.setState({ mouseOver: true });
        };

        _this.handleMouseEnter = function () {
            var onMouseEnter = _this.props.onMouseEnter;

            if (onMouseEnter) {
                onMouseEnter();
            }
        };

        _this.handleMouseLeave = function () {
            _this.setState({ mouseOver: false });
            _this.setState({ mouseDown: false });
            _this.setState({ hoverEffect: false });
        };

        _this.handleMouseDown = function () {
            var onMouseDown = _this.props.onMouseDown;

            if (onMouseDown) onMouseDown();

            _this.setState({ hoverEffect: true });
            if (!_this.props.toggled) _this.setState({ mouseDown: true });
        };

        _this.handleMouseUp = function () {
            _this.setState({ hoverEffect: false });
            _this.setState({ mouseDown: false });
        };

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(SwitchBase, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$onClick = _props.onClick,
                onClick = _props$onClick === undefined ? function () {} : _props$onClick,
                _props$togglePosition = _props.togglePosition,
                togglePosition = _props$togglePosition === undefined ? 'right' : _props$togglePosition,
                parentClass = _props.parentClass;

            return _react2.default.createElement('div', {
                className: (0, _typestyle.classes)(_inputBaseVerticalClasses2.default.parent, _CLASSES.base, parentClass),
                onClick: this.handleClick,
                onMouseMove: this.handleMouseMove,
                onMouseOver: this.handleMouseOver,
                onMouseLeave: this.handleMouseLeave,
                onMouseDown: this.handleMouseDown,
                onMouseUp: this.handleMouseUp,
                onMouseEnter: this.handleMouseEnter,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, _react2.default.createElement('div', {
                className: _CLASSES[togglePosition].primaryIconParent,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, this.props.primaryIcon ? _react2.default.createElement('i', {
                className: (0, _typestyle.classes)("material-icons", _CLASSES.primaryIcon, this.state.mouseDown ? _CLASSES.primaryIconMouseDown : null, this.props.toggled ? _CLASSES.primaryIconToggled : null),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            }, 'check') : _react2.default.createElement('div', {
                className: (0, _typestyle.classes)(_CLASSES.defaultIcon, this.state.mouseDown ? _CLASSES.defaultIconMouseDown : null, this.props.toggled ? _CLASSES.defaultIconToggled : null),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }), _react2.default.createElement(_hoverEffect2.default, { mouseOver: this.state.hoverEffect, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            })), _react2.default.createElement('div', { className: _CLASSES.label, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, this.props.label), _react2.default.createElement(_hoverEffect2.default, { mouseOver: this.state.hoverEffect, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }));
        }
    }]);

    return SwitchBase;
}(_react.Component);

exports.default = SwitchBase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9iYXNlL3N3aXRjaC1iYXNlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGUiLCJjbGFzc2VzIiwiQ0xBU1NFUyIsIkhvdmVyRWZmZWN0IiwiX0NMQVNTRVMiLCJiYXNlIiwiY3Vyc29yIiwibGVmdCIsInByaW1hcnlJY29uUGFyZW50IiwiYm9yZGVyUmlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsImZsb2F0IiwibGluZUhlaWdodCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0IiwiYm9yZGVyTGVmdCIsInByaW1hcnlJY29uIiwiZm9udFNpemUiLCJvcGFjaXR5IiwiYm9yZGVyUmFkaXVzIiwidHJhbnNpdGlvbiIsImRlZmF1bHRJY29uIiwiYmFja2dyb3VuZCIsInByaW1hcnlJY29uTW91c2VEb3duIiwicHJpbWFyeUljb25Ub2dnbGVkIiwiY29sb3IiLCJkZWZhdWx0SWNvbk1vdXNlRG93biIsImRlZmF1bHRJY29uVG9nZ2xlZCIsImxhYmVsIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJTd2l0Y2hCYXNlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIm9uVG9nZ2xlIiwiaGFuZGxlTW91c2VNb3ZlIiwib25Nb3VzZU1vdmUiLCJoYW5kbGVNb3VzZU92ZXIiLCJzZXRTdGF0ZSIsIm1vdXNlT3ZlciIsImhhbmRsZU1vdXNlRW50ZXIiLCJvbk1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwibW91c2VEb3duIiwiaG92ZXJFZmZlY3QiLCJoYW5kbGVNb3VzZURvd24iLCJvbk1vdXNlRG93biIsInRvZ2dsZWQiLCJoYW5kbGVNb3VzZVVwIiwic3RhdGUiLCJvbkNsaWNrIiwidG9nZ2xlUG9zaXRpb24iLCJwYXJlbnRDbGFzcyIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FB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QUFDckIsYUFEcUIsRUFBekIsQUFBeUI7MkJBYWpCLHdCQUNJLFNBREosQUFDYSxhQUNULEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBVyxTQUF0QixBQUErQix1QkFGbkMsQUFFMEQsTUFDdEQsS0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFVLFNBQXJCLEFBQThCLHFCQUxuQyxBQUVDLEFBR3VEOzs4QkFMeEQ7Z0NBZmYsQUFlZSxBQVdYO0FBWFc7QUFDSCxhQURHLG1CQVdYLEFBQUMsdUNBQVksV0FBYSxLQUFBLEFBQUssTUFBL0IsQUFBcUM7OEJBQXJDO2dDQXBDUixBQVVJLEFBMEJJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFNBQUssV0FBYSxTQUFsQixBQUEyQjs4QkFBM0I7Z0NBQUEsQUFDSztBQURMO29CQUNLLEFBQUssTUF2Q2QsQUFzQ0ksQUFDZ0IsQUFFaEIsd0JBQUEsQUFBQyx1Q0FBWSxXQUFhLEtBQUEsQUFBSyxNQUEvQixBQUFxQzs4QkFBckM7Z0NBMUNSLEFBQ0ksQUF5Q0ksQUFHWDtBQUhXOzs7Ozs7QUF2R1MsQSxBQTZHekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic3dpdGNoLWJhc2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL20vV29yay9zZWEtdXJjaGluIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/base/switch-base.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/base/switch-base.js"); } } })();

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(399);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/m/Work/sea-urchin/src/dialog/dialog.js';


var DIALOG_STYLE = {
    position: 'fixed',
    background: 'white',
    boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.08)',
    zIndex: 10,
    boxSizing: 'border-box'
};

var Dialog = function (_Component) {
    (0, _inherits3.default)(Dialog, _Component);

    function Dialog(props) {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this, props));

        _this.getReferenceClientRect = _this.getReferenceClientRect.bind(_this);
        _this.state = { mounted: false };
        return _this;
    }

    (0, _createClass3.default)(Dialog, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {

            if (newProps.focused) {
                if (this.blurTimeout) {
                    clearTimeout(this.blurTimeout);
                    this.blurTimeout = null;
                    this.setState({ mounted: true, focused: true, referenceClientRect: this.getReferenceClientRect() });
                } else {
                    this.setState({ mounted: true, focused: true, referenceClientRect: this.getReferenceClientRect() });
                }
            } else {
                this.setState({ mounted: newProps.focused, referenceClientRect: this.getReferenceClientRect() });
                this.blurTimeout = setTimeout(this.closeDialog.bind(this), 250);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            window.addEventListener('scroll', function () {
                _this2.setState({
                    referenceClientRect: _this2.getReferenceClientRect()
                });
            });

            this.setState({
                referenceClientRect: this.getReferenceClientRect()
            });
        }
    }, {
        key: 'closeDialog',
        value: function closeDialog() {

            this.setState({
                focused: false
            });
        }
    }, {
        key: 'getReferenceClientRect',
        value: function getReferenceClientRect() {
            var _props = this.props,
                dialogReference = _props.dialogReference,
                _props$placement = _props.placement,
                placement = _props$placement === undefined ? ['bottomLeft', 'topLeft'] : _props$placement,
                _props$size = _props.size,
                size = _props$size === undefined ? {} : _props$size;

            if (dialogReference) {

                var targetRect = dialogReference().getBoundingClientRect();
                var dialogRect = this.dialog.getBoundingClientRect();

                var test = (0, _extends3.default)({}, this.setPlacement(placement[0], targetRect));

                switch (placement[1]) {
                    case 'bottomLeft':
                        {
                            return {
                                top: test.top,
                                left: test.left,
                                width: test.width,
                                height: test.height - dialogRect.height
                            };
                        }

                    case 'bottomRight':
                        {
                            return {
                                top: test.top,
                                left: test.left - dialogRect.width,
                                width: test.width,
                                height: test.height - dialogRect.height
                            };
                        }

                    case 'topLeft':
                        {
                            return {
                                top: test.top,
                                left: test.left,
                                width: test.width,
                                height: test.height
                            };
                        }

                    case 'topRight':
                        {
                            return {
                                top: test.top,
                                left: test.left - dialogRect.width,
                                width: test.width,
                                height: test.height
                            };
                        }
                }
            } else {
                return {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                };
            }
        }
    }, {
        key: 'setPlacement',
        value: function setPlacement(placement, clientRect) {
            var _props$size2 = this.props.size,
                size = _props$size2 === undefined ? {} : _props$size2;

            var width = clientRect.width;
            var height = clientRect.height;

            if (size.width && size.width != 'initial') {
                width = size.width;
            }

            if (size.height && size.height != 'initial') {
                height = size.height;
            }

            switch (placement) {
                case 'bottomLeft':
                    {
                        return {
                            top: clientRect.top,
                            left: clientRect.left,
                            width: width,
                            height: height
                        };
                    }

                case 'bottomRight':
                    {
                        return {
                            top: clientRect.top,
                            left: clientRect.left + (size.width ? size.width : clientRect.width),
                            width: width,
                            height: height
                        };
                    }

                case 'topLeft':
                    {
                        return {
                            top: clientRect.top - clientRect.height,
                            left: clientRect.left,
                            width: width,
                            height: height
                        };
                    }

                case 'topRight':
                    {
                        return {
                            top: clientRect.top - clientRect.height,
                            left: clientRect.left + (size.width ? size.width : clientRect.width),
                            width: width,
                            height: height
                        };
                    }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                _props2$dialogOffset = _props2.dialogOffset,
                dialogOffset = _props2$dialogOffset === undefined ? (0, _extends3.default)({ top: 0, left: 0 }, this.props.dialogOffset) : _props2$dialogOffset,
                children = _props2.children,
                style = _props2.style;
            var _state = this.state,
                mounted = _state.mounted,
                focused = _state.focused,
                _state$referenceClien = _state.referenceClientRect,
                referenceClientRect = _state$referenceClien === undefined ? {} : _state$referenceClien;

            console.log(!_lodash2.default.isNaN(referenceClientRect.top + referenceClientRect.height + 1 + dialogOffset.top) ? referenceClientRect.top + referenceClientRect.height + 1 + dialogOffset.top : 0);

            return _react2.default.createElement('div', {
                ref: function ref(dialog) {
                    _this3.dialog = dialog;
                },
                style: (0, _extends3.default)({}, DIALOG_STYLE, {
                    display: focused ? 'inline-block' : 'none',
                    marginTop: mounted ? 0 : -5,
                    opacity: mounted ? 1 : 0,
                    top: !_lodash2.default.isNaN(referenceClientRect.top + referenceClientRect.height + 1 + dialogOffset.top) ? referenceClientRect.top + referenceClientRect.height + 1 + dialogOffset.top : 0,
                    left: referenceClientRect.left,
                    width: referenceClientRect.width,
                    transition: 'marginTop .25s, opacity .25s'
                }, style),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, children);
        }
    }]);

    return Dialog;
}(_react.Component);

exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kaWFsb2cvZGlhbG9nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiXyIsIkRJQUxPR19TVFlMRSIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsInpJbmRleCIsImJveFNpemluZyIsIkRpYWxvZyIsInByb3BzIiwiZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsImJpbmQiLCJzdGF0ZSIsIm1vdW50ZWQiLCJuZXdQcm9wcyIsImZvY3VzZWQiLCJibHVyVGltZW91dCIsImNsZWFyVGltZW91dCIsInNldFN0YXRlIiwicmVmZXJlbmNlQ2xpZW50UmVjdCIsInNldFRpbWVvdXQiLCJjbG9zZURpYWxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaWFsb2dSZWZlcmVuY2UiLCJwbGFjZW1lbnQiLCJzaXplIiwidGFyZ2V0UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRpYWxvZ1JlY3QiLCJkaWFsb2ciLCJ0ZXN0Iiwic2V0UGxhY2VtZW50IiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpZW50UmVjdCIsImRpYWxvZ09mZnNldCIsImNoaWxkcmVuIiwic3R5bGUiLCJjb25zb2xlIiwibG9nIiwiaXNOYU4iLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwib3BhY2l0eSIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07Y0FBZSxBQUNQLEFBQ1Y7Z0JBRmlCLEFBRUwsQUFDWjtlQUhpQixBQUdOLEFBQ1g7WUFKaUIsQUFJVCxBQUNSO2VBTEosQUFBcUIsQUFLTjtBQUxNLEFBQ2pCOztJQU9FLEE7b0NBRUY7O29CQUFBLEFBQWEsT0FBTzs0Q0FBQTs7MElBQUEsQUFDVixBQUNOOztjQUFBLEFBQUsseUJBQXlCLE1BQUEsQUFBSyx1QkFBTCxBQUE0QixLQUEx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QUVFLEFBQXdELEFBQzlEO21DQUhJLEFBSUo7b0NBSkosQUFBUSxBQU1YO0FBTlcsQUFDSjtBQTlCWixBQXFDSDs7Ozs7aUNBRVM7eUJBQUE7OzBCQUtGLEtBTEUsQUFLRzsrQ0FMSCxBQUVGO2dCQUZFLEFBRUYsNkVBQWdCLEtBRmQsQUFFbUIsR0FBRyxNQUZ0QixBQUU0QixLQUFNLEtBQUEsQUFBSyxNQUZ2QyxBQUU2QyxnQkFGN0M7Z0JBQUEsQUFHRixtQkFIRSxBQUdGO2dCQUhFLEFBSUYsZ0JBSkUsQUFJRjt5QkFPQSxLQVhFLEFBV0c7Z0JBWEgsQUFRRixpQkFSRSxBQVFGO2dCQVJFLEFBU0YsaUJBVEUsQUFTRjsrQ0FURSxBQVVGO2dCQVZFLEFBVUYsNERBVkUsQUFVb0IsS0FHMUI7O29CQUFBLEFBQVEsSUFBSSxDQUFDLGlCQUFBLEFBQUUsTUFBTSxvQkFBQSxBQUFvQixNQUFNLG9CQUExQixBQUE4QyxTQUE5QyxBQUF1RCxJQUFLLGFBQXJFLEFBQUMsQUFBaUYsT0FBTyxvQkFBQSxBQUFvQixNQUFNLG9CQUExQixBQUE4QyxTQUE5QyxBQUF1RCxJQUFLLGFBQXJKLEFBQWtLLE1BQTlLLEFBQW9MLEFBRXBMOzttQ0FDSSxjQUFBO3FCQUNXLGFBQUEsQUFBQyxRQUFXLEFBQ2Y7MkJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDakI7QUFITCxBQUlJO2tEQUFBLEFBQ087NkJBQ00sVUFBQSxBQUFVLGlCQUZ2QixBQUV3QyxBQUNwQzsrQkFBVyxVQUFBLEFBQVUsSUFBSSxDQUg3QixBQUc4QixBQUMxQjs2QkFBUyxVQUFBLEFBQVUsSUFKdkIsQUFJMkIsQUFDdkI7eUJBQUssQ0FBQyxpQkFBQSxBQUFFLE1BQU0sb0JBQUEsQUFBb0IsTUFBTSxvQkFBMUIsQUFBOEMsU0FBOUMsQUFBdUQsSUFBSyxhQUFyRSxBQUFDLEFBQWlGLE9BQU8sb0JBQUEsQUFBb0IsTUFBTSxvQkFBMUIsQUFBOEMsU0FBOUMsQUFBdUQsSUFBSyxhQUFySixBQUFrSyxNQUwzSyxBQUtpTCxBQUM3SzswQkFBTSxvQkFOVixBQU04QixBQUMxQjsyQkFBTyxvQkFQWCxBQU8rQixBQUMzQjtnQ0FSSixBQVFnQjtBQU5aLG1CQU5SLEFBSUksQUFTTzs7OEJBYlg7Z0NBQUEsQUFnQks7QUFoQkw7QUFDSSxhQURKLEVBREosQUFDSSxBQW1CUDs7Ozs7QUE1TWdCLEEsQUFnTnJCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/dialog/dialog.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/dialog/dialog.js"); } } })();

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(83);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = __webpack_require__(400);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _iterator2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/core-js/symbol/iterator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _iterator3 = _interopRequireDefault(_iterator2);

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(159);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(443);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _typestyle = __webpack_require__(395);

var _lodash = __webpack_require__(399);

var _lodash2 = _interopRequireDefault(_lodash);

var _gridClasses = __webpack_require__(432);

var _util = __webpack_require__(434);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/m/Work/sea-urchin/src/grid/grid.js';


var Grid = function (_Component) {
    (0, _inherits3.default)(Grid, _Component);

    function Grid(props) {
        (0, _classCallCheck3.default)(this, Grid);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call(this, props));

        _this.createViewWidthIterator = function (object, index) {
            var _this$props = _this.props,
                container = _this$props.container,
                _this$props$spacing = _this$props.spacing,
                spacing = _this$props$spacing === undefined ? {} : _this$props$spacing,
                style = _this$props.style,
                other = (0, _objectWithoutProperties3.default)(_this$props, ['container', 'spacing', 'style']);

            var keys = (0, _keys2.default)(object),
                key = keys[index],
                gap = !_lodash2.default.isNil(spacing[key]) ? spacing[key] : spacing.gap,
                columnSize = _lodash2.default.isPlainObject(other[key]) ? other[key].size : other[key];

            return {
                value: { key: key, value: (0, _gridClasses.work3)(key, {}, gap, columnSize) },
                done: index >= keys.length
            };
        };

        _this.createAlignStyle = function (align, alignItems) {
            var alignStyle = {};

            if (_lodash2.default.isString(alignItems)) {
                alignStyle = {
                    justifyContent: (0, _util.ab)(_gridClasses.ALIGN[alignItems], _gridClasses.ALIGN.left),
                    alignItems: (0, _util.ab)(_gridClasses.ALIGN[alignItems], _gridClasses.ALIGN.top)
                };
            } else if (_lodash2.default.isArray(alignItems)) {
                alignStyle = {
                    justifyContent: (0, _util.ab)(_gridClasses.ALIGN[alignItems[0]], _gridClasses.ALIGN.left),
                    alignItems: (0, _util.ab)(_gridClasses.ALIGN[alignItems[1]], _gridClasses.ALIGN.top)
                };
            }

            return (0, _extends3.default)({ alignSelf: _gridClasses.ALIGN[align] }, alignStyle);
        };

        _this.setParallax = function () {
            var parallax = _this.props.parallax;

            if (_this.parent && parallax) {
                _this.renderParallax();

                window.onscroll = function () {
                    _this.renderParallax();
                };
            }
        };

        _this.display = function () {
            var _this$props2 = _this.props,
                children = _this$props2.children,
                gap = _this$props2.gap,
                _this$props2$lg = _this$props2.lg,
                lg = _this$props2$lg === undefined ? {} : _this$props2$lg,
                _this$props2$md = _this$props2.md,
                md = _this$props2$md === undefined ? {} : _this$props2$md,
                _this$props2$sm = _this$props2.sm,
                sm = _this$props2$sm === undefined ? {} : _this$props2$sm,
                _this$props2$xl = _this$props2.xl,
                xl = _this$props2$xl === undefined ? {} : _this$props2$xl,
                _this$props2$xs = _this$props2.xs,
                xs = _this$props2$xs === undefined ? {} : _this$props2$xs;

            if (!children) {
                return null;
            } else if (_lodash2.default.isString(children)) {
                // Need to send warning
                return children;
            }

            if (children.length) {
                return children.map(function (child, key) {
                    if (_lodash2.default.isString(child)) {
                        // Need to send warning
                        return child;
                    }

                    return _react2.default.cloneElement(child, (0, _extends3.default)({
                        key: key
                    }, child.props, {
                        spacing: {
                            gap: gap,
                            xl: xl.gap,
                            lg: lg.gap,
                            md: md.gap,
                            sm: sm.gap,
                            xs: xs.gap
                        },
                        style: (0, _extends3.default)({}, child.props.style)
                    }));
                });
            } else {
                return _react2.default.cloneElement(children, (0, _extends3.default)({}, children.props, {
                    style: (0, _extends3.default)({}, children.props.style)
                }));
            }
        };

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Grid, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateStyle();
            this.setParallax();
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle() {
            var _props = this.props,
                align = _props.align,
                alignItems = _props.alignItems,
                container = _props.container,
                spacing = _props.spacing,
                style = _props.style;

            var self = this,
                viewWidths = (0, _extends3.default)({}, _gridClasses.VIEW_WIDTHS, (0, _defineProperty3.default)({}, _iterator3.default, function () {
                var _this2 = this;

                var index = 0;

                return {
                    next: function next() {
                        return self.createViewWidthIterator(_this2, index++);
                    }
                };
            }));

            var styles = [_gridClasses.CLASSES[(0, _util.abc)(container, _gridClasses.CONTAINER_TYPE.row, _gridClasses.CONTAINER_TYPE.column)], style];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(viewWidths), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var viewWidth = _step.value;

                    var styleBySize = this.createStyleByColumnName(viewWidth.key);

                    if (styleBySize) {
                        styles.push(styleBySize);
                    }

                    if (spacing) {
                        if (spacing[viewWidth.key]) {
                            styles.push(viewWidth.value);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.setState({
                classNames: _typestyle.style.apply(undefined, styles),
                alignClassName: (0, _typestyle.style)(this.createAlignStyle(align, alignItems))
            });
        }
    }, {
        key: 'createStyleByColumnName',

        /**
        *   Takes name like 'lg', 'md', 'sm', etc. locate media query related to the name and returns style object
        */
        value: function createStyleByColumnName(name) {
            var column = this.props[name];

            if (_lodash2.default.isNumber(column)) {
                return (0, _gridClasses.work3)(name, column.style, null, column);
            } else if (_lodash2.default.isPlainObject(column)) {
                var align = column.align,
                    alignItems = column.alignItems;

                var alignStyle = this.createAlignStyle(align, alignItems);

                if (column || column.style) {
                    return (0, _gridClasses.work3)(name, (0, _extends3.default)({}, column.style, alignStyle), null, column.size);
                } else {
                    return null;
                }
            }
        }

        /**
        *   Align prop is either string or array. If string, it will fed to both 'justifyContnt' and 'alignItems'
        */

    }, {
        key: 'renderParallax',
        value: function renderParallax() {
            var _props$parallaxSpeed = this.props.parallaxSpeed,
                parallaxSpeed = _props$parallaxSpeed === undefined ? 0.2 : _props$parallaxSpeed;

            var yOffset = window.pageYOffset;
            this.parent.style.backgroundPosition = "50% " + yOffset * parallaxSpeed + "px";
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                classNames = _state.classNames,
                alignClassName = _state.alignClassName;

            return _react2.default.createElement('div', {
                className: (0, _typestyle.classes)(alignClassName, classNames),
                ref: function ref(a) {
                    _this3.parent = a;
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, this.display(), _react2.default.createElement('div', {
                style: {
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    background: 'rgba(0,0,0,0.5)',
                    display: this.props.disabled ? 'inline' : 'none'
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }));
        }
    }]);

    return Grid;
}(_react.Component);

exports.default = Grid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ncmlkL2dyaWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJzdHlsZSIsIl9zdHlsZSIsImNsYXNzZXMiLCJtZWRpYSIsImNyZWF0ZVR5cGVTdHlsZSIsIl8iLCJDTEFTU0VTIiwiQUxJR04iLCJ3b3JrMyIsIlZJRVdfV0lEVEhTIiwiQ09OVEFJTkVSX1RZUEUiLCJhYiIsImFiYyIsIkdyaWQiLCJwcm9wcyIsImNyZWF0ZVZpZXdXaWR0aEl0ZXJhdG9yIiwib2JqZWN0IiwiaW5kZXgiLCJjb250YWluZXIiLCJzcGFjaW5nIiwib3RoZXIiLCJrZXlzIiwia2V5IiwiZ2FwIiwiaXNOaWwiLCJjb2x1bW5TaXplIiwiaXNQbGFpbk9iamVjdCIsInNpemUiLCJ2YWx1ZSIsImRvbmUiLCJsZW5ndGgiLCJjcmVhdGVBbGlnblN0eWxlIiwiYWxpZ24iLCJhbGlnbkl0ZW1zIiwiYWxpZ25TdHlsZSIsImlzU3RyaW5nIiwianVzdGlmeUNvbnRlbnQiLCJsZWZ0IiwidG9wIiwiaXNBcnJheSIsImFsaWduU2VsZiIsInNldFBhcmFsbGF4IiwicGFyYWxsYXgiLCJwYXJlbnQiLCJyZW5kZXJQYXJhbGxheCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwiZGlzcGxheSIsImNoaWxkcmVuIiwibGciLCJtZCIsInNtIiwieGwiLCJ4cyIsIm1hcCIsImNoaWxkIiwiY2xvbmVFbGVtZW50Iiwic3RhdGUiLCJ1cGRhdGVTdHlsZSIsInNlbGYiLCJ2aWV3V2lkdGhzIiwibmV4dCIsInN0eWxlcyIsInJvdyIsImNvbHVtbiIsInZpZXdXaWR0aCIsInN0eWxlQnlTaXplIiwiY3JlYXRlU3R5bGVCeUNvbHVtbk5hbWUiLCJwdXNoIiwic2V0U3RhdGUiLCJjbGFzc05hbWVzIiwiYWxpZ25DbGFzc05hbWUiLCJuYW1lIiwiaXNOdW1iZXIiLCJwYXJhbGxheFNwZWVkIiwieU9mZnNldCIsInBhZ2VZT2Zmc2V0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYSIsIndpZHRoIiwi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QUFtQixPQUFuQixBQUEwQixNQUFqQyxBQUFPLEFBQWdDLEFBQzFDO0FBRkQsbUJBRU8sSUFBSSxpQkFBQSxBQUFFLGNBQU4sQUFBSSxBQUFnQixTQUFTO29CQUFBLEFBQ3pCLFFBRHlCLEFBQ0osT0FESSxBQUN6QjtvQkFEeUIsQUFDbEIsYUFEa0IsQUFDSixPQURJLEFBQ2xCLEFBQ2Q7O29CQUFNLGFBQWEsS0FBQSxBQUFLLGlCQUFMLEFBQXNCLE9BQXpDLEFBQW1CLEFBQTZCLEFBRWhEOztvQkFBSSxVQUFVLE9BQWQsQUFBcUIsT0FBTyxBQUN4QjsyQkFBTyx3QkFBQSxBQUFNLGlDQUFVLE9BQWhCLEFBQXVCLE9BQXZCLEFBQWlDLGFBQWpDLEFBQThDLE1BQU0sT0FBM0QsQUFBTyxBQUEyRCxBQUNyRTtBQUZELHVCQUVPLEFBQ0g7MkJBQUEsQUFBTyxBQUNWO0FBQ0o7QUFDSjtBQUVEOzs7Ozs7Ozt5Q0FtQ2tCO3VDQUdWLEtBSFUsQUFHTCxNQUhLLEFBRVY7Z0JBRlUsQUFFVixxREFGVSxBQUVNLE1BR3BCOztnQkFBSSxVQUFVLE9BQWQsQUFBcUIsQUFDckI7aUJBQUEsQUFBSyxPQUFMLEFBQVksTUFBWixBQUFrQixxQkFBcUIsU0FBVSxVQUFWLEFBQW9CLGdCQUEzRCxBQUE0RSxBQUMvRTs7OztpQ0F1RFM7eUJBQUE7O3lCQUMrQixLQUQvQixBQUNvQztnQkFEcEMsQUFDQyxvQkFERCxBQUNDO2dCQURELEFBQ2Esd0JBRGIsQUFDYSxBQUVuQjs7bUNBQ0ksY0FBQTsyQkFDaUIsd0JBQUEsQUFBUSxnQkFEekIsQUFDaUIsQUFBd0IsQUFDckM7cUJBQU8sYUFBQSxBQUFDLEdBQU0sQUFBQzsyQkFBQSxBQUFLLFNBQUwsQUFBYyxBQUFFO0FBRm5DOzs4QkFBQTtnQ0FBQSxBQUlLO0FBSkw7QUFDSSxhQURKLE9BQUEsQUFJSyxBQUFLLEFBQ047OzJCQUNhLEFBQ0UsQUFDUDs0QkFGSyxBQUVHLEFBQ1I7eUJBSEssQUFHQSxBQUNMOzBCQUpLLEFBSUMsQUFDTjs4QkFMSyxBQUtLLEFBQ1Y7Z0NBTkssQUFNTyxBQUNaOzZCQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixXQVJ2QyxBQUNhLEFBT3FDO0FBUHJDLEFBQ0w7OzhCQUZSO2dDQU5SLEFBQ0ksQUFLSSxBQWFYO0FBYlc7QUFDSTs7Ozs7QUFoTUQsQSxBQStNbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/grid/grid.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/grid/grid.js"); } } })();

/***/ }),

/***/ 430:
false,

/***/ 431:
false,

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CONTAINER_TYPE = exports.ALIGN = exports.work3 = exports.WIDTHS = exports.VIEW_WIDTHS = exports.CLASSES = undefined;

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _typestyle = __webpack_require__(395);

var _lodash = __webpack_require__(399);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN = 1;
var MAX = 12;
var WIDTHS = {};

function calculateWidths() {

    for (var i = MIN; i <= MAX; i += .5) {

        WIDTHS[i] = _lodash2.default.round(i, 1) / MAX * 100 + '%';
    }
}

calculateWidths();

var VIEW_WIDTHS = {
    xl: { minWidth: 1200 },
    lg: { minWidth: 992, maxWidth: 1199 },
    md: { minWidth: 768, maxWidth: 991 },
    sm: { minWidth: 576, maxWidth: 767 },
    xs: { maxWidth: 575 }
};

function work3(target) {
    var _style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var gap = arguments[2];
    var exists = arguments[3];

    var temp = {};

    if (exists) {

        return (0, _typestyle.media)((0, _extends3.default)({}, VIEW_WIDTHS[target]), (0, _extends3.default)({}, _style, {
            width: !_lodash2.default.isNil(gap) ? 'calc(' + WIDTHS[exists] + ' - ' + gap + 'px)' : WIDTHS[exists]
        }));
    } else {

        return (0, _typestyle.media)((0, _extends3.default)({}, VIEW_WIDTHS[target]), (0, _extends3.default)({}, _style, {
            width: !_lodash2.default.isNil(gap) ? 'calc(' + WIDTHS[12] + ' - ' + gap + 'px)' : WIDTHS[12]
        }));
    }

    return temp;
}

var BASE_STYLE = {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box'
};

var CLASSES = {

    row: (0, _extends3.default)({}, BASE_STYLE, {
        flexDirection: 'row'
    }),
    column: (0, _extends3.default)({}, BASE_STYLE, {
        flexDirection: 'column'
    })
};

var CONTAINER_TYPE = { row: 'row', column: 'column' };

var ALIGN = {
    left: 'flex-start',
    right: 'flex-end',
    top: 'flex-start',
    bottom: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    even: 'space-evenly'
};

exports.CLASSES = CLASSES;
exports.VIEW_WIDTHS = VIEW_WIDTHS;
exports.WIDTHS = WIDTHS;
exports.work3 = work3;
exports.ALIGN = ALIGN;
exports.CONTAINER_TYPE = CONTAINER_TYPE;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ncmlkL2dyaWQtY2xhc3Nlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZSIsImNsYXNzZXMiLCJtZWRpYSIsIl8iLCJNSU4iLCJNQVgiLCJXSURUSFMiLCJjYWxjdWxhdGVXaWR0aHMiLCJpIiwicm91bmQiLCJWSUVXX1dJRFRIUyIsInhsIiwibWluV2lkdGgiLCJsZyIsIm1heFdpZHRoIiwibWQiLCJzbSIsInhzIiwid29yazMiLCJ0YXJnZXQiLCJfc3R5bGUiLCJnYXAiLCJleGlzdHMiLCJ0ZW1wIiwid2lkdGgiLCJpc05pbCIsIkJBU0VfU1RZTEUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImJveFNpemluZyIsIkNMQVNTRVMiLCJyb3ciLCJmbGV4RGlyZWN0aW9uIiwiY29sdW1uIiwiQ09OVEFJTkVSX1RZUEUiLCJBTElHTiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImNlbnRlciIsImJldHdlZW4iLCJhcm91bmQiLCJldmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQVEsQUFBTyxBQUFTOztBQUN4QixBQUFPOzs7Ozs7QUFFUCxJQUFNLE1BQU4sQUFBWTtBQUNaLElBQU0sTUFBTixBQUFZO0FBQ1osSUFBTSxTQUFOLEFBQWU7O0FBRWYsU0FBQSxBQUFTLGtCQUFtQixBQUV4Qjs7U0FBSyxJQUFJLElBQVQsQUFBYSxLQUFLLEtBQWxCLEFBQXVCLEtBQUssS0FBNUIsQUFBaUMsSUFBSSxBQUVqQzs7ZUFBQSxBQUFPLEtBQVEsaUJBQUEsQUFBRSxNQUFGLEFBQVEsR0FBUixBQUFXLEtBQVgsQUFBYyxNQUE3QixBQUFtQyxNQUV0QztBQUVKOzs7QUFFRDs7QUFFQSxJQUFNO1FBQ0UsRUFBQyxVQURXLEFBQ1osQUFBVSxBQUNkO1FBQUksRUFBQyxVQUFELEFBQVUsS0FBSyxVQUZILEFBRVosQUFBeUIsQUFDN0I7UUFBSSxFQUFDLFVBQUQsQUFBVSxLQUFLLFVBSEgsQUFHWixBQUF5QixBQUM3QjtRQUFJLEVBQUMsVUFBRCxBQUFVLEtBQUssVUFKSCxBQUlaLEFBQXlCLEFBQzdCO1FBQUksRUFBQyxVQUxULEFBQW9CLEFBS1osQUFBVztBQUxDLEFBQ2hCOztBQVFKLFNBQUEsQUFBUyxNQUFULEFBQWdCLFFBQWtDO1FBQTFCLEFBQTBCLDZFQUFqQixBQUFpQjs7UUFBYixBQUFhLGdCQUFBO1FBQVIsQUFBUSxtQkFDOUM7O1FBQU0sT0FBTixBQUFhLEFBRWI7O1FBQUEsQUFBSSxRQUFRLEFBRVI7O2dFQUFpQixZQUFWLEFBQVUsQUFBWSxxQ0FBdEIsQUFDQTttQkFDSSxDQUFDLGlCQUFBLEFBQUUsTUFBSCxBQUFDLEFBQVEsaUJBQWUsT0FBeEIsQUFBd0IsQUFBTyxrQkFBL0IsQUFBNEMsY0FBWSxPQUZuRSxBQUFPLEFBRTRELEFBQU8sQUFHN0U7QUFITyxVQUZHO0FBRlgsV0FPTyxBQUVIOztnRUFBaUIsWUFBVixBQUFVLEFBQVkscUNBQXRCLEFBQ0E7bUJBQ0ksQ0FBQyxpQkFBQSxBQUFFLE1BQUgsQUFBQyxBQUFRLGlCQUFlLE9BQXhCLEFBQXdCLEFBQU8sY0FBL0IsQUFBd0MsY0FBWSxPQUYvRCxBQUFPLEFBRXdELEFBQU8sQUFHekU7QUFITyxVQUZHO0FBT1g7O1dBQUEsQUFBTyxBQUNWOzs7QUFHRCxJQUFNO1dBQWEsQUFDUixBQUNQO2NBRmUsQUFFTCxBQUNWO2FBSGUsQUFHTixBQUNUO2NBSmUsQUFJTCxBQUNWO2VBTEosQUFBbUIsQUFLSjtBQUxJLEFBQ2Y7O0FBT0osSUFBTTs7b0NBRUYsQUFDTzt1QkFISyxBQUVaLEFBRW1CLEFBRW5CO0FBRkk7dUNBRUosQUFDTzt1QkFQWCxBQUFnQixBQU1aLEFBRW1CO0FBQWY7QUFSUSxBQUVaOztBQVVKLElBQU0saUJBQWlCLEVBQUMsS0FBRCxBQUFNLE9BQU8sUUFBcEMsQUFBdUIsQUFBcUI7O0FBRTVDLElBQU07VUFBUSxBQUNKLEFBQ047V0FGVSxBQUVILEFBQ1A7U0FIVSxBQUdMLEFBQ0w7WUFKVSxBQUlGLEFBQ1I7WUFMVSxBQUtGLEFBQ1I7YUFOVSxBQU1ELEFBQ1Q7WUFQVSxBQU9GLEFBQ1I7VUFSSixBQUFjLEFBUUosQUFHVjtBQVhjLEFBQ1Y7O1FBVUosQUFBUTtRQUFSLEFBQWlCO1FBQWpCLEFBQThCO1FBQTlCLEFBQXNDO1FBQXRDLEFBQTZDO1FBQTdDLEFBQW9EIiwiZmlsZSI6ImdyaWQtY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/grid/grid-classes.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/grid/grid-classes.js"); } } })();

/***/ }),

/***/ 433:
false,

/***/ 435:
false,

/***/ 436:
false,

/***/ 437:
false,

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(443);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStyleProptype = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-style-proptype\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _typestyle = __webpack_require__(395);

var _themeUtil = __webpack_require__(396);

var _base = __webpack_require__(397);

var _dialog = __webpack_require__(407);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/m/Work/sea-urchin/src/select/select.js';


var STYLES = {
    parent: (0, _typestyle.style)({
        cursor: 'pointer'
    }),
    option: (0, _typestyle.style)({
        border: 'none',
        bottom: 0,
        boxSizing: 'border-box',
        color: 'rgb(60,60,60)',
        cursor: 'pointer',
        float: 'left',
        fontSize: 15,
        height: 40,
        lineHeight: '40px',
        outline: 'none',
        padding: '0 9px 0 9px',
        position: 'relative',
        transition: 'all .25s',
        width: '100%',
        zIndex: 5,
        background: 'white',
        $nest: {
            '&:hover': { background: 'rgb(238,238,238)' }
        }
    }),
    optionFocus: (0, _typestyle.style)({
        background: 'rgb(238,238,238)'
    }),
    optionOn: (0, _typestyle.style)({
        background: 'rgb(220,220,220)'
    }),
    input: (0, _typestyle.style)({
        opacity: 0,
        position: 'absolute'
    }),
    hide: (0, _typestyle.style)({
        opacity: 0
    }),
    vertical: {
        dialogReference: (0, _typestyle.style)({
            background: 'none',
            border: 'none',
            boxSizing: 'border-box',
            color: 'rgb(60,60,60)',
            float: 'left',
            fontSize: 13,
            height: 40,
            lineHeight: '40px',
            marginLeft: 9,
            marginRight: 9,
            outline: 'none',
            textAlign: 'left',
            top: 0,
            zIndex: 5
        })
    },
    horizontal: {
        dialogReference: (0, _typestyle.style)({
            background: 'none',
            border: 'none',
            bottom: 0,
            boxSizing: 'border-box',
            color: 'rgb(60,60,60)',
            float: 'left',
            fontSize: 15,
            height: 36,
            lineHeight: '36px',
            marginLeft: 9,
            outline: 'none',
            position: 'absolute',
            width: 'calc(100% - 18px)',
            zIndex: 5
        })
    },
    item: {}
};

function applyVars(dictionary) {
    var el = document.body;
    for (var name in dictionary) {
        if (dictionary.hasOwnProperty) {
            el.style.setProperty(name, dictionary[name]);
        }
    }
}

var Select = function (_Component) {
    (0, _inherits3.default)(Select, _Component);

    function Select(props) {
        (0, _classCallCheck3.default)(this, Select);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

        var _this$props$defaultVa = _this.props.defaultValue,
            defaultValue = _this$props$defaultVa === undefined ? -1 : _this$props$defaultVa;

        _this.state = {
            value: defaultValue,
            hoveredItems: []
        };

        _this.theme = (0, _themeUtil.getTheme)(_this, 'select');
        _this.handleParentClick = _this.handleParentClick.bind(_this);
        _this.handleInputKeyDown = _this.handleInputKeyDown.bind(_this);
        _this.handleInputOnFocus = _this.handleInputOnFocus.bind(_this);
        _this.handleItemOnClick = _this.handleItemOnClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Select, [{
        key: 'handleParentClick',
        value: function handleParentClick(event) {
            var focused = this.state.focused;

            event.stopPropagation();

            if (!focused) {
                this.setState({ focused: true });
                this.refs.select.focus();
            }
        }
    }, {
        key: 'handleInputKeyDown',
        value: function handleInputKeyDown(event) {
            var items = this.props.items;
            var _state = this.state,
                hoveredItems = _state.hoveredItems,
                value = _state.value;

            var itemsLength = items.length;
            var hoveredItemsLength = hoveredItems.length;

            switch (event.keyCode) {
                // On up arrow key
                case 38:
                    {
                        event.preventDefault(); // We don't want to prevent all default
                        if (hoveredItemsLength == 0) {
                            this.setState({ hoveredItems: [value] });
                        } else {
                            if (hoveredItems[0] - 1 >= 0) this.setState({ hoveredItems: [hoveredItems[0] - 1] });else this.setState({ hoveredItems: [itemsLength - 1] });
                        }
                        break;
                    }
                // On down arrow key
                case 40:
                    {
                        event.preventDefault();
                        if (hoveredItemsLength == 0) this.setState({ hoveredItems: [value] });else this.setState({ hoveredItems: [(hoveredItems[0] + 1) % itemsLength] });
                        break;
                    }
                // On enter key
                case 13:
                    {
                        event.preventDefault();
                        if (hoveredItems[0] != null) this.setState({ value: hoveredItems[0] });
                        this.blurInput(0);
                    }
            }
        }
    }, {
        key: 'handleInputOnFocus',
        value: function handleInputOnFocus() {
            if (this.blurTimeout) {
                clearTimeout(this.blurTimeout);
                this.blurTimeout = null;
            }
            this.setState({ focused: true });
        }
    }, {
        key: 'handleItemOnClick',
        value: function handleItemOnClick(event, key) {
            event.stopPropagation();
            this.setState({ value: key });
            this.refs.select.blur();
        }
    }, {
        key: 'blurInput',
        value: function blurInput(timeout) {
            var _this2 = this;

            this.blurTimeout = setTimeout(function () {
                _this2.setState({ focused: false });
                _this2.blurTimeout = null;
            }, timeout);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                dialogOffset = _props.dialogOffset,
                dialogReference = _props.dialogReference,
                highlightOffset = _props.highlightOffset,
                items = _props.items,
                layout = _props.layout,
                other = (0, _objectWithoutProperties3.default)(_props, ['dialogOffset', 'dialogReference', 'highlightOffset', 'items', 'layout']);

            var _state2 = this.state,
                value = _state2.value,
                focused = _state2.focused,
                hoveredItems = _state2.hoveredItems;

            var _layout = 'horizontal';

            if (layout) {
                _layout = layout;
            } else {
                if (this.theme.layout) {
                    _layout = this.theme.layout;
                }
            }

            var valueClass = void 0;
            switch (_layout) {
                case 'vertical':
                    {
                        valueClass = STYLES.vertical.dialogReference;
                        break;
                    }
                case 'horizontal':
                default:
                    {
                        valueClass = STYLES.horizontal.dialogReference;
                    }
            }

            return _react2.default.createElement(_base.InputBase, (0, _extends3.default)({
                focus: function focus() {
                    _this3.setState({ focused: true });
                },
                focused: focused,
                hintClass: this.theme.hint,
                labelClass: this.theme.label,
                layout: _layout,
                onClick: this.handleParentClick,
                parentClass: (0, _typestyle.classes)(STYLES.parent, this.theme.style),
                primaryIconClass: this.theme.primaryIcon,
                value: value > -1
            }, other, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            }), _react2.default.createElement('span', {
                ref: function ref(dialogReference) {
                    _this3.dialogReference = dialogReference;
                },
                className: (0, _typestyle.classes)(valueClass, focused || value > -1 ? null : STYLES.hide, this.theme.value),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                }
            }, value > -1 ? items[value].name : null), _react2.default.createElement(_dialog2.default, {
                focused: focused,
                blurred: this.blurTimeout,
                dialogReference: dialogReference ? dialogReference() : function () {
                    return _this3.dialogReference.parentNode;
                } /* if specific reference is not given, reference is always the parentNode of the clicked element*/
                , dialogOffset: dialogOffset,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, items.map(function (item, key) {
                var itemHovered = hoveredItems.indexOf(key);

                return _react2.default.createElement('div', {
                    key: key,
                    value: key,
                    className: (0, _typestyle.classes)('noselect', STYLES.option, item.value == value ? STYLES.optionOn : null, itemHovered > -1 ? STYLES.optionFocus : null),
                    onClick: function onClick(event) {
                        _this3.handleItemOnClick(event, key);
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 264
                    }
                }, item.name);
            })), _react2.default.createElement('input', {
                className: STYLES.input,
                onBlur: function onBlur() {
                    _this3.blurInput(250);
                },
                onFocus: this.handleInputOnFocus,
                onKeyDown: this.handleInputKeyDown,
                ref: 'select',
                value: '',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                }
            }));
        }
    }]);

    return Select;
}(_react.Component);

Select.defaultProps = {
    items: []
};

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZWxlY3Qvc2VsZWN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3R5bGVQcm9wVHlwZSIsInN0eWxlIiwiY2xhc3NlcyIsImdldFRoZW1lIiwiSW5wdXRCYXNlIiwiRGlhbG9nIiwiU1RZTEVTIiwicGFyZW50IiwiY3Vyc29yIiwib3B0aW9uIiwiYm9yZGVyIiwiYm90dG9tIiwiYm94U2l6aW5nIiwiY29sb3IiLCJmbG9hdCIsImZvbnRTaXplIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsIm91dGxpbmUiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwiJG5lc3QiLCJvcHRpb25Gb2N1cyIsIm9wdGlvbk9uIiwiaW5wdXQiLCJvcGFjaXR5IiwiaGlkZSIsInZlcnRpY2FsIiwiZGlhbG9nUmVmZXJlbmNlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidGV4dEFsaWduIiwidG9wIiwiaG9yaXpvbnRhbCIsIml0ZW0iLCJhcHBseVZhcnMiLCJkaWN0aW9uYXJ5IiwiZWwiLCJkb2N1bWVudCIsImJvZHkiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsIlNlbGVjdCIsInByb3BzIiwiZGVmYXVsdFZhbHVlIiwic3RhdGUiLCJ2YWx1ZSIsImhvdmVyZWRJdGVtcyIsInRoZW1lIiwiaGFuZGxlUGFyZW50Q2xpY2siLCJiaW5kIiwiaGFuZGxlSW5wdXRLZXlEb3duIiwiaGFuZGxlSW5wdXRPbkZvY3VzIiwiaGFuZGxlSXRlbU9uQ2xpY2siLCJldmVudCIsImZvY3VzZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRTdGF0ZSIsInJlZnMiLCJzZWxlY3QiLCJmb2N1cyIsIml0ZW1zIiwiaXRlbXNMZW5ndGgiLCJsZW5ndGgiLCJob3ZlcmVkSXRlbXNMZW5ndGgiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJibHVySW5wdXQiLCJibHVyVGltZW91dCIsImNsZWFyVGltZW91dCIsImtleSIsImJsdXIiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImRpYWxvZ09mZnNldCIsImhpZ2hsaWdodE9mZnNldCIsImxheW91dCIsIm90aGVyIiwiX2xheW91dCIsInZhbHVlQ2xhc3MiLCJoaW50IiwibGFiZWwiLCJwcmltYXJ5SWNvbiIsInBhcmVudE5vZGUiLCJtYXAiLCJpdGVtSG92ZXJlZCIsImluZGV4T2YiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVEsQUFBTzs7QUFFZixBQUFRLEFBQWU7O0FBQ3ZCLEFBQVEsQUFBZ0I7O0FBQ3hCLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBR25CLElBQU07O2dCQUFTLEFBQ0gsQUFBTSxBQUNGLEFBRVo7QUFIYyxBQUNWLEtBREk7O2dCQUdNLEFBQ0YsQUFDUjtnQkFGVSxBQUVGLEFBQ1I7bUJBSFUsQUFHQyxBQUNYO2VBSlUsQUFJSCxBQUNQO2dCQUxVLEFBS0YsQUFDUjtlQU5VLEFBTUgsQUFDUDtrQkFQVSxBQU9BLEFBQ1Y7Z0JBUlUsQUFRRixBQUNSO29CQVRVLEFBU0UsQUFDWjtpQkFWVSxBQVVELEFBQ1Q7aUJBWFUsQUFXRCxBQUNUO2tCQVpVLEFBWUEsQUFDVjtvQkFiVSxBQWFFLEFBQ1o7ZUFkVSxBQWNGLEFBQ1I7Z0JBZlUsQUFlRCxBQUNUO29CQWhCVSxBQWdCRSxBQUNaOzt1QkFDZSxFQUFFLFlBdEJWLEFBSUgsQUFBTSxBQWlCSCxBQUNRLEFBQWMsQUFHakM7QUFKVyxBQUNIO0FBbEJNLEFBQ1YsS0FESTs7b0JBSkcsQUF5QkcsQUFBTSxBQUNKLEFBRWhCO0FBSG9CLEFBQ2hCLEtBRFU7O29CQXpCSCxBQTRCQSxBQUFNLEFBQ0QsQUFFaEI7QUFIaUIsQUFDYixLQURPOztpQkFHRSxBQUNBLEFBQ1Q7a0JBakNPLEFBK0JK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LEFBQTBCLGNBSDVILEFBR2lCLEFBQXlILEFBQ3RJOzZCQUFXLGlCQUFBLEFBQUMsT0FBVSxBQUFDOytCQUFBLEFBQUssa0JBQUwsQUFBdUIsT0FBdkIsQUFBOEIsQUFBSztBQUo5RDs7a0NBQUE7b0NBQUEsQUFNSztBQU5MO0FBQ0ksaUJBREosT0FESixBQUNJLEFBTVUsQUFHakI7QUF0Q2IsQUFrQkksQUFPUSxBQWdCUjsyQkFDaUIsT0FEakIsQUFDd0IsQUFDcEI7d0JBQVUsa0JBQU0sQUFBQzsyQkFBQSxBQUFLLFVBQUwsQUFBZSxBQUFNO0FBRjFDLEFBR0k7eUJBQVcsS0FIZixBQUdvQixBQUNoQjsyQkFBYSxLQUpqQixBQUlzQixBQUNsQjtxQkFMSixBQUtVLEFBQ047dUJBTkosQUFNYTs7OEJBTmI7Z0NBMUNSLEFBQ0ksQUF5Q0ksQUFVWDtBQVZXO0FBQ0k7Ozs7O0EsQUFqTEM7O0FBQWYsQSxPQUVLLEE7VyxBQUFlLEFBQ1gsQUEwTGY7QUEzTDBCLEFBQ2xCOztrQkEwTFIsQUFBZSIsImZpbGUiOiJzZWxlY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL20vV29yay9zZWEtdXJjaGluIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/select/select.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/select/select.js"); } } })();

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typestyle = __webpack_require__(395);

var CLASSES = {
    parent: (0, _typestyle.style)({
        border: '1px solid rgb(220,220,220)',
        boxSizing: 'border-box',
        float: 'left',
        height: 40,
        position: 'relative',
        transition: 'all .25s',
        margin: '-1px 0 0 -1px'
    }),
    labelParent: (0, _typestyle.style)({
        float: 'left',
        height: 40,
        marginLeft: 9,
        marginRight: 9
    }),
    primaryIcon: (0, _typestyle.style)({
        float: 'left',
        fontSize: 13,
        color: 'rgb(150,150,150)',
        height: '100%',
        lineHeight: '40px',
        transition: 'all .25s'
    }),
    label: (0, _typestyle.style)({
        float: 'left',
        fontSize: 13,
        height: '100%',
        lineHeight: '40px',
        transition: 'all .25s',
        textOverflow: 'ellipsis'
    }),
    highlight: (0, _typestyle.style)({
        height: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 0,
        position: 'absolute',
        borderBottom: '2px solid rgb(160,160,160)',
        transition: 'all .25s'
    }),
    preLabel: (0, _typestyle.style)({
        position: 'relative',
        fontSize: 13,
        height: '100%',
        lineHeight: '40px',
        float: 'left'
    }),
    postLabel: (0, _typestyle.style)({
        fontSize: 13,
        height: '100%',
        lineHeight: '40px',
        float: 'right'
    })
};

exports.default = CLASSES;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9iYXNlL2lucHV0LWJhc2UtdmVydGljYWwtY2xhc3Nlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZSIsIkNMQVNTRVMiLCJwYXJlbnQiLCJib3JkZXIiLCJib3hTaXppbmciLCJmbG9hdCIsImhlaWdodCIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsIm1hcmdpbiIsImxhYmVsUGFyZW50IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicHJpbWFyeUljb24iLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsImxhYmVsIiwidGV4dE92ZXJmbG93IiwiaGlnaGxpZ2h0IiwibGVmdCIsInRyYW5zZm9ybSIsInpJbmRleCIsImJvcmRlckJvdHRvbSIsInByZUxhYmVsIiwicG9zdExhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFROztBQUVSLElBQU07O2dCQUNZLEFBQ0YsQUFDUjttQkFGVSxBQUVDLEFBQ1g7ZUFIVSxBQUdILEFBQ1A7Z0JBSlUsQUFJRixBQUNSO2tCQUxVLEFBS0EsQUFDVjtvQkFOVSxBQU1FLEFBQ1o7Z0JBUlEsQUFDSixBQUFNLEFBT0YsQUFFWjtBQVRjLEFBQ1YsS0FESTs7ZUFTVyxBQUNSLEFBQ1A7Z0JBRmUsQUFFUCxBQUNSO29CQUhlLEFBR0gsQUFDWjtxQkFkUSxBQVVDLEFBQU0sQUFJRixBQUVqQjtBQU5tQixBQUNmLEtBRFM7O2VBTU0sQUFDUixBQUNQO2tCQUZlLEFBRUwsQUFDVjtlQUhlLEFBR1IsQUFDUDtnQkFKZSxBQUlQLEFBQ1I7b0JBTGUsQUFLSCxBQUNaO29CQXRCUSxBQWdCQyxBQUFNLEFBTUgsQUFFaEI7QUFSbUIsQUFDZixLQURTOztlQVFBLEFBQ0YsQUFDUDtrQkFGUyxBQUVDLEFBQ1Y7Z0JBSFMsQUFHRCxBQUNSO29CQUpTLEFBSUcsQUFDWjtvQkFMUyxBQUtHLEFBQ1o7c0JBOUJRLEFBd0JMLEFBQU0sQUFNSyxBQUVsQjtBQVJhLEFBQ1QsS0FERzs7Z0JBUVUsQUFDTCxBQUNSO2NBRmEsQUFFUCxBQUNOO21CQUhhLEFBR0YsQUFDWDtnQkFKYSxBQUlMLEFBQ1I7a0JBTGEsQUFLSCxBQUNWO3NCQU5hLEFBTUMsQUFDZDtvQkF2Q1EsQUFnQ0QsQUFBTSxBQU9ELEFBRWhCO0FBVGlCLEFBQ2IsS0FETzs7a0JBU0ssQUFDRixBQUNWO2tCQUZZLEFBRUYsQUFDVjtnQkFIWSxBQUdKLEFBQ1I7b0JBSlksQUFJQSxBQUNaO2VBOUNRLEFBeUNGLEFBQU0sQUFLTCxBQUVYO0FBUGdCLEFBQ1osS0FETTs7a0JBT08sQUFDSCxBQUNWO2dCQUZhLEFBRUwsQUFDUjtvQkFIYSxBQUdELEFBQ1o7ZUFwRFIsQUFBZ0IsQUFnREQsQUFBTSxBQUlOLEFBSWY7QUFScUIsQUFDYixLQURPO0FBaERDLEFBQ1o7O2tCQXVESixBQUFlIiwiZmlsZSI6ImlucHV0LWJhc2UtdmVydGljYWwtY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/base/input-base-vertical-classes.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/base/input-base-vertical-classes.js"); } } })();

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputField = __webpack_require__(450);

var _inputField2 = _interopRequireDefault(_inputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _inputField2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90ZXh0LWZpZWxkL2luZGV4LmpzIl0sIm5hbWVzIjpbIklucHV0RmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUF1QixBQUF2QixBQUVBLEFBQWUsQUFBZiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbS9Xb3JrL3NlYS11cmNoaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/text-field/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/text-field/index.js"); } } })();

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(52);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStyleProptype = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-style-proptype\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _typestyle = __webpack_require__(395);

var _base = __webpack_require__(397);

var _themeUtil = __webpack_require__(396);

var _textFieldClasses = __webpack_require__(452);

var _textFieldClasses2 = _interopRequireDefault(_textFieldClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/m/Work/sea-urchin/src/text-field/input-field.js';


var InputField = function (_Component) {
    (0, _inherits3.default)(InputField, _Component);

    function InputField(props) {
        (0, _classCallCheck3.default)(this, InputField);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InputField.__proto__ || (0, _getPrototypeOf2.default)(InputField)).call(this, props));

        _this.handleClick = function (event) {
            if (typeof _this.input.selectionStart === "number") {
                _this.input.selectionStart = _this.input.selectionEnd = _this.input.value.length;
            } else if (typeof _this.input.createTextRange !== "undefined") {
                var range = _this.input.createTextRange();
                range.collapse(false);
                range.select();
            }

            _this.input.focus();
        };

        _this.focus = function () {
            _this.setState({ focused: true });
            if (_this.props.setFluidFocus) _this.props.setFluidFocus(_this.props.fluidIndex);
        };

        _this.blur = function () {
            _this.setState({ focused: false });
        };

        _this.handleMouseOver = function () {
            var onMouseOver = _this.props.onMouseOver;

            if (onMouseOver) onMouseOver();
        };

        _this.theme = (0, _themeUtil.getTheme)(_this, 'textInput');
        _this.state = { value: _this.props.default };
        return _this;
    }

    (0, _createClass3.default)(InputField, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.theme = (0, _themeUtil.getTheme)(this, 'textInput');
        }

        /**
        *   Following will force the text cursor to be at the end of the text when focused
        *   "event.stopPropagation()" is added on input onClick event.
        */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var hint = this.props.hint;
            var _state = this.state,
                focused = _state.focused,
                _state$value = _state.value,
                value = _state$value === undefined ? '' : _state$value;

            return _react2.default.createElement(_base.InputBase, (0, _extends3.default)({
                focus: this.focus,
                focused: focused,
                value: value,
                onClick: this.handleClick,
                hintClass: this.theme.hint,
                labelClass: this.theme.label,
                parentClass: this.theme.style,
                primaryIconClass: this.theme.primaryIcon
            }, this.props, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }), _react2.default.createElement('div', {
                className: (0, _typestyle.classes)(_textFieldClasses2.default.hint, this.theme.hint, focused && value == '' ? null : _textFieldClasses2.default.hintHide),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, hint), _react2.default.createElement('input', {
                className: (0, _typestyle.classes)(_textFieldClasses2.default.input, this.test),
                ref: function ref(input) {
                    _this2.input = input;
                },
                onBlur: this.blur,
                onChange: function onChange(e) {
                    _this2.setState({ value: e.target.value });
                },
                onClick: function onClick(e) {
                    e.stopPropagation();
                },
                onFocus: this.focus,
                value: value,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }));
        }
    }]);

    return InputField;
}(_react.Component);

InputField.propTypes = {
    /** Id to parent component */
    id: _propTypes2.default.string,
    /** Classname to parent component */
    className: _propTypes2.default.string,
    /** A label text for TextInput. Can be styled by labelStyle */
    label: _propTypes2.default.string,
    /** A hint text for TextInput. Can be styled by hintStyle */
    hint: _propTypes2.default.string,
    /** An icon before a label */
    primaryIcon: _propTypes2.default.node,
    /** An offset of highlight border in pixels */
    highlightOffset: _propTypes2.default.number,
    /** A height of component that will affect both height and line-height in pixels */
    height: _propTypes2.default.number,
    /** Classname that will be inserted to the most outer component */
    style: _reactStyleProptype2.default,
    /** Style for label */
    labelStyle: _reactStyleProptype2.default,
    /** Style for hint */
    hintStyle: _reactStyleProptype2.default,
    /** Style for primary icon */
    primaryIconStyle: _reactStyleProptype2.default
};

exports.default = InputField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90ZXh0LWZpZWxkL2lucHV0LWZpZWxkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3R5bGVQcm9wVHlwZSIsInN0eWxlIiwiY2xhc3NlcyIsIklucHV0QmFzZSIsImdldFRoZW1lIiwiQ0xBU1NFUyIsIklucHV0RmllbGQiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJpbnB1dCIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwidmFsdWUiLCJsZW5ndGgiLCJjcmVhdGVUZXh0UmFuZ2UiLCJyYW5nZSIsImNvbGxhcHNlIiwic2VsZWN0IiwiZm9jdXMiLCJzZXRTdGF0ZSIsImZvY3VzZWQiLCJzZXRGbHVpZEZvY3VzIiwiZmx1aWRJbmRleCIsImJsdXIiLCJoYW5kbGVNb3VzZU92ZXIiLCJvbk1vdXNlT3ZlciIsInRoZW1lIiwic3RhdGUiLCJkZWZhdWx0IiwiaGludCIsImxhYmVsIiwicHJpbWFyeUljb24iLCJoaW50SGlkZSIsInRlc3QiLCJlIiwidGFyZ2V0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcFR5cGVzIiwiaWQiLCJzdHJpbmciLCJjbGFzc05hbWUiLCJub2RlIiwiaGlnaGxpZ2h0T2Zmc2V0IiwibnVtYmVyIiwiaGVpZ2h0IiwibGFiZWxTdHlsZSIsImhpbnRTdHlsZSIsInByaW1hcnlJY29uU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUSxBQUFPOztBQUVmLEFBQVEsQUFBZ0I7O0FBQ3hCLEFBQVEsQUFBZTs7QUFFdkIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVkO3dDQTJCRjs7d0JBQUEsQUFBYSxPQUFPOzRDQUFBOztrSkFBQSxBQUNWOztjQURVLEFBZXBCLGNBQWMsVUFBQSxBQUFDLE9BQVUsQUFDckI7Z0JBQUksT0FBTyxNQUFBLEFBQUssTUFBWixBQUFrQixtQkFBdEIsQUFBeUMsVUFBVSxBQUMvQztzQkFBQSxBQUFLLE1BQUwsQUFBVyxpQkFBaUIsTUFBQSxBQUFLLE1BQUwsQUFBVyxlQUFlLE1BQUEsQUFBSyxNQUFMLEFBQVcsTUFBakUsQUFBdUUsQUFDMUU7QUFGRCxtQkFFTyxJQUFJLE9BQU8sTUFBQSxBQUFLLE1BQVosQUFBa0Isb0JBQXRCLEFBQTBDLGFBQWEsQUFDMUQ7b0JBQUksUUFBUSxNQUFBLEFBQUssTUFBakIsQUFBWSxBQUFXLEFBQ3ZCO3NCQUFBLEFBQU0sU0FBTixBQUFlLEFBQ2Y7c0JBQUEsQUFBTSxBQUNUO0FBRUQ7O2tCQUFBLEFBQUssTUFBTCxBQUFXLEFBQ2Q7QUF6Qm1COztjQUFBLEFBMkJwQixRQUFRLFlBQU0sQUFDVjtrQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBVSxBQUN4QjtnQkFBSSxNQUFBLEFBQUssTUFBVCxBQUFlLGVBQ1gsTUFBQSxBQUFLLE1BQUwsQUFBVyxjQUFjLE1BQUEsQUFBSyxNQUE5QixBQUFvQyxBQUMzQztBQS9CbUI7O2NBQUEsQUFpQ3BCLE9BQU8sWUFBTSxBQUNUO2tCQUFBLEFBQUssU0FBUyxFQUFDLFNBQWYsQUFBYyxBQUFVLEFBQzNCO0FBbkNtQjs7Y0FBQSxBQXFDcEIsa0JBQWtCLFlBQU07Z0JBQUEsQUFDYixjQUFlLE1BREYsQUFDTyxNQURQLEFBQ2IsQUFFUDs7Z0JBQUEsQUFBSSxhQUNBLEFBQ1A7QUExQ21CLEFBR2hCOztjQUFBLEFBQUssUUFBUSxnQ0FBYixBQUFhLEFBQWUsQUFDNUI7Y0FBQSxBQUFLLFFBQVEsRUFBQyxPQUFPLE1BQUEsQUFBSyxNQUpWLEFBSWhCLEFBQWEsQUFBbUI7ZUFDbkM7Ozs7OzRDQUVvQixBQUNqQjtpQkFBQSxBQUFLLFFBQVEseUJBQUEsQUFBUyxNQUF0QixBQUFhLEFBQWUsQUFDL0I7QUFFRDs7Ozs7Ozs7O2lDQWlDVTt5QkFBQTs7Z0JBQUEsQUFDQyxPQUFRLEtBRFQsQUFDYyxNQURkLEFBQ0M7eUJBSUgsS0FMRSxBQUtHO2dCQUxILEFBR0YsaUJBSEUsQUFHRjtzQ0FIRSxBQUlGO2dCQUpFLEFBSUYscUNBSkUsQUFJTSxLQUdaOzttQ0FDSSxBQUFDO3VCQUNZLEtBRGIsQUFDa0IsQUFDZDt5QkFGSixBQUVlLEFBQ1g7dUJBSEosQUFHYSxBQUNUO3lCQUFXLEtBSmYsQUFJb0IsQUFDaEI7MkJBQWEsS0FBQSxBQUFLLE1BTHRCLEFBSzRCLEFBQ3hCOzRCQUFjLEtBQUEsQUFBSyxNQU52QixBQU02QixBQUN6Qjs2QkFBZSxLQUFBLEFBQUssTUFQeEIsQUFPOEIsQUFDMUI7a0NBQW9CLEtBQUEsQUFBSyxNQVI3QixBQVFtQztBQVAvQixlQVFJLEtBVFIsQUFTYTs7OEJBVGI7Z0NBQUEsQUFZSTtBQVpKO0FBQUEsY0FBQSxrQkFZSSxjQUFBOzJCQUVRLHdCQUNJLDJCQURKLEFBQ1ksTUFDUixLQUFBLEFBQUssTUFGVCxBQUVlLE1BQ1gsV0FBVyxTQUFYLEFBQW9CLEtBQXBCLEFBQXlCLE9BQU8sMkJBTDVDLEFBRVEsQUFHNEM7OzhCQUxwRDtnQ0FBQSxBQVNLO0FBVEw7QUFDSSxlQWJSLEFBWUksQUFXQTsyQkFDaUIsd0JBQVEsMkJBQVIsQUFBZ0IsT0FBTyxLQUR4QyxBQUNpQixBQUE0QixBQUN6QztxQkFBTyxhQUFBLEFBQUMsT0FBVSxBQUFDOzJCQUFBLEFBQUssUUFBTCxBQUFhLEFBQU87QUFGM0MsQUFHSTt3QkFBVSxLQUhkLEFBR21CLEFBQ2Y7MEJBQVkscUJBQUssQUFBQzsyQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUEsQUFBRSxPQUF4QixBQUFjLEFBQWlCLEFBQVM7QUFKOUQsQUFLSTt5QkFBVyxvQkFBSyxBQUFDO3NCQUFBLEFBQUUsQUFBbUI7QUFMMUMsQUFNSTt5QkFBVyxLQU5mLEFBTW9CLEFBQ2hCO3VCQVBKLEFBT2E7OzhCQVBiO2dDQXhCUixBQUNJLEFBdUJJLEFBV1g7QUFYVztBQUNJOzs7OztBLEFBdkdLOztBQUFuQixBLFdBRUssQTtBQUVIO1FBQUksb0JBRlcsQUFFRCxBQUNkO0FBQ0E7ZUFBVyxvQkFKSSxBQUlNLEFBQ3JCO0FBQ0E7V0FBTyxvQkFOUSxBQU1FLEFBQ2pCO0FBQ0E7VUFBTSxvQkFSUyxBQVFDLEFBQ2hCO0FBQ0E7aUJBQWEsb0JBVkUsQUFVUSxBQUN2QjtBQUNBO3FCQUFpQixvQkFaRixBQVlZLEFBQzNCO0FBQ0E7WUFBUSxvQkFkTyxBQWNHLEFBQ2xCO0FBQ0E7QUFoQmUsQUFnQlIsQUFDUDtBQUNBO0FBbEJlLEFBa0JILEFBQ1o7QUFDQTtBQXBCZSxBQW9CSixBQUNYO0FBQ0E7QUF0QmUsQUFzQkcsQSxBQTRGMUI7QUFsSHVCLEFBQ2Y7O2tCQWlIUixBQUFlIiwiZmlsZSI6ImlucHV0LWZpZWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tL1dvcmsvc2VhLXVyY2hpbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/text-field/input-field.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/text-field/input-field.js"); } } })();

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typestyle = __webpack_require__(395);

var CLASSES = {
    parent: (0, _typestyle.style)({
        border: '1px solid rgb(220,220,220)',
        boxSizing: 'border-box',
        float: 'left',
        height: 60,
        position: 'relative',
        transition: 'all .25s',
        width: '100%',
        margin: '-1px 0 0 -1px',
        paddingTop: 7.5
    }),
    parentFocused: (0, _typestyle.style)({
        paddingTop: 0
    }),
    labelParent: (0, _typestyle.style)({
        paddingLeft: 5,
        paddingRight: 5,
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        $nest: {
            '&>*:first-child': {
                fontSize: 25,
                width: 30,
                height: '100%',
                float: 'left'
            },
            '&>*:last-child': {
                fontSize: 15,
                height: '100%',
                width: 'calc(100% - 30px)',
                float: 'left'
            }
        }
    }),
    labelParentFocused: (0, _typestyle.style)({
        width: '100%',
        height: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        $nest: {
            '&>*:first-child': {
                fontSize: 13,
                width: 18,
                height: '100%',
                float: 'left'
            },
            '&>*:last-child': {
                fontSize: 13,
                height: '100%',
                width: 'calc(100% - 20px)',
                float: 'left'
            }
        }

    }),
    primaryIcon: (0, _typestyle.style)({
        color: 'rgb(150,150,150)',
        float: 'left',
        transition: 'all .25s',
        lineHeight: '14px',
        height: 14,
        width: 20
    }),
    label: (0, _typestyle.style)({
        float: 'left',
        height: 'calc(100% - 20px)',
        lineHeight: '13px',
        transition: 'all .25s',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '80%',
        color: 'rgb(20,20,20)'
    }),
    highlight: (0, _typestyle.style)({
        borderBottom: '2px solid rgb(160,160,160)',
        height: 60,
        left: 0,
        position: 'absolute',
        transition: 'all .25s',
        zIndex: 1,
        boxSizing: 'border-box',
        width: 0
    }),
    highlightFocused: (0, _typestyle.style)({
        width: '100%'
    }),
    preLabel: (0, _typestyle.style)({
        fontSize: 13,
        height: '100%',
        lineHeight: '60px',
        float: 'left',
        position: 'relative'
    }),
    postLabel: (0, _typestyle.style)({
        fontSize: 13,
        height: '100%',
        lineHeight: '60px',
        float: 'right'
    })
};

exports.default = CLASSES;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9iYXNlL2lucHV0LWJhc2UtaG9yaXpvbnRhbC1jbGFzc2VzLmpzIl0sIm5hbWVzIjpbInN0eWxlIiwiQ0xBU1NFUyIsInBhcmVudCIsImJvcmRlciIsImJveFNpemluZyIsImZsb2F0IiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nVG9wIiwicGFyZW50Rm9jdXNlZCIsImxhYmVsUGFyZW50IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCIkbmVzdCIsImZvbnRTaXplIiwibGFiZWxQYXJlbnRGb2N1c2VkIiwicHJpbWFyeUljb24iLCJjb2xvciIsImxpbmVIZWlnaHQiLCJsYWJlbCIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsImhpZ2hsaWdodCIsImJvcmRlckJvdHRvbSIsImxlZnQiLCJ6SW5kZXgiLCJoaWdobGlnaHRGb2N1c2VkIiwicHJlTGFiZWwiLCJwb3N0TGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVE7O0FBRVIsSUFBTTs7Z0JBQ1ksQUFDRixBQUNSO21CQUZVLEFBRUMsQUFDWDtlQUhVLEFBR0gsQUFDUDtnQkFKVSxBQUlGLEFBQ1I7a0JBTFUsQUFLQSxBQUNWO29CQU5VLEFBTUUsQUFDWjtlQVBVLEFBT0gsQUFDUDtnQkFSVSxBQVFGLEFBQ1I7b0JBVlEsQUFDSixBQUFNLEFBU0UsQUFFaEI7QUFYYyxBQUNWLEtBREk7O29CQURJLEFBWUksQUFBTSxBQUNOLEFBRWhCO0FBSHNCLEFBQ2xCLEtBRFk7O3FCQUdHLEFBQ0YsQUFDYjtzQkFGZSxBQUVELEFBQ2Q7bUJBSGUsQUFHSixBQUNYO2VBSmUsQUFJUixBQUNQO2dCQUxlLEFBS1AsQUFDUjs7OzBCQUN1QixBQUNMLEFBQ1Y7dUJBRmUsQUFFUixBQUNQO3dCQUhlLEFBR1AsQUFDUjt1QkFMRCxBQUNnQixBQUlSLEFBRVg7QUFObUIsQUFDZjs7MEJBS2MsQUFDSixBQUNWO3dCQUZjLEFBRU4sQUFDUjt1QkFIYyxBQUdQLEFBQ1A7dUJBaENBLEFBZUMsQUFBTSxBQU1SLEFBT2UsQUFJUCxBQUluQjtBQVIwQixBQUNkO0FBUkQsQUFDSDtBQVBXLEFBQ2YsS0FEUzs7ZUFxQmEsQUFDZixBQUNQO2dCQUZzQixBQUVkLEFBQ1I7cUJBSHNCLEFBR1QsQUFDYjtzQkFKc0IsQUFJUixBQUNkOzs7MEJBQ3VCLEFBQ0wsQUFDVjt1QkFGZSxBQUVSLEFBQ1A7d0JBSGUsQUFHUCxBQUNSO3VCQUxELEFBQ2dCLEFBSVIsQUFFWDtBQU5tQixBQUNmOzswQkFLYyxBQUNKLEFBQ1Y7d0JBRmMsQUFFTixBQUNSO3VCQUhjLEFBR1AsQUFDUDt1QkFwREEsQUFvQ1EsQUFBTSxBQUtmLEFBT2UsQUFJUCxBQUtuQjtBQVQwQixBQUNkO0FBUkQsQUFDSDs7QUFOa0IsQUFDdEIsS0FEZ0I7O2VBcUJELEFBQ1IsQUFDUDtlQUZlLEFBRVIsQUFDUDtvQkFIZSxBQUdILEFBQ1o7b0JBSmUsQUFJSCxBQUNaO2dCQUxlLEFBS1AsQUFDUjtlQS9EUSxBQXlEQyxBQUFNLEFBTVIsQUFFWDtBQVJtQixBQUNmLEtBRFM7O2VBUUEsQUFDRixBQUNQO2dCQUZTLEFBRUQsQUFDUjtvQkFIUyxBQUdHLEFBQ1o7b0JBSlMsQUFJRyxBQUNaO3NCQUxTLEFBS0ssQUFDZDtvQkFOUyxBQU1HLEFBQ1o7a0JBUFMsQUFPQyxBQUNWO2VBUlMsQUFRRixBQUNQO2VBMUVRLEFBaUVMLEFBQU0sQUFTRixBQUVYO0FBWGEsQUFDVCxLQURHOztzQkFXVSxBQUViO2dCQUZhLEFBRUwsQUFDUjtjQUhhLEFBR1AsQUFDTjtrQkFKYSxBQUlILEFBQ1Y7b0JBTGEsQUFLRCxBQUNaO2dCQU5hLEFBTUwsQUFDUjttQkFQYSxBQU9GLEFBQ1g7ZUFwRlEsQUE0RUQsQUFBTSxBQVFOLEFBRVg7QUFWaUIsQUFDYixLQURPOztlQTVFQyxBQXNGTSxBQUFNLEFBQ2IsQUFFWDtBQUh3QixBQUNwQixLQURjOztrQkFHRixBQUNGLEFBQ1Y7Z0JBRlksQUFFSixBQUNSO29CQUhZLEFBR0EsQUFDWjtlQUpZLEFBSUwsQUFDUDtrQkE5RlEsQUF5RkYsQUFBTSxBQUtGLEFBRWQ7QUFQZ0IsQUFDWixLQURNOztrQkFPTyxBQUNILEFBQ1Y7Z0JBRmEsQUFFTCxBQUNSO29CQUhhLEFBR0QsQUFDWjtlQXBHUixBQUFnQixBQWdHRCxBQUFNLEFBSU4sQUFJZjtBQVJxQixBQUNiLEtBRE87QUFoR0MsQUFDWjs7a0JBdUdKLEFBQWUiLCJmaWxlIjoiaW5wdXQtYmFzZS1ob3Jpem9udGFsLWNsYXNzZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL20vV29yay9zZWEtdXJjaGluIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/base/input-base-horizontal-classes.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/base/input-base-horizontal-classes.js"); } } })();

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typestyle = __webpack_require__(395);

var CLASSES = {
    input: (0, _typestyle.style)({
        background: 'none',
        border: 'none',
        bottom: 0,
        boxSizing: 'border-box',
        color: 'rgb(60,60,60)',
        float: 'left',
        fontSize: 15,
        height: 36,
        marginLeft: 9,
        outline: 'none',
        position: 'absolute',
        width: 'calc(100% - 18px)',
        zIndex: 5
    }),
    hint: (0, _typestyle.style)({
        bottom: 0,
        color: 'rgb(180,180,180)',
        height: 36,
        left: 9,
        lineHeight: '36px',
        position: 'absolute',
        transition: 'all .25s',
        width: 'calc(100% - 18px)',
        zIndex: 0,
        display: 'inline',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        boxSizing: 'border-box'
    }),
    hintHide: (0, _typestyle.style)({
        display: 'none'
    })
};

exports.default = CLASSES;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90ZXh0LWZpZWxkL3RleHQtZmllbGQtY2xhc3Nlcy5qcyJdLCJuYW1lcyI6WyJzdHlsZSIsIkNMQVNTRVMiLCJpbnB1dCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3R0b20iLCJib3hTaXppbmciLCJjb2xvciIsImZsb2F0IiwiZm9udFNpemUiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0Iiwib3V0bGluZSIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJoaW50IiwibGVmdCIsImxpbmVIZWlnaHQiLCJ0cmFuc2l0aW9uIiwiZGlzcGxheSIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsImhpbnRIaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFROztBQUVSLElBQU07O29CQUNXLEFBQ0csQUFDWjtnQkFGUyxBQUVELEFBQ1I7Z0JBSFMsQUFHRCxBQUNSO21CQUpTLEFBSUUsQUFDWDtlQUxTLEFBS0YsQUFDUDtlQU5TLEFBTUYsQUFDUDtrQkFQUyxBQU9DLEFBQ1Y7Z0JBUlMsQUFRRCxBQUNSO29CQVRTLEFBU0csQUFDWjtpQkFWUyxBQVVBLEFBQ1Q7a0JBWFMsQUFXQyxBQUNWO2VBWlMsQUFZRixBQUNQO2dCQWRRLEFBQ0wsQUFBTSxBQWFELEFBRVo7QUFmYSxBQUNULEtBREc7O2dCQWVLLEFBQ0EsQUFDUjtlQUZRLEFBRUQsQUFDUDtnQkFIUSxBQUdBLEFBQ1I7Y0FKUSxBQUlGLEFBQ047b0JBTFEsQUFLSSxBQUNaO2tCQU5RLEFBTUUsQUFDVjtvQkFQUSxBQU9JLEFBQ1o7ZUFSUSxBQVFELEFBQ1A7Z0JBVFEsQUFTQSxBQUNSO2lCQVZRLEFBVUMsQUFDVDtzQkFYUSxBQVdNLEFBQ2Q7b0JBWlEsQUFZSSxBQUNaO2tCQWJRLEFBYUUsQUFDVjttQkE5QlEsQUFnQk4sQUFBTSxBQWNHLEFBRWY7QUFoQlksQUFDUixLQURFOztpQkFoQlYsQUFBZ0IsQUFnQ0YsQUFBTSxBQUNILEFBSWpCO0FBTG9CLEFBQ1osS0FETTtBQWhDRSxBQUNaOztrQkFvQ0osQUFBZSIsImZpbGUiOiJ0ZXh0LWZpZWxkLWNsYXNzZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL20vV29yay9zZWEtdXJjaGluIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/m/Work/sea-urchin/src/text-field/text-field-classes.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/m/Work/sea-urchin/src/text-field/text-field-classes.js"); } } })();

/***/ }),

/***/ 53:
false,

/***/ 54:
false,

/***/ 70:
false,

/***/ 71:
false,

/***/ 73:
false,

/***/ 74:
false,

/***/ 77:
false,

/***/ 78:
false,

/***/ 79:
false,

/***/ 80:
false,

/***/ 82:
false,

/***/ 87:
false,

/***/ 88:
false,

/***/ 95:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wMTFkYmNkOTc0NjlhNzUxN2RmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLXV0aWwuanM/YmVhYmM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9pbmRleC5qcz9iZWFiYzlkIiwid2VicGFjazovLy8uL3NyYy9jaGVja2JveC9jaGVja2JveC5qcz9iZWFiYzlkIiwid2VicGFjazovLy8uL3BhZ2VzP2JlYWJjOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2JlYWJjOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvaW5wdXQtYmFzZS5qcz9iZWFiYzlkIiwid2VicGFjazovLy8uL3NyYy9iYXNlL2lucHV0LWJhc2UtdGVtcGxhdGUuanM/YmVhYmM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUuanM/YmVhYmM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9zd2l0Y2gtYmFzZS5qcz9iZWFiYzlkIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2cvZGlhbG9nLmpzP2JlYWJjOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWQvZ3JpZC5qcz9iZWFiYzlkIiwid2VicGFjazovLy8uL3NyYy9ncmlkL2dyaWQtY2xhc3Nlcy5qcz9iZWFiYzlkIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3Qvc2VsZWN0LmpzP2JlYWJjOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvaW5wdXQtYmFzZS12ZXJ0aWNhbC1jbGFzc2VzLmpzP2JlYWJjOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQtZmllbGQvaW5kZXguanM/YmVhYmM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1maWVsZC9pbnB1dC1maWVsZC5qcz9iZWFiYzlkIiwid2VicGFjazovLy8uL3NyYy9iYXNlL2lucHV0LWJhc2UtaG9yaXpvbnRhbC1jbGFzc2VzLmpzP2JlYWJjOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQtZmllbGQvdGV4dC1maWVsZC1jbGFzc2VzLmpzP2JlYWJjOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gJy4vdGhlbWUtcHJvdmlkZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7c3R5bGUsIGNsYXNzZXN9IGZyb20gXCJ0eXBlc3R5bGVcIjtcblxuaWYgKHR5cGVvZiBnbG9iYWwuc2VhdXJjaGluID09PSB1bmRlZmluZWQpIHtcbiAgZ2xvYmFsLnNlYXVyY2hpbiA9IHt9O1xufVxuXG5jb25zdCBjaGVja1BhdGhWYWxpZCA9IChvYmosIHBhdGgpID0+IHtcbiAgICBjb25zdCBwYXJ0cyA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgIGxldCByb290ID0gb2JqO1xuXG4gICAgaWYgKCFyb290KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICAgIGlmIChyb290W3BhcnRdICYmIHJvb3QuaGFzT3duUHJvcGVydHkocGFydCkpXG4gICAgICAgICAgICByb290ID0gcm9vdFtwYXJ0XTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBnZXRUaGVtZSA9IChvYmogPSB7fSwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IHt0aGVtZSwgbGF5b3V0fSA9IG9iai5wcm9wcztcblxuICAgIGNvbnN0IHRoZW1lT2JqID0ge1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBzdHlsZToge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoZW1lT2JqW3R5cGVdID0ge1xuICAgICAgICBzdHlsZToge1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNoZWNrUGF0aFZhbGlkKCBUaGVtZVt0aGVtZV0sICdkZWZhdWx0JyApKSB7XG4gICAgICAgIHRoZW1lT2JqLmRlZmF1bHQgPSB7XG4gICAgICAgICAgICAuLi50aGVtZU9iai5kZWZhdWx0LFxuICAgICAgICAgICAgLi4uVGhlbWVbdGhlbWVdLmRlZmF1bHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tQYXRoVmFsaWQoIFRoZW1lW3RoZW1lXSwgdHlwZSApKSB7XG4gICAgICAgIHRoZW1lT2JqW3R5cGVdID0ge1xuICAgICAgICAgICAgLi4udGhlbWVPYmpbdHlwZV0sXG4gICAgICAgICAgICAuLi5UaGVtZVt0aGVtZV1bdHlwZV1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGhpbnRTdHlsZSxcbiAgICAgICAgbGFiZWxTdHlsZSxcbiAgICAgICAgcHJpbWFyeUljb25TdHlsZSxcbiAgICAgICAgdmFsdWVTdHlsZSxcbiAgICAgICAgcHJlTGFiZWxTdHlsZSxcbiAgICAgICAgcHJlTGFiZWxQYXJlbnRTdHlsZSxcbiAgICAgICAgcHJlTGFiZWwsXG4gICAgICAgIGxhYmVsRm9jdXNlZFN0eWxlXG4gICAgfSA9IG9iai5wcm9wcztcblxuICAgIGNvbnNvbGUubG9nKHsuLi5UaGVtZS5kZWZhdWx0LnN0eWxlLH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlKHtcbiAgICAgICAgICAgICAgICAuLi5UaGVtZS5kZWZhdWx0LnN0eWxlLFxuICAgICAgICAgICAgICAgIC4uLnRoZW1lT2JqLmRlZmF1bHQuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4udGhlbWVPYmpbdHlwZV0uc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4ub2JqLnByb3BzLnN0eWxlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByaW1hcnlJY29uOiBzdHlsZSh7XG4gICAgICAgICAgICAgICAgLi4udGhlbWVPYmouZGVmYXVsdC5zdHlsZS5wcmltYXJ5SWNvbixcbiAgICAgICAgICAgICAgICAuLi50aGVtZU9ialt0eXBlXS5zdHlsZS5wcmltYXJ5SWNvbixcbiAgICAgICAgICAgICAgICAuLi5wcmltYXJ5SWNvblN0eWxlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGxhYmVsOiBzdHlsZSh7XG4gICAgICAgICAgICAgICAgLi4udGhlbWVPYmouZGVmYXVsdC5zdHlsZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAuLi50aGVtZU9ialt0eXBlXS5zdHlsZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAuLi5sYWJlbFN0eWxlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhpbnQ6IHN0eWxlKHtcbiAgICAgICAgICAgICAgICAuLi50aGVtZU9iai5kZWZhdWx0LnN0eWxlLmhpbnQsXG4gICAgICAgICAgICAgICAgLi4udGhlbWVPYmpbdHlwZV0uc3R5bGUuaGludCxcbiAgICAgICAgICAgICAgICAuLi5oaW50U3R5bGVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdmFsdWVTdHlsZSA6IHN0eWxlKHtcbiAgICAgICAgICAgICAgICAuLi50aGVtZU9iai5kZWZhdWx0LnN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgICAgIC4uLnRoZW1lT2JqW3R5cGVdLnN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgICAgIC4uLnZhbHVlU3R5bGVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbGFiZWxGb2N1c2VkOiBzdHlsZSh7XG4gICAgICAgICAgICAgICAgLi4udGhlbWVPYmouZGVmYXVsdC5zdHlsZS5sYWJlbEZvY3VzZWQsXG4gICAgICAgICAgICAgICAgLi4udGhlbWVPYmpbdHlwZV0uc3R5bGUubGFiZWxGb2N1c2VkLFxuICAgICAgICAgICAgICAgIC4uLmxhYmVsRm9jdXNlZFN0eWxlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByZUxhYmVsIDogcHJlTGFiZWwgPyBzdHlsZSh7XG4gICAgICAgICAgICAgICAgLi4udGhlbWVPYmouZGVmYXVsdC5zdHlsZS5wcmVMYWJlbCxcbiAgICAgICAgICAgICAgICAuLi50aGVtZU9ialt0eXBlXS5zdHlsZS5wcmVMYWJlbCxcbiAgICAgICAgICAgICAgICAuLi5wcmVMYWJlbC5wcm9wcy5zdHlsZVxuICAgICAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICAgICAgcHJlTGFiZWxQYXJlbnQgOiBzdHlsZSh7XG4gICAgICAgICAgICAgICAgLi4udGhlbWVPYmouZGVmYXVsdC5zdHlsZS5wcmVMYWJlbFBhcmVudCxcbiAgICAgICAgICAgICAgICAuLi50aGVtZU9ialt0eXBlXS5zdHlsZS5wcmVMYWJlbFBhcmVudCxcbiAgICAgICAgICAgICAgICAuLi5wcmVMYWJlbFBhcmVudFN0eWxlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfVxuICAgIClcbn1cblxuY29uc3QgZ2V0VGhlbWUyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgX3RoZW1lID0gXy5jbG9uZURlZXBXaXRoKFRoZW1lLCBmdW5jdGlvbihhKSB7XG4gICAgICAgIGlmIChhLnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uYSwgc3R5bGU6IHN0eWxlKHsuLi5hLnN0eWxlfSl9XG4gICAgfSk7XG5cbiAgICBpZiAoIWdsb2JhbC5zZWF1cmNoaW4pIHtcbiAgICAgICAgZ2xvYmFsLnNlYXVyY2hpbiA9IHt9O1xuICAgIH1cblxuICAgIGdsb2JhbC5zZWF1cmNoaW4udGhlbWUgPSBfdGhlbWU7XG59XG5cbmdldFRoZW1lMigpO1xuXG5leHBvcnQge2NoZWNrUGF0aFZhbGlkLCBnZXRUaGVtZX07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGhlbWUtdXRpbC5qcyIsImltcG9ydCBJbnB1dEJhc2UgZnJvbSAnLi9pbnB1dC1iYXNlJ1xuaW1wb3J0IFN3aXRjaEJhc2UgZnJvbSAnLi9zd2l0Y2gtYmFzZSdcblxuZXhwb3J0IHtJbnB1dEJhc2UsIFN3aXRjaEJhc2V9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFzZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3RoZW1lLXByb3ZpZGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVQcm9wVHlwZSBmcm9tICdyZWFjdC1zdHlsZS1wcm9wdHlwZSc7XG5pbXBvcnQge0lucHV0QmFzZSwgU3dpdGNoQmFzZX0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQge2dldFRoZW1lfSBmcm9tICcuLi90aGVtZS11dGlsJztcblxuaW1wb3J0IHtzdHlsZSBhcyBfc3R5bGUsIGNsYXNzZXN9IGZyb20gJ3R5cGVzdHlsZSc7XG5cbmltcG9ydCBDTEFTU0VTIGZyb20gJy4vY2hlY2tib3gtY2xhc3Nlcyc7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKiogSWQgdG8gcGFyZW50IGNvbXBvbmVudCAqL1xuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqIENsYXNzbmFtZSB0byBwYXJlbnQgY29tcG9uZW50ICovXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqIFRvZ2dsZSBJY29uKi9cbiAgICAgICAgdG9nZ2xlSWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIC8qKiBUb2dnbGUgY29udGFpbmVyIHBvc2l0aW9uKi9cbiAgICAgICAgdG9nZ2xlUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gICAgICAgIC8qKiBBIGxhYmVsIHRleHQgZm9yIFRvZ2dsZS4gQ2FuIGJlIHN0eWxlZCBieSBsYWJlbFN0eWxlICovXG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKiogQW4gaWNvbiBiZWZvcmUgYSBsYWJlbCAqL1xuICAgICAgICBwcmltYXJ5SWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIC8qKiBBbiBvZmZzZXQgb2YgaGlnaGxpZ2h0IGJvcmRlciBpbiBwaXhlbHMgKi9cbiAgICAgICAgaGlnaGxpZ2h0T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAvKiogQSBoZWlnaHQgb2YgY29tcG9uZW50IHRoYXQgd2lsbCBhZmZlY3QgYm90aCBoZWlnaHQgYW5kIGxpbmUtaGVpZ2h0IGluIHBpeGVscyAqL1xuICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKiBTdHlsZSBmb3IgdGhlIG1vc3Qgb3V0ZXIgY29tcG9uZW50ICovXG4gICAgICAgIHN0eWxlOiBzdHlsZVByb3BUeXBlLFxuICAgICAgICAvKiogU3R5bGUgZm9yIGxhYmVsICovXG4gICAgICAgIGxhYmVsU3R5bGU6IHN0eWxlUHJvcFR5cGUsXG4gICAgICAgIC8qKiBTdHlsZSBmb3IgcHJpbWFyeSBpY29uICovXG4gICAgICAgIHByaW1hcnlJY29uU3R5bGU6IHN0eWxlUHJvcFR5cGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbGF5b3V0OiAndmVydGljYWwnLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudGhlbWUgPSBnZXRUaGVtZSh0aGlzLCAndG9nZ2xlJyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6IHRoaXMucHJvcHMuZGVmYXVsdH07XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qge29uVG9nZ2xlID0gKCkgPT4ge30sIG9uQ2xpY2t9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge2ZvY3VzZWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KTtcbiAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgb25DbGljayh0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25Ub2dnbGUodHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICBvblRvZ2dsZShmYWxzZSlcbiAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgb25DbGljayhmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlRG93biA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge29uTW91c2VEb3dufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uTW91c2VEb3duKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2hpdGUnKTtcbiAgICAgICAgICAgIG9uTW91c2VEb3duKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtkcmFnRmxhZywgb25Ub2dnbGUgPSAoKSA9PiB7fX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChkcmFnRmxhZykge1xuICAgICAgICAgICAgb25Ub2dnbGUoKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIGRpc2FibGVJY29uLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgaGlnaGxpZ2h0T2Zmc2V0LFxuICAgICAgICAgICAgdG9nZ2xlUG9zaXRpb24sXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGxhYmVsU3R5bGUsXG4gICAgICAgICAgICBwcmltYXJ5SWNvbixcbiAgICAgICAgICAgIHByaW1hcnlJY29uU3R5bGUsXG4gICAgICAgICAgICB0b2dnbGVJY29uU3R5bGUsXG4gICAgICAgICAgICBvbk1vdXNlTW92ZSxcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcixcbiAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgdG9nZ2xlZCxcbiAgICAgICAgICAgIG9uVG9nZ2xlID0gKCkgPT4ge31cbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBmb2N1c2VkXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTd2l0Y2hCYXNlXG4gICAgICAgICAgICAgICAgb25Ub2dnbGUgPSB7b25Ub2dnbGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZUljb24gPSB7ZGlzYWJsZUljb259XG4gICAgICAgICAgICAgICAgdG9nZ2xlUG9zaXRpb24gPSB7dG9nZ2xlUG9zaXRpb259XG4gICAgICAgICAgICAgICAgZm9jdXMgPSB7KCkgPT4ge3RoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KTt9fVxuICAgICAgICAgICAgICAgIGZvY3VzZWQgPSB7Zm9jdXNlZH1cbiAgICAgICAgICAgICAgICBsYWJlbCA9IHtsYWJlbH1cbiAgICAgICAgICAgICAgICB0b2dnbGVkID0ge3RvZ2dsZWR9XG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzcyA9IHt0aGlzLnRoZW1lLmxhYmVsfVxuICAgICAgICAgICAgICAgIGxheW91dCA9IHtsYXlvdXR9XG4gICAgICAgICAgICAgICAgb25DbGljayA9IHt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyID0ge3RoaXMuaGFuZGxlTW91c2VPdmVyfVxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlciA9IHt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmUgPSB7b25Nb3VzZU1vdmV9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd24gPSB7dGhpcy5oYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgICAgICAgcGFyZW50Q2xhc3MgPSB7Y2xhc3Nlcyh0aGlzLnRoZW1lLnN0eWxlLCBDTEFTU0VTLnBhcmVudCl9XG4gICAgICAgICAgICAgICAgcHJpbWFyeUljb24gPSB7cHJpbWFyeUljb259XG4gICAgICAgICAgICAgICAgcHJpbWFyeUljb25DbGFzcyA9IHt0aGlzLnRoZW1lLnByaW1hcnlJY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NoZWNrYm94L2NoZWNrYm94LmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7c3R5bGUsIGNzc1Jhd30gZnJvbSAndHlwZXN0eWxlJztcblxuaW1wb3J0IHtDaGVja2JveCwgUmFkaW9CdXR0b24sIENoZWNrYm94ZXMsIEJ1dHRvbiwgRHJvcGRvd24sIFRoZW1lLCBJbnB1dEZpZWxkLCBOYXZTZWxlY3QsIEZsdWlkQm94LCBTZWxlY3QsIEdyaWR9IGZyb20gJy4uL3NyYyc7XG5cblxuY3NzUmF3KGBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpOyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIik7YCk7XG5jb25zdCBmb250RmFtaWx5ID0ge1xuICByb2JvdG86ICdSb2JvdG8sIHNhbnMtc2VyaWYnLFxuICBhcmlhbDogJ0FyaWFsJyAvLyBldGNcbn1cblxuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBjaGVja2JveGVzMTogW1xuICAgICAgICAgICAge25hbWU6ICdBJywgdG9nZ2xlZDogdHJ1ZX0sXG4gICAgICAgICAgICB7bmFtZTogJ0InLCB0b2dnbGVkOiB0cnVlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQycsIHRvZ2dsZWQ6IHRydWV9LFxuICAgICAgICAgICAge25hbWU6ICdEJywgdG9nZ2xlZDogdHJ1ZX0sXG4gICAgICAgICAgICB7bmFtZTogJ0UnLCB0b2dnbGVkOiB0cnVlfVxuICAgICAgICBdLFxuICAgICAgICBjaGVja2JveGVzMjogW1xuICAgICAgICAgICAge25hbWU6ICdBJywgdG9nZ2xlZDogdHJ1ZX0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0InLFxuICAgICAgICAgICAgICAgIHRvZ2dsZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0MnLFxuICAgICAgICAgICAgICAgIHRvZ2dsZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0QnLFxuICAgICAgICAgICAgICAgIHRvZ2dsZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0UnLFxuICAgICAgICAgICAgICAgIHRvZ2dsZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZFxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGNsYXNzTmFtZSA9IHtzdHlsZShmb250RmFtaWx5KX1cbiAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZSdcbiAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICAgIHsvKjxOYXZpZ2F0aW9uIC8+Ki99XG5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgeGwgPSB7e1xuICAgICAgICAgICAgICAgICAgc2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgJ2Fyb3VuZCcsXG4gICAgICAgICAgICAgICAgICAgICAgJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgcGFyYWxsYXhcbiAgICAgICAgICAgICAgICAgIGdhcCA9IHsxMDB9XG4gICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MDAsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKC9zdGF0aWMvaG9tZS1iYW5uZXIucG5nKScsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgeGwgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgIGdhcDogNTAsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJvdW5kJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgbGcgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgIGdhcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzbSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgZ2FwOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTJcbiAgICAgICAgICAgICAgICAgIH19XG5cbiAgICAgICAgICAgICAgICAgIHhzID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgeGwgPSB7MTJ9XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zID0geydjZW50ZXInfVxuICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogNjAsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYigyMjAsMjIwLDIyMCknXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIHhsID0gezZ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxPkdldHRpbmcgU3RhcnRlZCA8L2gxPlxuXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgeGwgPSB7MTJ9XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zID0geydjZW50ZXInfVxuICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogNjAsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYigyMjAsMjIwLDIyMCknXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIHhsID0gezZ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxPkdyaWQgU3lzdGVtIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhsID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zID0ge1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiZXR3ZWVuJywnY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhsID0gezZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjMwLDIzMCwyMzApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57YHhsID0gezZ9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGwgPSB7Nn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzAsMjMwLDIzMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntgeGwgPSB7Nn1gfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bCA9IHs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzMCwyMzAsMjMwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2B4bCA9IHs0fWB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhsID0gezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjMwLDIzMCwyMzApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57YHhsID0gezR9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGwgPSB7NH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzAsMjMwLDIzMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntgeGwgPSB7NH1gfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgIHhsID0gezEyfVxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcyA9IHsnY2VudGVyJ31cbiAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDYwLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2IoMjIwLDIyMCwyMjApJ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICB4bCA9IHs2fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT5UZXh0IEZpZWxkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSB7ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gJ09uIHRoZSBXYXkgdG8gV29yaz8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlJY29uID0gJ2J1c2luZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50ID0gJ3doYSdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgIHhsID0gezEyfVxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcyA9IHsnY2VudGVyJ31cbiAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDYwLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCByZ2IoMjIwLDIyMCwyMjApJ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgICB4bCA9IHs2fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT5TbW9vdGggQm94PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICA8Rmx1aWRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzUwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9ICdGaW5kIENoaWxkIENhcmUgU2VydmljZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SWNvbiA9ICdzZWFyY2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0ID0gJzQ1MjMgSHVkc29uIFN0cmVldCwgVmFuY291dmVyLCBCQydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQgPSAnRmluZCBhIG5lYXIgYnkgY2hpbGQgY2FyZSBzZXJ2aWNlcyBieSBhZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0ge2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAnT24gdGhlIFdheSB0byBXb3JrPydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlJY29uID0gJ2J1c2luZXNzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludCA9ICd3aGEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbHVpZEJveD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICB4bCA9IHsxMn1cbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXMgPSB7J2NlbnRlcid9XG4gICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgcmdiKDIyMCwyMjAsMjIwKSdcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgeGwgPSB7Nn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aDE+U2VsZWN0IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0ge2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAnUmFkaXVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUljb24gPSAnc2VhcmNoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUljb24gPSB7dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSB7W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnNSBrbScsIHZhbHVlOiAwfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJzE1IGttJywgdmFsdWU6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnMjAga20nLCB2YWx1ZTogMn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6ICcyNSBrbScsIHZhbHVlOiAzfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJzI1KyBrbScsIHZhbHVlOiA0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0ge2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9ICdSYWRpdXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlJY29uID0gJ3NlYXJjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0ID0geyd2ZXJ0aWNhbCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVJY29uID0ge3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJzUga20nLCB2YWx1ZTogMH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJzE1IGttJywgdmFsdWU6IDF9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6ICcyMCBrbScsIHZhbHVlOiAyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnMjUga20nLCB2YWx1ZTogM30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJzI1KyBrbScsIHZhbHVlOiA0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgeGwgPSB7MTJ9XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zID0geydjZW50ZXInfVxuICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogNjAsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYigyMjAsMjIwLDIyMCknXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgIHhsID0gezZ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxPkNoZWNrYm94IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0geydQb3NpdGlvbiBMZWZ0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUG9zaXRpb24gPSB7J2xlZnQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVkID0ge3RoaXMuc3RhdGUudGVzdDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlID0geygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2hpdCgndGVzdDEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0geydQb3NpdGlvbiBSaWdodCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBvc2l0aW9uID0geydyaWdodCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZWQgPSB7dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlZCA9IHt0aGlzLnN0YXRlLnRlc3QyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZSA9IHsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNoaXQoJ3Rlc3QyJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5NdWx0dXBsZSBDaGVja2JveGVzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0ge3RoaXMuc3RhdGUuY2hlY2tib3hlczF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBvc2l0aW9uID0geydsZWZ0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGUgPSB7KGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNrYm94ZXMxOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0ge3RoaXMuc3RhdGUuY2hlY2tib3hlczJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBvc2l0aW9uID0geydsZWZ0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0ID0gJ2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlID0geyhkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjaGVja2JveGVzMjogZGF0YX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8aDI+UmFkaW8gQnV0dG9uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHtbJ0hleScsICdKdWRlJywgJ0RvbnQnLCAnQmUnLCAnQWZyYWlkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBvc2l0aW9uID0geydsZWZ0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gezB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cblxuXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAwXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuXG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL3RleHQtZmllbGQnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdCc7XG5pbXBvcnQgTmF2U2VsZWN0IGZyb20gJy4vbmF2LXNlbGVjdCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7Q2hlY2tib3gsIENoZWNrYm94ZXMsIFJhZGlvQnV0dG9ufSBmcm9tICcuL2NoZWNrYm94JztcbmltcG9ydCBGbHVpZEJveCBmcm9tICcuL2ZsdWlkLWJveCc7XG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuXG5leHBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBHcmlkLFxuICAgIERyb3Bkb3duLFxuICAgIEZsdWlkQm94LFxuICAgIElucHV0RmllbGQsXG4gICAgTmF2U2VsZWN0LFxuICAgIFNlbGVjdCxcbiAgICBDaGVja2JveCxcbiAgICBDaGVja2JveGVzLFxuICAgIFJhZGlvQnV0dG9uXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXRCYXNlVGVtcGxhdGUgZnJvbSAnLi9pbnB1dC1iYXNlLXRlbXBsYXRlJztcbmltcG9ydCBJbnB1dEJhc2VIb3Jpem9udGFsQ2xhc3NlcyBmcm9tICcuL2lucHV0LWJhc2UtaG9yaXpvbnRhbC1jbGFzc2VzJztcbmltcG9ydCBJbnB1dEJhc2VWZXJ0aWNhbENsYXNzZXMgZnJvbSAnLi9pbnB1dC1iYXNlLXZlcnRpY2FsLWNsYXNzZXMnO1xuXG5jbGFzcyBJbnB1dEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VPdmVyID0gdGhpcy5oYW5kbGVNb3VzZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gdGhpcy5oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG4gICAgfSAgICBcblxuICAgIGhhbmRsZUNsaWNrIChldmVudCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmb2N1cyxcbiAgICAgICAgICAgIGZvY3VzZWQsXG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIG9uQ2xpY2ssXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIGZvY3VzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VPdmVyICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Nb3VzZU92ZXIpXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW91c2VPdmVyKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlT3ZlcjogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTGVhdmUgKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgd3JhcHBlciAoY2xhc3NOYW1lcykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBJbnB1dEJhc2VUZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlT3ZlcjogdGhpcy5zdGF0ZS5tb3VzZU92ZXIsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZU92ZXI6IHRoaXMuaGFuZGxlTW91c2VPdmVyLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVNb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7bGF5b3V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3ZlcnRpY2FsJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndyYXBwZXIoSW5wdXRCYXNlVmVydGljYWxDbGFzc2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2hvcml6b250YWwnOlxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndyYXBwZXIoSW5wdXRCYXNlSG9yaXpvbnRhbENsYXNzZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0QmFzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYXNlL2lucHV0LWJhc2UuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb3ZlckVmZmVjdCBmcm9tICcuLi9ob3Zlci1lZmZlY3QnO1xuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3RoZW1lLXByb3ZpZGVyJztcbmltcG9ydCB7c3R5bGUsIGNsYXNzZXN9IGZyb20gXCJ0eXBlc3R5bGVcIjtcbmltcG9ydCB7Y2hlY2tQYXRoVmFsaWR9IGZyb20gJy4uL3RoZW1lLXV0aWwuanMnO1xuXG5jbGFzcyBJbnB1dEJhc2VUZW1wbGF0ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGlmIChjaGVja1BhdGhWYWxpZCggVGhlbWUsICdkZWZhdWx0JyApKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lID0gVGhlbWUuZGVmYXVsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhlbWUgPSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIGRpc2FibGVIb3ZlckVmZmVjdCxcbiAgICAgICAgICAgIGRpc2FibGVJY29uLFxuICAgICAgICAgICAgZm9jdXMsIC8vIE5lZWQgdG8gY2hlY2sgaWYgZnVuY3Rpb25cbiAgICAgICAgICAgIGZvY3VzZWQsXG4gICAgICAgICAgICBoZWlnaHQgPSA2MCxcbiAgICAgICAgICAgIGhpZ2hsaWdodE9mZnNldCA9IDAsXG4gICAgICAgICAgICBoaW50LFxuICAgICAgICAgICAgaGludFN0eWxlLFxuICAgICAgICAgICAgaGludENsYXNzLFxuICAgICAgICAgICAgaW5wdXQsIC8vIG5lZWQgdG8gY2hlY2sgaWYgZG9tIGlucHV0IGVsZW1lbnRcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgbGFiZWxDbGFzcyxcbiAgICAgICAgICAgIGxhYmVsRm9jdXNlZENsYXNzLFxuICAgICAgICAgICAgbGFiZWxGb2N1c2VkU3R5bGUsXG4gICAgICAgICAgICBsYWJlbFBhcmVudFN0eWxlLFxuICAgICAgICAgICAgbGFiZWxTdHlsZSxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIG9uQ2xpY2ssIC8vIE5lZWQgdG8gY2hlY2sgaWYgZnVuY3Rpb25cbiAgICAgICAgICAgIHByZUxhYmVsLFxuICAgICAgICAgICAgcHJpbWFyeUljb24sXG4gICAgICAgICAgICBwcmltYXJ5SWNvblN0eWxlLFxuICAgICAgICAgICAgcHJpbWFyeUljb25DbGFzcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgcGFyZW50Q2xhc3MsXG4gICAgICAgICAgICBwcmVMYWJlbFBhcmVudENsYXNzLFxuICAgICAgICAgICAgcHJlTGFiZWxDbGFzcyxcbiAgICAgICAgICAgIHBvc3RMYWJlbCxcbiAgICAgICAgICAgIHBvc3RMYWJlbENsYXNzLFxuICAgICAgICAgICAgcG9zdExhYmVsUGFyZW50Q2xhc3MsXG4gICAgICAgICAgICBtb3VzZU92ZXJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgYmx1cnJlZEFuZEVtcHR5ID0gIWZvY3VzZWQgJiYgdmFsdWUgPT0gJyc7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRBbmRFbXB0eSA9IGZvY3VzZWQgJiYgdmFsdWUgPT0gJycgO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcy5wYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsdXJyZWRBbmRFbXB0eSA/IGNsYXNzTmFtZXMucGFyZW50Rm9jdXNlZCA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlciA9IHt0aGlzLnByb3BzLmhhbmRsZU1vdXNlT3Zlcn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmUgPSB7dGhpcy5wcm9wcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7LyogUHJlTGFiZWwgKi99XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcmVMYWJlbCA/IDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcygnbm9zZWxlY3QnLCBjbGFzc05hbWVzLnByZUxhYmVsLCBwcmVMYWJlbFBhcmVudENsYXNzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGAke2hlaWdodH1weGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIb3ZlciBFZmZlY3QgZm9yIFByZUxhYmVsICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge2Rpc2FibGVIb3ZlckVmZmVjdCA/ICcnIDogPEhvdmVyRWZmZWN0IG1vdXNlT3ZlciA9IHttb3VzZU92ZXJ9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHByZUxhYmVsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZUxhYmVsLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMocHJlTGFiZWwucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWVzLnByZUxhYmVsLCBwcmVMYWJlbENsYXNzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIFByaW1hcnlJY29uIGFuZCBMYWJlbCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzLmxhYmVsUGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXJyZWRBbmRFbXB0eSA/IG51bGwgOiBjbGFzc05hbWVzLmxhYmVsUGFyZW50Rm9jdXNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRlcmlhbC1pY29uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMucHJpbWFyeUljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUljb25DbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkID8gY2xhc3NOYW1lcy5wcmltYXJ5SWNvbkZvY3VzZWQgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2xpbmVIZWlnaHQ6IGJsdXJyZWRBbmRFbXB0eSA/IGAke2hlaWdodH1weGAgOiAnJ319XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcmltYXJ5SWNvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWRBbmRFbXB0eSA/IGxhYmVsRm9jdXNlZENsYXNzIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7bGluZUhlaWdodDogYmx1cnJlZEFuZEVtcHR5ID8gYCR7aGVpZ2h0fXB4YCA6ICcnfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIFBvc3RMYWJlbCAqL31cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RMYWJlbCA/IDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3NlcyhjbGFzc05hbWVzLnBvc3RMYWJlbCwgcG9zdExhYmVsUGFyZW50Q2xhc3MpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEhvdmVyIEVmZmVjdCBmb3IgUHJlTGFiZWwgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlzYWJsZUhvdmVyRWZmZWN0ID8gJycgOiA8SG92ZXJFZmZlY3QgbW91c2VPdmVyID0ge21vdXNlT3Zlcn0vPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQocG9zdExhYmVsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBvc3RMYWJlbC5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzKHBvc3RMYWJlbC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZXMucHJlTGFiZWwsIHBvc3RMYWJlbENsYXNzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgey8qIEhvdmVyIEVmZmVjdCAqL31cbiAgICAgICAgICAgICAgICB7IGRpc2FibGVIb3ZlckVmZmVjdCA/ICcnIDogPEhvdmVyRWZmZWN0IG1vdXNlT3ZlciA9IHttb3VzZU92ZXJ9Lz59XG4gICAgICAgICAgICAgICAgey8qIEhpZ2hsaWdodCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcy5oaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNlZCA/IGNsYXNzTmFtZXMuaGlnaGxpZ2h0Rm9jdXNlZCA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGhpZ2hsaWdodE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIENoaWxkcmVuICovfVxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCYXNlVGVtcGxhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFzZS9pbnB1dC1iYXNlLXRlbXBsYXRlLmpzIiwiY29uc3QgVGhlbWUgPSB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgICBzaXplOiB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByaW1hcnk6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByaW1hcnlJY29uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmx1ZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhpbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdwdXJwbGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHNpemU6IHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxheW91dDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjIwLDIyMCwyMjApJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5SWNvbjoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYigyMjAsMjIwLDIyMCknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlOiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHByaW1hcnlJY29uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiKDIyMCwyMjAsMjIwKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvZ2dsZUljb246IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjIwLDIyMCwyMjApJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiKDIyMCwyMjAsMjIwKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB0aGlyZCA6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZSA6IHtcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90aGVtZS5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtzdHlsZSwgY2xhc3Nlc30gZnJvbSAndHlwZXN0eWxlJztcbmltcG9ydCBDTEFTU0VTIGZyb20gJy4vaW5wdXQtYmFzZS12ZXJ0aWNhbC1jbGFzc2VzJztcbmltcG9ydCBIb3ZlckVmZmVjdCBmcm9tICcuLi9ob3Zlci1lZmZlY3QnXG5cbmNvbnN0IF9DTEFTU0VTID0ge1xuICAgIGJhc2U6IHN0eWxlKHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9KSxcbiAgICBsZWZ0OiB7XG4gICAgICAgIHByaW1hcnlJY29uUGFyZW50OiBzdHlsZSh7XG4gICAgICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2IoMjIwLDIyMCwyMjApJyxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgd2lkdGg6IDM4LFxuICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBmbG9hdDogJ2xlZnQnXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgICAgcHJpbWFyeUljb25QYXJlbnQ6IHN0eWxlKHtcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6ICcxcHggc29saWQgcmdiKDIyMCwyMjAsMjIwKScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHdpZHRoOiAzOCxcbiAgICAgICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICAgICAgfSksXG4gICAgfSxcbiAgICBwcmltYXJ5SWNvbjogc3R5bGUoe1xuICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMi41LFxuICAgICAgICB0cmFuc2l0aW9uOiAnLjFzIGFsbCcsXG4gICAgfSksXG4gICAgZGVmYXVsdEljb246IHN0eWxlKHtcbiAgICAgICAgd2lkdGg6IDE4LFxuICAgICAgICBoZWlnaHQ6IDE4LFxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDI0MCwyNDAsMjQwKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMi41LFxuICAgICAgICB0cmFuc2l0aW9uOiAnLjI1cyBhbGwnXG4gICAgfSksXG4gICAgcHJpbWFyeUljb25Nb3VzZURvd246IHN0eWxlKHtcbiAgICB9KSxcbiAgICBwcmltYXJ5SWNvblRvZ2dsZWQ6IHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICBjb2xvcjogJ3JnYig2MCw2MCw2MCknXG4gICAgfSksXG4gICAgZGVmYXVsdEljb25Nb3VzZURvd246IHN0eWxlKHtcbiAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICBoZWlnaHQ6IDE1LFxuICAgIH0pLFxuICAgIGRlZmF1bHRJY29uVG9nZ2xlZDogc3R5bGUoe1xuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIwMCwyMDAsMjAwKScsXG4gICAgfSksXG4gICAgbGFiZWw6IHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAzOHB4KScsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDksXG4gICAgICAgIHBhZGRpbmdSaWdodDogOSxcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICB9KVxuXG59O1xuXG5jbGFzcyBTd2l0Y2hCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7b25Ub2dnbGUgPSAoKSA9PiB7fX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBvblRvZ2dsZSgpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge29uTW91c2VNb3ZlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG9uTW91c2VNb3ZlKVxuICAgICAgICAgICAgb25Nb3VzZU1vdmUoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlT3ZlcjogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtvbk1vdXNlRW50ZXJ9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAob25Nb3VzZUVudGVyKSB7XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlT3ZlcjogZmFsc2V9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VEb3duOiBmYWxzZX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlckVmZmVjdDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZURvd24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtvbk1vdXNlRG93bn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbk1vdXNlRG93bilcbiAgICAgICAgICAgIG9uTW91c2VEb3duKClcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlckVmZmVjdDogdHJ1ZX0pO1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMudG9nZ2xlZClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlRG93bjogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyRWZmZWN0OiBmYWxzZX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHttb3VzZURvd246IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBvbkNsaWNrID0gKCk9Pnt9LFxuICAgICAgICAgICAgdG9nZ2xlUG9zaXRpb24gPSAncmlnaHQnLFxuICAgICAgICAgICAgcGFyZW50Q2xhc3NcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3NlcyhDTEFTU0VTLnBhcmVudCwgX0NMQVNTRVMuYmFzZSwgcGFyZW50Q2xhc3MpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZSA9IHt0aGlzLmhhbmRsZU1vdXNlTW92ZX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlciA9IHt0aGlzLmhhbmRsZU1vdXNlT3Zlcn1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmUgPSB7dGhpcy5oYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duID0ge3RoaXMuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgICAgICAgIG9uTW91c2VVcCA9IHt0aGlzLmhhbmRsZU1vdXNlVXB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyID0ge3RoaXMuaGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtfQ0xBU1NFU1t0b2dnbGVQb3NpdGlvbl0ucHJpbWFyeUljb25QYXJlbnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnByaW1hcnlJY29uID8gPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hdGVyaWFsLWljb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfQ0xBU1NFUy5wcmltYXJ5SWNvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW91c2VEb3duPyBfQ0xBU1NFUy5wcmltYXJ5SWNvbk1vdXNlRG93biA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZWQgPyBfQ0xBU1NFUy5wcmltYXJ5SWNvblRvZ2dsZWQgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeydjaGVjayd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2k+IDogPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9DTEFTU0VTLmRlZmF1bHRJY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3VzZURvd24/IF9DTEFTU0VTLmRlZmF1bHRJY29uTW91c2VEb3duIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlZCA/IF9DTEFTU0VTLmRlZmF1bHRJY29uVG9nZ2xlZCA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8SG92ZXJFZmZlY3QgbW91c2VPdmVyID0ge3RoaXMuc3RhdGUuaG92ZXJFZmZlY3R9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7X0NMQVNTRVMubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SG92ZXJFZmZlY3QgbW91c2VPdmVyID0ge3RoaXMuc3RhdGUuaG92ZXJFZmZlY3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoQmFzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYXNlL3N3aXRjaC1iYXNlLmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBESUFMT0dfU1RZTEUgPSB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICBib3hTaGFkb3c6ICcxcHggMXB4IDFweCAxcHggcmdiYSgwLDAsMCwwLjA4KScsXG4gICAgekluZGV4OiAxMCxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xufVxuXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0ID0gdGhpcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7bW91bnRlZDogZmFsc2V9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG5cbiAgICAgICAgaWYgKG5ld1Byb3BzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJsdXJUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYmx1clRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmx1clRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdW50ZWQ6IHRydWUsIGZvY3VzZWQ6IHRydWUsIHJlZmVyZW5jZUNsaWVudFJlY3Q6IHRoaXMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdW50ZWQ6IHRydWUsIGZvY3VzZWQ6IHRydWUsIHJlZmVyZW5jZUNsaWVudFJlY3Q6IHRoaXMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vdW50ZWQ6IG5ld1Byb3BzLmZvY3VzZWQsIHJlZmVyZW5jZUNsaWVudFJlY3Q6IHRoaXMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpIH0pO1xuICAgICAgICAgICAgdGhpcy5ibHVyVGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5jbG9zZURpYWxvZy5iaW5kKHRoaXMpLCAyNTApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlQ2xpZW50UmVjdDogdGhpcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0KClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVmZXJlbmNlQ2xpZW50UmVjdDogdGhpcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0KClcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjbG9zZURpYWxvZyAoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb2N1c2VkOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QgKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBkaWFsb2dSZWZlcmVuY2UsXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBbJ2JvdHRvbUxlZnQnLCAndG9wTGVmdCddLFxuICAgICAgICAgICAgc2l6ZSA9IHt9XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChkaWFsb2dSZWZlcmVuY2UpIHtcblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UmVjdCA9IGRpYWxvZ1JlZmVyZW5jZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVjdCA9IHRoaXMuZGlhbG9nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXN0ID0gey4uLnRoaXMuc2V0UGxhY2VtZW50KHBsYWNlbWVudFswXSwgdGFyZ2V0UmVjdCl9O1xuXG5cblxuICAgICAgICAgICAgc3dpdGNoIChwbGFjZW1lbnRbMV0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b21MZWZ0JyA6IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRlc3QudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogdGVzdC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRlc3Qud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRlc3QuaGVpZ2h0IC0gZGlhbG9nUmVjdC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b21SaWdodCcgOiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0ZXN0LnRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRlc3QubGVmdCAtIGRpYWxvZ1JlY3Qud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzdC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGVzdC5oZWlnaHQgLSBkaWFsb2dSZWN0LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcExlZnQnIDoge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdGVzdC50b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0ZXN0LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzdC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGVzdC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXNlICd0b3BSaWdodCcgOiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0ZXN0LnRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRlc3QubGVmdCAtIGRpYWxvZ1JlY3Qud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGVzdC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGVzdC5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFBsYWNlbWVudCAocGxhY2VtZW50LCBjbGllbnRSZWN0KSB7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc2l6ZSA9IHt9XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcblxuICAgICAgICBpZiAoc2l6ZS53aWR0aCAmJiBzaXplLndpZHRoICE9ICdpbml0aWFsJykge1xuICAgICAgICAgICAgd2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpemUuaGVpZ2h0ICYmIHNpemUuaGVpZ2h0ICE9ICdpbml0aWFsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tTGVmdCcgOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogY2xpZW50UmVjdC50b3AsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNsaWVudFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdib3R0b21SaWdodCcgOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogY2xpZW50UmVjdC50b3AsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNsaWVudFJlY3QubGVmdCArIChzaXplLndpZHRoID8gc2l6ZS53aWR0aCA6IGNsaWVudFJlY3Qud2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ3RvcExlZnQnIDoge1xuICAgICAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGNsaWVudFJlY3QudG9wIC0gKGNsaWVudFJlY3QuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogY2xpZW50UmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ3RvcFJpZ2h0JyA6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBjbGllbnRSZWN0LnRvcCAtIChjbGllbnRSZWN0LmhlaWdodCksXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNsaWVudFJlY3QubGVmdCArIChzaXplLndpZHRoID8gc2l6ZS53aWR0aCA6IGNsaWVudFJlY3Qud2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBkaWFsb2dPZmZzZXQgPSB7dG9wOiAwLCBsZWZ0OiAwLCAuLi50aGlzLnByb3BzLmRpYWxvZ09mZnNldH0sXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIHN0eWxlXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG1vdW50ZWQsXG4gICAgICAgICAgICBmb2N1c2VkLFxuICAgICAgICAgICAgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IHt9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCFfLmlzTmFOKHJlZmVyZW5jZUNsaWVudFJlY3QudG9wICsgcmVmZXJlbmNlQ2xpZW50UmVjdC5oZWlnaHQgKyAxICArIGRpYWxvZ09mZnNldC50b3ApID8gcmVmZXJlbmNlQ2xpZW50UmVjdC50b3AgKyByZWZlcmVuY2VDbGllbnRSZWN0LmhlaWdodCArIDEgICsgZGlhbG9nT2Zmc2V0LnRvcCA6IDApXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICByZWYgPSB7KGRpYWxvZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZyA9IGRpYWxvZ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAuLi5ESUFMT0dfU1RZTEUsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZvY3VzZWQgPyAnaW5saW5lLWJsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtb3VudGVkID8gMCA6IC01LFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBtb3VudGVkID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogIV8uaXNOYU4ocmVmZXJlbmNlQ2xpZW50UmVjdC50b3AgKyByZWZlcmVuY2VDbGllbnRSZWN0LmhlaWdodCArIDEgICsgZGlhbG9nT2Zmc2V0LnRvcCkgPyByZWZlcmVuY2VDbGllbnRSZWN0LnRvcCArIHJlZmVyZW5jZUNsaWVudFJlY3QuaGVpZ2h0ICsgMSAgKyBkaWFsb2dPZmZzZXQudG9wIDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogcmVmZXJlbmNlQ2xpZW50UmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcmVmZXJlbmNlQ2xpZW50UmVjdC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ21hcmdpblRvcCAuMjVzLCBvcGFjaXR5IC4yNXMnLFxuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpYWxvZy9kaWFsb2cuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtzdHlsZSBhcyBfc3R5bGUsIGNsYXNzZXMsIG1lZGlhLCBjcmVhdGVUeXBlU3R5bGV9IGZyb20gJ3R5cGVzdHlsZSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7Q0xBU1NFUywgQUxJR04sIHdvcmszLCBWSUVXX1dJRFRIUywgQ09OVEFJTkVSX1RZUEV9IGZyb20gJy4vZ3JpZC1jbGFzc2VzJ1xuaW1wb3J0IHthYiwgYWJjfSBmcm9tICcuLi91dGlsJztcblxuY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xuICAgICAgICB0aGlzLnNldFBhcmFsbGF4KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGUgKCkge1xuICAgICAgICBjb25zdCB7YWxpZ24sIGFsaWduSXRlbXMsIGNvbnRhaW5lciwgc3BhY2luZywgc3R5bGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMsXG4gICAgICAgIHZpZXdXaWR0aHMgPSB7XG4gICAgICAgICAgICAuLi5WSUVXX1dJRFRIUyxcbiAgICAgICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuY3JlYXRlVmlld1dpZHRoSXRlcmF0b3IodGhpcywgaW5kZXgrKylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtDTEFTU0VTW2FiYyhjb250YWluZXIsIENPTlRBSU5FUl9UWVBFLnJvdywgQ09OVEFJTkVSX1RZUEUuY29sdW1uKV0sIHN0eWxlXTtcblxuICAgICAgICBmb3IgKGxldCB2aWV3V2lkdGggb2Ygdmlld1dpZHRocykge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVCeVNpemUgPSB0aGlzLmNyZWF0ZVN0eWxlQnlDb2x1bW5OYW1lKHZpZXdXaWR0aC5rZXkpO1xuXG4gICAgICAgICAgICBpZiAoc3R5bGVCeVNpemUpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXMucHVzaChzdHlsZUJ5U2l6ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGFjaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNpbmdbdmlld1dpZHRoLmtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzLnB1c2godmlld1dpZHRoLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IF9zdHlsZSguLi5zdHlsZXMpLFxuICAgICAgICAgICAgYWxpZ25DbGFzc05hbWU6IF9zdHlsZSh0aGlzLmNyZWF0ZUFsaWduU3R5bGUoYWxpZ24sIGFsaWduSXRlbXMpKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVWaWV3V2lkdGhJdGVyYXRvciA9IChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHtjb250YWluZXIsIHNwYWNpbmcgPSB7fSwgc3R5bGUsIC4uLm90aGVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICAgIGtleSA9IGtleXNbaW5kZXhdLFxuICAgICAgICBnYXAgPSAhXy5pc05pbChzcGFjaW5nW2tleV0pID8gc3BhY2luZ1trZXldIDogc3BhY2luZy5nYXAsXG4gICAgICAgIGNvbHVtblNpemUgPSBfLmlzUGxhaW5PYmplY3Qob3RoZXJba2V5XSkgPyBvdGhlcltrZXldLnNpemUgOiBvdGhlcltrZXldO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZToge2tleSwgdmFsdWU6IHdvcmszKGtleSwge30sIGdhcCwgY29sdW1uU2l6ZSl9LFxuICAgICAgICAgICAgZG9uZTogKGluZGV4ID49IGtleXMubGVuZ3RoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiAgIFRha2VzIG5hbWUgbGlrZSAnbGcnLCAnbWQnLCAnc20nLCBldGMuIGxvY2F0ZSBtZWRpYSBxdWVyeSByZWxhdGVkIHRvIHRoZSBuYW1lIGFuZCByZXR1cm5zIHN0eWxlIG9iamVjdFxuICAgICovXG4gICAgY3JlYXRlU3R5bGVCeUNvbHVtbk5hbWUgKG5hbWUpIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgICBpZiAoXy5pc051bWJlcihjb2x1bW4pICkge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmszKG5hbWUsIGNvbHVtbi5zdHlsZSwgbnVsbCwgY29sdW1uKVxuICAgICAgICB9IGVsc2UgaWYgKF8uaXNQbGFpbk9iamVjdChjb2x1bW4pKSB7XG4gICAgICAgICAgICBjb25zdCB7YWxpZ24sIGFsaWduSXRlbXN9ID0gY29sdW1uO1xuICAgICAgICAgICAgY29uc3QgYWxpZ25TdHlsZSA9IHRoaXMuY3JlYXRlQWxpZ25TdHlsZShhbGlnbiwgYWxpZ25JdGVtcylcblxuICAgICAgICAgICAgaWYgKGNvbHVtbiB8fCBjb2x1bW4uc3R5bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29yazMobmFtZSwgey4uLmNvbHVtbi5zdHlsZSwgLi4uYWxpZ25TdHlsZX0sIG51bGwsIGNvbHVtbi5zaXplKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogICBBbGlnbiBwcm9wIGlzIGVpdGhlciBzdHJpbmcgb3IgYXJyYXkuIElmIHN0cmluZywgaXQgd2lsbCBmZWQgdG8gYm90aCAnanVzdGlmeUNvbnRudCcgYW5kICdhbGlnbkl0ZW1zJ1xuICAgICovXG4gICAgY3JlYXRlQWxpZ25TdHlsZSA9IChhbGlnbiwgYWxpZ25JdGVtcykgPT4ge1xuICAgICAgICBsZXQgYWxpZ25TdHlsZSA9IHt9O1xuXG4gICAgICAgIGlmIChfLmlzU3RyaW5nKGFsaWduSXRlbXMpKSB7XG4gICAgICAgICAgICBhbGlnblN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBhYihBTElHTlthbGlnbkl0ZW1zXSwgQUxJR04ubGVmdCksXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogYWIoQUxJR05bYWxpZ25JdGVtc10sIEFMSUdOLnRvcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLmlzQXJyYXkoYWxpZ25JdGVtcykpIHtcbiAgICAgICAgICAgIGFsaWduU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IGFiKEFMSUdOW2FsaWduSXRlbXNbMF1dLCBBTElHTi5sZWZ0KSxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBhYihBTElHTlthbGlnbkl0ZW1zWzFdXSwgQUxJR04udG9wKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHthbGlnblNlbGY6IEFMSUdOW2FsaWduXSwgLi4uYWxpZ25TdHlsZX1cbiAgICB9XG5cbiAgICBzZXRQYXJhbGxheCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcGFyYWxsYXgsXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCAmJiBwYXJhbGxheCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhbGxheCgpO1xuXG4gICAgICAgICAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYXJhbGxheCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlclBhcmFsbGF4ICgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcGFyYWxsYXhTcGVlZCA9IDAuMlxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB2YXIgeU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgdGhpcy5wYXJlbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCI1MCUgXCIgKyAoeU9mZnNldCAqIHBhcmFsbGF4U3BlZWQpICsgXCJweFwiO1xuICAgIH1cblxuICAgIGRpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgZ2FwLFxuICAgICAgICAgICAgbGcgPSB7fSxcbiAgICAgICAgICAgIG1kID0ge30sXG4gICAgICAgICAgICBzbSA9IHt9LFxuICAgICAgICAgICAgeGwgPSB7fSxcbiAgICAgICAgICAgIHhzID0ge30sXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIC8vIE5lZWQgdG8gc2VuZCB3YXJuaW5nXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ubWFwKChjaGlsZCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVlZCB0byBzZW5kIHdhcm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2luZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IGdhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGw6IHhsLmdhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGc6IGxnLmdhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IG1kLmdhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IHNtLmdhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeHM6IHhzLmdhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Li4uY2hpbGQucHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGRyZW4ucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Li4uY2hpbGRyZW4ucHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHtjbGFzc05hbWVzLCBhbGlnbkNsYXNzTmFtZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMoYWxpZ25DbGFzc05hbWUsIGNsYXNzTmFtZXMpfVxuICAgICAgICAgICAgICAgIHJlZiA9IHsoYSkgPT4ge3RoaXMucGFyZW50ID0gYX19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuZGlzcGxheSgpfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC41KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLmRpc2FibGVkID8gJ2lubGluZScgOiAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JpZC9ncmlkLmpzIiwiaW1wb3J0IHtzdHlsZSwgY2xhc3NlcywgbWVkaWF9IGZyb20gJ3R5cGVzdHlsZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBNSU4gPSAxO1xuY29uc3QgTUFYID0gMTI7XG5jb25zdCBXSURUSFMgPSB7fTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlV2lkdGhzICgpIHtcblxuICAgIGZvciAobGV0IGkgPSBNSU47IGkgPD0gTUFYOyBpICs9IC41KSB7XG5cbiAgICAgICAgV0lEVEhTW2ldID0gYCR7Xy5yb3VuZChpLCAxKS9NQVggKiAxMDB9JWA7XG5cbiAgICB9XG5cbn1cblxuY2FsY3VsYXRlV2lkdGhzKCk7XG5cbmNvbnN0IFZJRVdfV0lEVEhTID0ge1xuICAgIHhsOiB7bWluV2lkdGg6MTIwMH0sXG4gICAgbGc6IHttaW5XaWR0aDo5OTIsIG1heFdpZHRoOiAxMTk5fSxcbiAgICBtZDoge21pbldpZHRoOjc2OCwgbWF4V2lkdGg6IDk5MX0sXG4gICAgc206IHttaW5XaWR0aDo1NzYsIG1heFdpZHRoOiA3Njd9LFxuICAgIHhzOiB7bWF4V2lkdGg6IDU3NX0sXG59XG5cblxuZnVuY3Rpb24gd29yazMgKHRhcmdldCwgX3N0eWxlID0ge30sIGdhcCwgZXhpc3RzKSB7XG4gICAgY29uc3QgdGVtcCA9IHt9O1xuXG4gICAgaWYgKGV4aXN0cykge1xuXG4gICAgICAgIHJldHVybiBtZWRpYSh7Li4uVklFV19XSURUSFNbdGFyZ2V0XX0sIHtcbiAgICAgICAgICAgIC4uLl9zdHlsZSxcbiAgICAgICAgICAgIHdpZHRoOiAhXy5pc05pbChnYXApID8gYGNhbGMoJHtXSURUSFNbZXhpc3RzXX0gLSAke2dhcCB9cHgpYCA6IFdJRFRIU1tleGlzdHNdLFxuICAgICAgICB9KVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICByZXR1cm4gbWVkaWEoey4uLlZJRVdfV0lEVEhTW3RhcmdldF19LCB7XG4gICAgICAgICAgICAuLi5fc3R5bGUsXG4gICAgICAgICAgICB3aWR0aDogIV8uaXNOaWwoZ2FwKSA/IGBjYWxjKCR7V0lEVEhTWzEyXX0gLSAke2dhcCB9cHgpYCA6IFdJRFRIU1sxMl0sXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcDtcbn1cblxuXG5jb25zdCBCQVNFX1NUWUxFID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbn07XG5cbmNvbnN0IENMQVNTRVMgPSB7XG5cbiAgICByb3c6IHtcbiAgICAgICAgLi4uQkFTRV9TVFlMRSxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgICB9LFxuICAgIGNvbHVtbjoge1xuICAgICAgICAuLi5CQVNFX1NUWUxFLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH0sXG59XG5cbmNvbnN0IENPTlRBSU5FUl9UWVBFID0ge3JvdzogJ3JvdycsIGNvbHVtbjogJ2NvbHVtbid9XG5cbmNvbnN0IEFMSUdOID0ge1xuICAgIGxlZnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICByaWdodDogJ2ZsZXgtZW5kJyxcbiAgICB0b3A6ICdmbGV4LXN0YXJ0JyxcbiAgICBib3R0b206ICdmbGV4LWVuZCcsXG4gICAgY2VudGVyOiAnY2VudGVyJyxcbiAgICBiZXR3ZWVuOiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYXJvdW5kOiAnc3BhY2UtYXJvdW5kJyxcbiAgICBldmVuOiAnc3BhY2UtZXZlbmx5Jyxcbn1cblxuZXhwb3J0IHtDTEFTU0VTLCBWSUVXX1dJRFRIUywgV0lEVEhTLCB3b3JrMywgQUxJR04sIENPTlRBSU5FUl9UWVBFfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ncmlkL2dyaWQtY2xhc3Nlcy5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZVByb3BUeXBlIGZyb20gJ3JlYWN0LXN0eWxlLXByb3B0eXBlJztcbmltcG9ydCB7c3R5bGUsIGNsYXNzZXN9IGZyb20gJ3R5cGVzdHlsZSc7XG5cbmltcG9ydCB7Z2V0VGhlbWV9IGZyb20gJy4uL3RoZW1lLXV0aWwnO1xuaW1wb3J0IHtJbnB1dEJhc2V9IGZyb20gJy4uL2Jhc2UvJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi4vZGlhbG9nJztcblxuXG5jb25zdCBTVFlMRVMgPSB7XG4gICAgcGFyZW50OiBzdHlsZSh7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIH0pLFxuICAgIG9wdGlvbjogc3R5bGUoe1xuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgY29sb3I6ICdyZ2IoNjAsNjAsNjApJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIHBhZGRpbmc6ICcwIDlweCAwIDlweCcsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIC4yNXMnLFxuICAgICAgICB3aWR0aCA6ICcxMDAlJyxcbiAgICAgICAgekluZGV4IDogNSxcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgJG5lc3Q6IHtcbiAgICAgICAgICAgICcmOmhvdmVyJzogeyBiYWNrZ3JvdW5kOiAncmdiKDIzOCwyMzgsMjM4KScgfSxcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIG9wdGlvbkZvY3VzIDogc3R5bGUoe1xuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzOCwyMzgsMjM4KSdcbiAgICB9KSxcbiAgICBvcHRpb25PbiA6IHN0eWxlKHtcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMjAsMjIwLDIyMCknXG4gICAgfSksXG4gICAgaW5wdXQ6IHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9KSxcbiAgICBoaWRlOiBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICB9KSxcbiAgICB2ZXJ0aWNhbDoge1xuICAgICAgICBkaWFsb2dSZWZlcmVuY2U6IHN0eWxlKHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBjb2xvcjogJ3JnYig2MCw2MCw2MCknLFxuICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiA5LFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDksXG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHpJbmRleDogNSxcbiAgICAgICAgfSksXG4gICAgfSxcbiAgICBob3Jpem9udGFsOiB7XG4gICAgICAgIGRpYWxvZ1JlZmVyZW5jZTogc3R5bGUoe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIGNvbG9yOiAncmdiKDYwLDYwLDYwKScsXG4gICAgICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiAzNixcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDksXG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gMThweCknLFxuICAgICAgICAgICAgekluZGV4OiA1LFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIGl0ZW06IHtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlWYXJzKGRpY3Rpb25hcnk6IHt9KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5O1xuICAgIGZvciAodmFyIG5hbWUgaW4gZGljdGlvbmFyeSkge1xuICAgICAgICBpZiAoZGljdGlvbmFyeS5oYXNPd25Qcm9wZXJ0eSkge1xuICAgICAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgZGljdGlvbmFyeVtuYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGl0ZW1zOiBbXVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gLTFcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICBob3ZlcmVkSXRlbXM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50aGVtZSA9IGdldFRoZW1lKHRoaXMsICdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQYXJlbnRDbGljayA9IHRoaXMuaGFuZGxlUGFyZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dEtleURvd24gPSB0aGlzLmhhbmRsZUlucHV0S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0T25Gb2N1cyA9IHRoaXMuaGFuZGxlSW5wdXRPbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlSXRlbU9uQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1PbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVQYXJlbnRDbGljayAoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qge2ZvY3VzZWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMucmVmcy5zZWxlY3QuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0S2V5RG93biAoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qge2l0ZW1zfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtob3ZlcmVkSXRlbXMsIHZhbHVlfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGl0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBob3ZlcmVkSXRlbXNMZW5ndGggPSBob3ZlcmVkSXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgLy8gT24gdXAgYXJyb3cga2V5XG4gICAgICAgICAgICBjYXNlIDM4IDoge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFdlIGRvbid0IHdhbnQgdG8gcHJldmVudCBhbGwgZGVmYXVsdFxuICAgICAgICAgICAgICAgIGlmIChob3ZlcmVkSXRlbXNMZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcmVkSXRlbXM6IFt2YWx1ZV19KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGhvdmVyZWRJdGVtc1swXSAtIDEpID49IDApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcmVkSXRlbXM6IFtob3ZlcmVkSXRlbXNbMF0gLSAxXX0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtob3ZlcmVkSXRlbXM6IFtpdGVtc0xlbmd0aCAtIDFdfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT24gZG93biBhcnJvdyBrZXlcbiAgICAgICAgICAgIGNhc2UgNDAgOiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoaG92ZXJlZEl0ZW1zTGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hvdmVyZWRJdGVtczogW3ZhbHVlXX0pO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXJlZEl0ZW1zOiBbKGhvdmVyZWRJdGVtc1swXSArIDEpICUgaXRlbXNMZW5ndGhdfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPbiBlbnRlciBrZXlcbiAgICAgICAgICAgIGNhc2UgMTMgOiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoaG92ZXJlZEl0ZW1zWzBdICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBob3ZlcmVkSXRlbXNbMF19KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJsdXJJbnB1dCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0T25Gb2N1cyAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJsdXJUaW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5ibHVyVGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLmJsdXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbU9uQ2xpY2sgKGV2ZW50LCBrZXkpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBrZXl9KTtcbiAgICAgICAgdGhpcy5yZWZzLnNlbGVjdC5ibHVyKCk7XG4gICAgfVxuXG4gICAgYmx1cklucHV0ICh0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuYmx1clRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzZWQ6IGZhbHNlfSk7XG4gICAgICAgICAgICB0aGlzLmJsdXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZGlhbG9nT2Zmc2V0LFxuICAgICAgICAgICAgZGlhbG9nUmVmZXJlbmNlLFxuICAgICAgICAgICAgaGlnaGxpZ2h0T2Zmc2V0LFxuICAgICAgICAgICAgaXRlbXMsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAuLi5vdGhlclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBmb2N1c2VkLFxuICAgICAgICAgICAgaG92ZXJlZEl0ZW1zLFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgX2xheW91dCA9ICdob3Jpem9udGFsJztcblxuICAgICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgICAgICBfbGF5b3V0ID0gbGF5b3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudGhlbWUubGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgX2xheW91dCA9IHRoaXMudGhlbWUubGF5b3V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsdWVDbGFzcztcbiAgICAgICAgc3dpdGNoIChfbGF5b3V0KSB7XG4gICAgICAgICAgICBjYXNlICd2ZXJ0aWNhbCcgOiB7XG4gICAgICAgICAgICAgICAgdmFsdWVDbGFzcyA9IFNUWUxFUy52ZXJ0aWNhbC5kaWFsb2dSZWZlcmVuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZUNsYXNzID0gU1RZTEVTLmhvcml6b250YWwuZGlhbG9nUmVmZXJlbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnB1dEJhc2VcbiAgICAgICAgICAgICAgICBmb2N1cyA9IHsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pO319XG4gICAgICAgICAgICAgICAgZm9jdXNlZCA9IHtmb2N1c2VkfVxuICAgICAgICAgICAgICAgIGhpbnRDbGFzcyA9IHt0aGlzLnRoZW1lLmhpbnR9XG4gICAgICAgICAgICAgICAgbGFiZWxDbGFzcyA9IHt0aGlzLnRoZW1lLmxhYmVsfVxuICAgICAgICAgICAgICAgIGxheW91dCA9IHtfbGF5b3V0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7dGhpcy5oYW5kbGVQYXJlbnRDbGlja31cbiAgICAgICAgICAgICAgICBwYXJlbnRDbGFzcyA9IHtjbGFzc2VzKFNUWUxFUy5wYXJlbnQsIHRoaXMudGhlbWUuc3R5bGUpfVxuICAgICAgICAgICAgICAgIHByaW1hcnlJY29uQ2xhc3MgPSB7dGhpcy50aGVtZS5wcmltYXJ5SWNvbn1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt2YWx1ZSA+IC0xfVxuICAgICAgICAgICAgICAgIHsuLi5vdGhlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICByZWYgPSB7KGRpYWxvZ1JlZmVyZW5jZSkgPT4ge3RoaXMuZGlhbG9nUmVmZXJlbmNlID0gZGlhbG9nUmVmZXJlbmNlO319XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtjbGFzc2VzKHZhbHVlQ2xhc3MsIGZvY3VzZWQgfHwgdmFsdWUgPiAtMSA/IG51bGwgOiBTVFlMRVMuaGlkZSwgdGhpcy50aGVtZS52YWx1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dmFsdWUgPiAtMSA/IGl0ZW1zW3ZhbHVlXS5uYW1lIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPERpYWxvZ1xuICAgICAgICAgICAgICAgICAgICBmb2N1c2VkID0ge2ZvY3VzZWR9XG4gICAgICAgICAgICAgICAgICAgIGJsdXJyZWQgPSB7dGhpcy5ibHVyVGltZW91dH1cbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nUmVmZXJlbmNlID0ge2RpYWxvZ1JlZmVyZW5jZSA/IGRpYWxvZ1JlZmVyZW5jZSgpIDogKCkgPT4ge3JldHVybiAodGhpcy5kaWFsb2dSZWZlcmVuY2UucGFyZW50Tm9kZSl9IC8qIGlmIHNwZWNpZmljIHJlZmVyZW5jZSBpcyBub3QgZ2l2ZW4sIHJlZmVyZW5jZSBpcyBhbHdheXMgdGhlIHBhcmVudE5vZGUgb2YgdGhlIGNsaWNrZWQgZWxlbWVudCovfVxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dPZmZzZXQgPSB7ZGlhbG9nT2Zmc2V0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtSG92ZXJlZCA9IGhvdmVyZWRJdGVtcy5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMoJ25vc2VsZWN0JywgU1RZTEVTLm9wdGlvbiwgaXRlbS52YWx1ZSA9PSB2YWx1ZSA/IFNUWUxFUy5vcHRpb25PbiA6IG51bGwsIGl0ZW1Ib3ZlcmVkID4gLTEgPyBTVFlMRVMub3B0aW9uRm9jdXMgOiBudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KGV2ZW50KSA9PiB7dGhpcy5oYW5kbGVJdGVtT25DbGljayhldmVudCwga2V5KX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge1NUWUxFUy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyID0geygpID0+IHt0aGlzLmJsdXJJbnB1dCgyNTApO319XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXMgPSB7dGhpcy5oYW5kbGVJbnB1dE9uRm9jdXN9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93biA9IHt0aGlzLmhhbmRsZUlucHV0S2V5RG93bn1cbiAgICAgICAgICAgICAgICAgICAgcmVmID0gJ3NlbGVjdCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Jyd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSW5wdXRCYXNlPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC9zZWxlY3QuanMiLCJpbXBvcnQge3N0eWxlfSBmcm9tICd0eXBlc3R5bGUnO1xuXG5jb25zdCBDTEFTU0VTID0ge1xuICAgIHBhcmVudDogc3R5bGUoe1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiKDIyMCwyMjAsMjIwKScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICBoZWlnaHQ6IDQwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuMjVzJyxcbiAgICAgICAgbWFyZ2luOiAnLTFweCAwIDAgLTFweCcsXG4gICAgfSksXG4gICAgbGFiZWxQYXJlbnQ6IHN0eWxlKHtcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgbWFyZ2luTGVmdDogOSxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDksXG4gICAgfSksXG4gICAgcHJpbWFyeUljb246IHN0eWxlKHtcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogJ3JnYigxNTAsMTUwLDE1MCknLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIC4yNXMnLFxuICAgIH0pLFxuICAgIGxhYmVsOiBzdHlsZSh7XG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuMjVzJyxcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG4gICAgfSksXG4gICAgaGlnaGxpZ2h0OiBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcbiAgICAgICAgekluZGV4OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkIHJnYigxNjAsMTYwLDE2MCknLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIC4yNXMnLFxuICAgIH0pLFxuICAgIHByZUxhYmVsOiBzdHlsZSh7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIGZsb2F0OiAnbGVmdCdcbiAgICB9KSxcbiAgICBwb3N0TGFiZWw6IHN0eWxlKHtcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgICAgICBmbG9hdDogJ3JpZ2h0J1xuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENMQVNTRVM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFzZS9pbnB1dC1iYXNlLXZlcnRpY2FsLWNsYXNzZXMuanMiLCJpbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL2lucHV0LWZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LWZpZWxkL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlUHJvcFR5cGUgZnJvbSAncmVhY3Qtc3R5bGUtcHJvcHR5cGUnO1xuaW1wb3J0IHtzdHlsZSwgY2xhc3Nlc30gZnJvbSBcInR5cGVzdHlsZVwiO1xuXG5pbXBvcnQge0lucHV0QmFzZX0gZnJvbSAnLi4vYmFzZS8nO1xuaW1wb3J0IHtnZXRUaGVtZX0gZnJvbSAnLi4vdGhlbWUtdXRpbCc7XG5cbmltcG9ydCBDTEFTU0VTIGZyb20gJy4vdGV4dC1maWVsZC1jbGFzc2VzJztcblxuY2xhc3MgSW5wdXRGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICAvKiogSWQgdG8gcGFyZW50IGNvbXBvbmVudCAqL1xuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqIENsYXNzbmFtZSB0byBwYXJlbnQgY29tcG9uZW50ICovXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgLyoqIEEgbGFiZWwgdGV4dCBmb3IgVGV4dElucHV0LiBDYW4gYmUgc3R5bGVkIGJ5IGxhYmVsU3R5bGUgKi9cbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIC8qKiBBIGhpbnQgdGV4dCBmb3IgVGV4dElucHV0LiBDYW4gYmUgc3R5bGVkIGJ5IGhpbnRTdHlsZSAqL1xuICAgICAgICBoaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAvKiogQW4gaWNvbiBiZWZvcmUgYSBsYWJlbCAqL1xuICAgICAgICBwcmltYXJ5SWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICAgIC8qKiBBbiBvZmZzZXQgb2YgaGlnaGxpZ2h0IGJvcmRlciBpbiBwaXhlbHMgKi9cbiAgICAgICAgaGlnaGxpZ2h0T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAvKiogQSBoZWlnaHQgb2YgY29tcG9uZW50IHRoYXQgd2lsbCBhZmZlY3QgYm90aCBoZWlnaHQgYW5kIGxpbmUtaGVpZ2h0IGluIHBpeGVscyAqL1xuICAgICAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIC8qKiBDbGFzc25hbWUgdGhhdCB3aWxsIGJlIGluc2VydGVkIHRvIHRoZSBtb3N0IG91dGVyIGNvbXBvbmVudCAqL1xuICAgICAgICBzdHlsZTogc3R5bGVQcm9wVHlwZSxcbiAgICAgICAgLyoqIFN0eWxlIGZvciBsYWJlbCAqL1xuICAgICAgICBsYWJlbFN0eWxlOiBzdHlsZVByb3BUeXBlLFxuICAgICAgICAvKiogU3R5bGUgZm9yIGhpbnQgKi9cbiAgICAgICAgaGludFN0eWxlOiBzdHlsZVByb3BUeXBlLFxuICAgICAgICAvKiogU3R5bGUgZm9yIHByaW1hcnkgaWNvbiAqL1xuICAgICAgICBwcmltYXJ5SWNvblN0eWxlOiBzdHlsZVByb3BUeXBlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy50aGVtZSA9IGdldFRoZW1lKHRoaXMsICd0ZXh0SW5wdXQnKTsgICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiB0aGlzLnByb3BzLmRlZmF1bHR9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAgICAgdGhpcy50aGVtZSA9IGdldFRoZW1lKHRoaXMsICd0ZXh0SW5wdXQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqICAgRm9sbG93aW5nIHdpbGwgZm9yY2UgdGhlIHRleHQgY3Vyc29yIHRvIGJlIGF0IHRoZSBlbmQgb2YgdGhlIHRleHQgd2hlbiBmb2N1c2VkXG4gICAgKiAgIFwiZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiBpcyBhZGRlZCBvbiBpbnB1dCBvbkNsaWNrIGV2ZW50LlxuICAgICovXG4gICAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQgPSB0aGlzLmlucHV0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5pbnB1dC5jcmVhdGVUZXh0UmFuZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHZhciByYW5nZSA9IHRoaXMuaW5wdXQuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICAgICAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgICAgICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBmb2N1cyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXRGbHVpZEZvY3VzKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRGbHVpZEZvY3VzKHRoaXMucHJvcHMuZmx1aWRJbmRleCk7XG4gICAgfVxuXG4gICAgYmx1ciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtvbk1vdXNlT3Zlcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChvbk1vdXNlT3ZlcilcbiAgICAgICAgICAgIG9uTW91c2VPdmVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3Qge2hpbnR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZm9jdXNlZCxcbiAgICAgICAgICAgIHZhbHVlID0gJydcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbnB1dEJhc2VcbiAgICAgICAgICAgICAgICBmb2N1cyA9IHt0aGlzLmZvY3VzfVxuICAgICAgICAgICAgICAgIGZvY3VzZWQgPSB7Zm9jdXNlZH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrID0ge3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgaGludENsYXNzID0ge3RoaXMudGhlbWUuaGludH1cbiAgICAgICAgICAgICAgICBsYWJlbENsYXNzID0ge3RoaXMudGhlbWUubGFiZWx9XG4gICAgICAgICAgICAgICAgcGFyZW50Q2xhc3MgPSB7dGhpcy50aGVtZS5zdHlsZX1cbiAgICAgICAgICAgICAgICBwcmltYXJ5SWNvbkNsYXNzID0ge3RoaXMudGhlbWUucHJpbWFyeUljb259XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey8qIEhpbnQgKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENMQVNTRVMuaGludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW1lLmhpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNlZCAmJiB2YWx1ZSA9PSAnJyA/IG51bGwgOiBDTEFTU0VTLmhpbnRIaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtoaW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3NlcyhDTEFTU0VTLmlucHV0LCB0aGlzLnRlc3QpfVxuICAgICAgICAgICAgICAgICAgICByZWYgPSB7KGlucHV0KSA9PiB7dGhpcy5pbnB1dCA9IGlucHV0O319XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1ciA9IHt0aGlzLmJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2UgPT4ge3RoaXMuc2V0U3RhdGUoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX0pO319XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZSA9PiB7ZS5zdG9wUHJvcGFnYXRpb24oKTt9fVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzID0ge3RoaXMuZm9jdXN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lucHV0QmFzZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC1maWVsZC9pbnB1dC1maWVsZC5qcyIsImltcG9ydCB7c3R5bGV9IGZyb20gJ3R5cGVzdHlsZSc7XG5cbmNvbnN0IENMQVNTRVMgPSB7XG4gICAgcGFyZW50OiBzdHlsZSh7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMjIwLDIyMCwyMjApJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIC4yNXMnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW46ICctMXB4IDAgMCAtMXB4JyxcbiAgICAgICAgcGFkZGluZ1RvcDogNy41LCAgICAgICAgXG4gICAgfSksXG4gICAgcGFyZW50Rm9jdXNlZCA6IHN0eWxlKHtcbiAgICAgICAgcGFkZGluZ1RvcDogMFxuICAgIH0pLFxuICAgIGxhYmVsUGFyZW50OiBzdHlsZSh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiA1LFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDUsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgJG5lc3Q6IHtcbiAgICAgICAgICAgICcmPio6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDI1LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyY+KjpsYXN0LWNoaWxkJzoge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDMwcHgpJyxcbiAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSksXG4gICAgbGFiZWxQYXJlbnRGb2N1c2VkOiBzdHlsZSh7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBwYWRkaW5nTGVmdDogNSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA1LFxuICAgICAgICAkbmVzdDoge1xuICAgICAgICAgICAgJyY+KjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4LFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJj4qOmxhc3QtY2hpbGQnOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gMjBweCknLFxuICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cblxuICAgIH0pLFxuICAgIHByaW1hcnlJY29uOiBzdHlsZSh7XG4gICAgICAgIGNvbG9yOiAncmdiKDE1MCwxNTAsMTUwKScsXG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgLjI1cycsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxNHB4JyxcbiAgICAgICAgaGVpZ2h0OiAxNCxcbiAgICAgICAgd2lkdGg6IDIwLFxuICAgIH0pLFxuICAgIGxhYmVsOiBzdHlsZSh7XG4gICAgICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDIwcHgpJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEzcHgnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIC4yNXMnLFxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHdpZHRoOiAnODAlJyxcbiAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJ1xuICAgIH0pLFxuICAgIGhpZ2hsaWdodDogc3R5bGUoe1xuICAgICAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgcmdiKDE2MCwxNjAsMTYwKWAsXG4gICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIC4yNXMnLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICB3aWR0aDogMFxuICAgIH0pLFxuICAgIGhpZ2hsaWdodEZvY3VzZWQ6IHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0pLFxuICAgIHByZUxhYmVsOiBzdHlsZSh7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSksXG4gICAgcG9zdExhYmVsOiBzdHlsZSh7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcbiAgICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDTEFTU0VTO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jhc2UvaW5wdXQtYmFzZS1ob3Jpem9udGFsLWNsYXNzZXMuanMiLCJpbXBvcnQge3N0eWxlfSBmcm9tIFwidHlwZXN0eWxlXCI7XG5cbmNvbnN0IENMQVNTRVMgPSB7XG4gICAgaW5wdXQ6IHN0eWxlKHtcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgY29sb3I6ICdyZ2IoNjAsNjAsNjApJyxcbiAgICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICBoZWlnaHQ6IDM2LFxuICAgICAgICBtYXJnaW5MZWZ0OiA5LFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDE4cHgpJyxcbiAgICAgICAgekluZGV4OiA1LFxuICAgIH0pLFxuICAgIGhpbnQ6IHN0eWxlKHtcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBjb2xvcjogJ3JnYigxODAsMTgwLDE4MCknLFxuICAgICAgICBoZWlnaHQ6IDM2LFxuICAgICAgICBsZWZ0OiA5LFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIC4yNXMnLFxuICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDE4cHgpJyxcbiAgICAgICAgekluZGV4OiAwLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgIH0pLFxuICAgIGhpbnRIaWRlOiBzdHlsZSh7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9KSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ0xBU1NFUztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LWZpZWxkL3RleHQtZmllbGQtY2xhc3Nlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFqQkE7QUFDQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQU9BO0FBTEE7QUFEQTtBQU1BO0FBTUE7QUFMQTtBQUNBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBeEJBO0FBQ0E7QUFzQ0E7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUdBO0FBTUE7QUFLQTtBQUtBO0FBS0E7QUFLQTtBQUtBO0FBS0E7QUFwQ0E7QUE3Q0E7QUFDQTtBQXlGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBWEE7QUFDQTtBQWVBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQStCQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBMUJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFuQ0E7QUFDQTtBQW9DQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUF6Q0E7QUFDQTtBQURBO0FBQ0E7QUFDQTs7Ozs7QUF5Q0E7QUFBQTtBQUNBO0FBa0JBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBRkE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTs7QUFqQkE7QUFvQkE7QUFwQkE7QUFDQTs7Ozs7Ozs7QUF0R0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJCQTs7O0FBeUJBO0FBQ0E7QUFtR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBQ0E7O0FBS0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBUUE7QUFHQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBREE7QUF0QkE7QUEyQkE7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7O0FBRUE7QUFBQTs7QUFKQTtBQVNBO0FBVEE7QUFDQTtBQVVBOztBQUVBO0FBQUE7O0FBS0E7QUFBQTtBQU5BOztBQUhBO0FBYUE7QUFiQTtBQUNBO0FBY0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFIQTs7QUFLQTtBQUNBO0FBQUE7QUFGQTs7QUFTQTtBQUNBO0FBQUE7QUFGQTs7QUFTQTtBQUdBO0FBSkE7QUFDQTs7QUFJQTtBQUFBOztBQTlCQTtBQXFDQTtBQXJDQTtBQUNBO0FBc0NBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTs7QUFMQTtBQVVBO0FBVkE7QUFDQTtBQVVBOztBQURBO0FBR0E7QUFIQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUxBO0FBVUE7QUFWQTtBQUNBO0FBVUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFFQTtBQUVBO0FBSEE7QUFHQTs7QUFOQTtBQVVBO0FBVkE7QUFDQTtBQVdBOztBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUhBO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBRkE7O0FBSEE7QUFRQTtBQVJBO0FBQ0E7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTs7QUFIQTtBQVFBO0FBUkE7QUFDQTs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUhBO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBRkE7O0FBSEE7QUFRQTtBQVJBO0FBQ0E7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBRkE7O0FBTEE7QUFVQTtBQVZBO0FBQ0E7QUFVQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBUUE7QUFSQTtBQUNBO0FBU0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUxBO0FBVUE7QUFWQTtBQUNBO0FBVUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTs7QUFRQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQUE7O0FBUEE7QUFVQTtBQVZBO0FBQ0E7O0FBYUE7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQVBBO0FBWUE7QUFaQTtBQUNBO0FBYUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUxBO0FBVUE7QUFWQTtBQUNBO0FBVUE7O0FBREE7QUFHQTtBQUhBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFUQTtBQWlCQTtBQWpCQTtBQUNBOztBQW9CQTtBQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBVkE7QUFvQkE7QUFwQkE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBRkE7O0FBTEE7QUFVQTtBQVZBO0FBQ0E7QUFVQTs7QUFEQTtBQUdBO0FBSEE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFMQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFOQTtBQUFBO0FBQUE7QUFBQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBSkE7O0FBQUE7QUFPQTtBQVBBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7O0FBSEE7QUFVQTtBQVZBO0FBQ0E7O0FBV0E7QUFBQTs7QUFGQTtBQVNBO0FBVEE7QUFDQTs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuWUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQU1BO0FBSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUdBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUVBOzs7O0FBSUE7QUFBQTs7OztBQUlBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBUkE7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTs7Ozs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBRUE7QUFrQ0E7QUFoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7O0FBVkE7QUFjQTtBQWRBO0FBQ0E7QUFjQTtBQUVBO0FBR0E7QUFBQTtBQURBOztBQUxBO0FBV0E7QUFYQTtBQUNBO0FBVUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQUFBO0FBUUE7O0FBRkE7QUFTQTtBQVRBO0FBQ0E7QUFTQTtBQU1BOztBQVBBO0FBU0E7QUFUQTtBQUNBO0FBWUE7QUFNQTs7QUFSQTtBQVVBO0FBVkE7QUFDQTtBQWVBO0FBRUE7QUFHQTtBQUFBO0FBREE7O0FBTEE7QUFXQTtBQVhBO0FBQ0E7QUFVQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQUE7QUFNQTtBQUVBO0FBRkE7QUFBQTtBQUlBOztBQU9BO0FBRkE7QUFDQTs7QUFSQTtBQWFBO0FBYkE7QUFDQTs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVLQTs7QUFLQTs7QUFJQTtBQUhBO0FBSkE7Ozs7O0FBYUE7QUFGQTs7QUFLQTtBQUZBOztBQVFBO0FBTEE7QUFQQTtBQURBO0FBREE7OztBQW1CQTtBQUNBOzs7QUFNQTtBQUpBO0FBREE7QUFMQTs7OztBQWVBO0FBRkE7O0FBT0E7QUFKQTtBQUpBO0FBREE7Ozs7QUFjQTtBQUZBOztBQUtBO0FBRkE7O0FBT0E7QUFKQTtBQVBBO0FBREE7Ozs7QUFvQkE7QUFMQTtBQURBO0FBREE7QUFuQ0E7Ozs7QUE4Q0E7QUFHQTtBQUpBO0FBREE7Ozs7QUFlQTtBQVBBO0FBREE7QUFEQTtBQVBBO0FBbkVBO0FBQ0E7QUFrRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOztBQUlBO0FBRkE7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFSQTtBQURBOztBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFEQTs7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTtBQU1BOztBQUlBO0FBQ0E7QUFFQTtBQUpBOztBQU1BO0FBRUE7QUFIQTs7QUFNQTtBQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUNBO0FBNURBO0FBQ0E7O0FBcUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFnQkE7QUFDQTtBQWxCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTNCQTtBQUNBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUExQ0E7QUFDQTtBQTZDQTtBQUNBO0FBQ0E7QUE5Q0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBZ0RBO0FBTUE7QUFIQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkE7QUFVQTtBQVZBO0FBQ0E7QUFVQTs7QUFEQTtBQUlBO0FBSkE7QUFDQTtBQUtBOztBQUZBO0FBVUE7QUFWQTtBQUNBO0FBWUE7O0FBRkE7QUFXQTtBQVhBO0FBQ0E7QUFVQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFHQTtBQUhBOzs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBQ0E7O0FBUUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBR0E7QUFUQTtBQVVBO0FBQ0E7QUFFQTs7OztBQUVBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7OztBQU9BO0FBQ0E7QUFEQTtBQUlBO0FBSEE7Ozs7QUFLQTtBQUtBO0FBSEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBREE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQURBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVFBOztBQS9DQTs7QUFrREE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQU9BOzs7O0FBRUE7QUFJQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7QUFPQTtBQUNBO0FBREE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFMQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7QUFPQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFJQTtBQUhBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFIQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BOztBQU5BO0FBZ0JBO0FBaEJBO0FBQ0E7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUErQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBMURBO0FBQ0E7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBO0FBRkE7O0FBT0E7QUFDQTtBQURBO0FBS0E7QUFDQTtBQURBO0FBckdBO0FBQ0E7QUF1R0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFwSEE7QUFDQTtBQThIQTtBQVNBO0FBUEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQWFBO0FBekJBO0FBMkJBO0FBRUE7QUFBQTtBQUlBO0FBL0tBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBSkE7QUFPQTtBQUNBO0FBREE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFDQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7OztBQW1CQTtBQUNBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFrQ0E7QUFHQTtBQURBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBd0RBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFGQTs7QUFBQTtBQUlBO0FBSkE7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BOztBQUZBO0FBYUE7QUFiQTtBQUNBOzs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFKQTtBQUNBO0FBUUE7QUFFQTtBQUFBO0FBS0E7QUFDQTtBQUFBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBR0E7QUFGQTtBQUdBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBVkE7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7O0FBSUE7QUFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBakJBOztBQXVCQTtBQUZBOztBQUtBO0FBRkE7O0FBSUE7QUFFQTtBQUhBOztBQU1BO0FBRkE7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFoQkE7QUFEQTs7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFoQkE7QUFEQTtBQWlCQTtBQXpFQTtBQUNBO0FBNkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBU0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTs7OztBQU1BO0FBQUE7QUFDQTtBQU9BO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVJBOztBQURBO0FBWUE7QUFaQTtBQUFBO0FBYUE7QUFBQTtBQUNBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7O0FBREE7QUFPQTtBQVBBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSkE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7O0FBTkE7QUFVQTtBQVZBO0FBQ0E7Ozs7Ozs7OztBQTlLQTtBQUNBO0FBeUxBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hTQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFS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