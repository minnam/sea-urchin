"use strict";
exports.__esModule = true;
var typestyle_1 = require("typestyle");
var CLASSES = {
    hint: typestyle_1.style({
        bottom: 0,
        boxSizing: 'border-box',
        color: 'rgb(180,180,180)',
        display: 'inline',
        height: 36,
        left: 9,
        lineHeight: '36px',
        overflow: 'hidden',
        position: 'absolute',
        textOverflow: 'ellipsis',
        transition: 'all .25s',
        whiteSpace: 'nowrap',
        width: 'calc(100% - 18px)',
        zIndex: 0
    }),
    hintHide: typestyle_1.style({
        display: 'none'
    }),
    input: typestyle_1.style({
        background: 'none',
        border: 'none',
        bottom: 0,
        boxSizing: 'border-box',
        color: 'rgb(60,60,60)',
        float: 'left',
        fontSize: 15,
        height: 36,
        left: 0,
        marginLeft: 9,
        outline: 'none',
        position: 'absolute',
        width: 'calc(100% - 18px)',
        zIndex: 5
    })
};
exports["default"] = CLASSES;
