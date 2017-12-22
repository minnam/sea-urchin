import { style, media } from 'typestyle';
import * as _ from 'lodash';
import { RequireParameterException } from '../__internal__/exception';
const MIN = 1;
const MAX = 12;
function calculateWidths() {
    for (let i = MIN; i <= MAX; i += 0.5) {
        WIDTHS[i] = `${_.round(i, 1) / MAX * 100}%`;
    }
}
export const WIDTHS = {};
calculateWidths();
export const VIEW_WIDTHS = {
    lg: { minWidth: 992, maxWidth: 1199 },
    md: { minWidth: 768, maxWidth: 991 },
    sm: { minWidth: 576, maxWidth: 767 },
    xl: { minWidth: 1200 },
    xs: { maxWidth: 575 }
};
export const calculateGap = (gap, columnSize) => {
    return gap - (gap * columnSize / 12);
};
export const populateGridStyle = (target, styles, gap, columnSize) => {
    let width;
    if (!target) {
        throw new RequireParameterException(`
      populateGridStyle (target: string, styles: any, gap: number, columnSize: number)
                        ^^^^^^
    `);
    }
    if (columnSize) {
        if (!_.isNil(gap)) {
            width = `calc(${WIDTHS[columnSize]} - ${calculateGap(gap, columnSize)}px) !important`;
        }
        else {
            width = `${WIDTHS[columnSize]} !important`;
        }
        return media(Object.assign({}, VIEW_WIDTHS[target]), Object.assign({}, styles, { marginBottom: !_.isNil(gap) && gap !== 0 ? gap : null, width }));
    }
    else {
        if (!_.isNil(gap)) {
            width = `calc(${WIDTHS[12]} - ${calculateGap(gap, 12)}px) !important`;
        }
        else {
            width = WIDTHS[12];
        }
        return media(Object.assign({}, VIEW_WIDTHS[target]), Object.assign({}, styles, { marginBottom: !_.isNil(gap) && gap !== 0 ? gap : null, width }));
    }
};
const BASE_STYLE = {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    width: '100%'
};
export const CLASSES = {
    column: style(Object.assign({}, BASE_STYLE, { flexDirection: 'column' })),
    disableWrapper: style({
        background: 'rgba(0,0,0,0.5)',
        display: 'none',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
    }),
    disableWrapperActive: style({
        display: 'inline'
    }),
    row: style(Object.assign({}, BASE_STYLE, { flexDirection: 'row' }))
};
export const CONTAINER_TYPE = { row: 'row', column: 'column' };
export const ALIGN = {
    around: 'space-around',
    between: 'space-between',
    bottom: 'flex-end',
    center: 'center',
    even: 'space-evenly',
    left: 'flex-start',
    right: 'flex-end',
    top: 'flex-start'
};
//# sourceMappingURL=grid-classes.js.map