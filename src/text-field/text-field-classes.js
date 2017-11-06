import {style} from "typestyle";

const CLASSES = {
    input: style({
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
        zIndex: 5,
    }),
    hint: style({
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
    hintHide: style({
        display: 'none',
    }),
}

export default CLASSES;
