import {style} from 'typestyle';

const CLASSES = {
    parent: style({
        border: '1px solid rgb(220,220,220)',
        boxSizing: 'border-box',
        float: 'left',
        height: 40,
        position: 'relative',
        transition: 'all .25s',
        margin: '-1px 0 0 -1px',
    }),
    labelParent: style({
        float: 'left',
        height: 40,
        marginLeft: 9,
        marginRight: 9,
    }),
    primaryIcon: style({
        float: 'left',
        fontSize: 13,
        color: 'rgb(150,150,150)',
        height: '100%',
        lineHeight: '40px',
        transition: 'all .25s',
    }),
    label: style({
        float: 'left',
        fontSize: 13,
        height: '100%',
        lineHeight: '40px',
        transition: 'all .25s',
        textOverflow: 'ellipsis'
    }),
    highlight: style({
        height: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 0,
        position: 'absolute',
        borderBottom: '2px solid rgb(160,160,160)',
        transition: 'all .25s',
    }),
    preLabel: style({
        position: 'relative',
        fontSize: 13,
        height: '100%',
        lineHeight: '40px',
        float: 'left'
    }),
    postLabel: style({
        fontSize: 13,
        height: '100%',
        lineHeight: '40px',
        float: 'right'
    })
}

export default CLASSES;
