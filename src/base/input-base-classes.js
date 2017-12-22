"use strict";
exports.__esModule = true;
var typestyle_1 = require("typestyle");
var CLASSES = {
    horizontal: {
        parent: typestyle_1.style({
            border: '1px solid rgb(220,220,220)',
            boxSizing: 'border-box',
            float: 'left',
            height: 60,
            margin: '-1px 0 0 -1px',
            position: 'relative',
            transition: 'all .25s',
            width: '100%'
        }),
        parentFocused: typestyle_1.style({}),
        labelParent: typestyle_1.style({
            boxSizing: 'border-box',
            float: 'left',
            height: '100%',
            paddingLeft: 10,
            paddingRight: 5,
            transition: 'all .25s',
            width: '50%',
            $nest: {
                '&>*:first-child': {
                    float: 'left',
                    fontSize: 25,
                    height: '100%',
                    width: 30
                },
                '&>*:last-child': {
                    float: 'left',
                    fontSize: 15,
                    height: '100%',
                    width: 'calc(100% - 30px)'
                }
            }
        }),
        labelParentFocused: typestyle_1.style({
            paddingTop: 7.5,
            $nest: {
                '&>*:first-child': {
                    float: 'left',
                    fontSize: 13,
                    height: '100%',
                    width: 18
                },
                '&>*:last-child': {
                    float: 'left',
                    fontSize: 13,
                    height: '100%',
                    width: 'calc(100% - 20px)'
                }
            }
        }),
        primaryIcon: typestyle_1.style({
            color: 'rgb(150,150,150)',
            float: 'left',
            height: 14,
            lineHeight: '14px',
            transition: 'all .25s',
            width: 20
        }),
        label: typestyle_1.style({
            color: 'rgb(20,20,20)',
            float: 'left',
            height: 'calc(100% - 20px)',
            lineHeight: '13px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            transition: 'all .25s',
            whiteSpace: 'nowrap',
            width: '80%'
        }),
        highlight: typestyle_1.style({
            borderBottom: "2px solid rgb(160,160,160)",
            boxSizing: 'border-box',
            height: 60,
            left: 0,
            position: 'absolute',
            transition: 'all .25s',
            width: 0,
            zIndex: 1
        }),
        highlightFocused: typestyle_1.style({
            width: '100%'
        }),
        preLabel: typestyle_1.style({
            float: 'left',
            fontSize: 13,
            height: '100%',
            lineHeight: '60px',
            position: 'relative'
        }),
        postLabel: typestyle_1.style({
            float: 'right',
            fontSize: 13,
            height: '100%',
            lineHeight: '60px',
            cursor: 'pointer',
            zIndex: 10
        })
    },
    vertical: {
        parent: typestyle_1.style({
            border: '1px solid rgb(220,220,220)',
            boxSizing: 'border-box',
            float: 'left',
            height: 40,
            position: 'relative',
            transition: 'all .25s',
            margin: '-1px 0 0 -1px'
        }),
        labelParent: typestyle_1.style({
            float: 'left',
            height: 40,
            marginLeft: 9,
            marginRight: 9
        }),
        primaryIcon: typestyle_1.style({
            float: 'left',
            fontSize: 13,
            color: 'rgb(150,150,150)',
            height: '100%',
            lineHeight: '40px',
            transition: 'all .25s'
        }),
        label: typestyle_1.style({
            float: 'left',
            fontSize: 13,
            height: '100%',
            lineHeight: '40px',
            transition: 'all .25s',
            textOverflow: 'ellipsis'
        }),
        highlight: typestyle_1.style({
            height: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0,
            position: 'absolute',
            borderBottom: '2px solid rgb(160,160,160)',
            transition: 'all .25s'
        }),
        preLabel: typestyle_1.style({
            position: 'relative',
            fontSize: 13,
            height: '100%',
            lineHeight: '40px',
            float: 'left'
        }),
        postLabel: typestyle_1.style({
            fontSize: 13,
            height: '100%',
            lineHeight: '40px',
            float: 'right',
            cursor: 'pointer',
            zIndex: 10
        })
    }
};
exports["default"] = CLASSES;
