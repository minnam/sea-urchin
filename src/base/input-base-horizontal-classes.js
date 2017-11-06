import {style} from 'typestyle';

const CLASSES = {
    parent: style({
        border: '1px solid rgb(220,220,220)',
        boxSizing: 'border-box',
        float: 'left',
        height: 60,
        position: 'relative',
        transition: 'all .25s',
        width: '100%',
        margin: '-1px 0 0 -1px',
        paddingTop: 7.5,        
    }),
    parentFocused : style({
        paddingTop: 0
    }),
    labelParent: style({
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
            },
        }
    }),
    labelParentFocused: style({
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
            },
        }

    }),
    primaryIcon: style({
        color: 'rgb(150,150,150)',
        float: 'left',
        transition: 'all .25s',
        lineHeight: '14px',
        height: 14,
        width: 20,
    }),
    label: style({
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
    highlight: style({
        borderBottom: `2px solid rgb(160,160,160)`,
        height: 60,
        left: 0,
        position: 'absolute',
        transition: 'all .25s',
        zIndex: 1,
        boxSizing: 'border-box',
        width: 0
    }),
    highlightFocused: style({
        width: '100%'
    }),
    preLabel: style({
        fontSize: 13,
        height: '100%',
        lineHeight: '60px',
        float: 'left',
        position: 'relative',
    }),
    postLabel: style({
        fontSize: 13,
        height: '100%',
        lineHeight: '60px',
        float: 'right'
    })
}

export default CLASSES;
