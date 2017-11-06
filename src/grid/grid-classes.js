import {style, classes, media} from 'typestyle';
import _ from 'lodash';

const MIN = 1;
const MAX = 12;
const WIDTHS = {};

function calculateWidths () {

    for (let i = MIN; i <= MAX; i += .5) {

        WIDTHS[i] = `${_.round(i, 1)/MAX * 100}%`;

    }

}

calculateWidths();

const VIEW_WIDTHS = {
    xl: {minWidth:1200},
    lg: {minWidth:992, maxWidth: 1199},
    md: {minWidth:768, maxWidth: 991},
    sm: {minWidth:576, maxWidth: 767},
    xs: {maxWidth: 575},
}


function work3 (target, _style = {}, gap, exists) {
    const temp = {};

    if (exists) {

        return media({...VIEW_WIDTHS[target]}, {
            ..._style,
            width: !_.isNil(gap) ? `calc(${WIDTHS[exists]} - ${gap }px)` : WIDTHS[exists],
        })

    } else {

        return media({...VIEW_WIDTHS[target]}, {
            ..._style,
            width: !_.isNil(gap) ? `calc(${WIDTHS[12]} - ${gap }px)` : WIDTHS[12],
        })

    }

    return temp;
}


const BASE_STYLE = {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box'
};

const CLASSES = {

    row: {
        ...BASE_STYLE,
        flexDirection: 'row'
    },
    column: {
        ...BASE_STYLE,
        flexDirection: 'column'
    },
}

const CONTAINER_TYPE = {row: 'row', column: 'column'}

const ALIGN = {
    left: 'flex-start',
    right: 'flex-end',
    top: 'flex-start',
    bottom: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    even: 'space-evenly',
}

export {CLASSES, VIEW_WIDTHS, WIDTHS, work3, ALIGN, CONTAINER_TYPE};
