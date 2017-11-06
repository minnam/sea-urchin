import {style} from 'typestyle';

const CLASSES = {
    parent: style({
        cursor: 'pointer'
    }),
    preLabel: style({
        fontSize: 23,
        width: 40,
        textAlign: 'center',
        transition: 'all .1s'
    }),
    postLabel: style({
        fontSize: 23,
        width: 40,
        textAlign: 'center',
        transition: 'all .1s'
    }),

    preLabelParent: style({
        borderRight: '1px solid rgb(220,220,220)'
    }),


    postLabelParent: style({
        borderLeft: '1px solid rgb(220,220,220)'
    })

}

export default CLASSES
