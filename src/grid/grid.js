var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import * as _ from 'lodash';
import { classes, style as _style } from 'typestyle';
import { ALIGN, CLASSES, CONTAINER_TYPE, VIEW_WIDTHS, populateGridStyle } from './grid-classes';
import { ab, abc } from '../util';
class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.iterateViewWidth = (viewWidth, key) => {
            const _a = this.props, { container, spacing, style } = _a, other = __rest(_a, ["container", "spacing", "style"]);
            let gap;
            if (spacing && typeof spacing[key.toString()] === 'number') {
                gap = spacing[key];
            }
            else {
                if (typeof spacing === 'object' && spacing.hasOwnProperty('gap')) {
                    if (spacing.gap) {
                        gap = spacing.gap;
                    }
                }
            }
            const columnSize = _.isPlainObject(other[key]) ? other[key].size : other[key];
            return populateGridStyle(key, {}, gap, columnSize);
        };
        this.createAlignStyle = (align, alignItems) => {
            const alignStyle = {
                alignItems: '',
                justifyContent: ''
            };
            if (typeof alignItems === 'string') {
                alignStyle.justifyContent = ab(ALIGN[alignItems], ALIGN.left);
                alignStyle.alignItems = ab(ALIGN[alignItems], ALIGN.top);
            }
            else if (_.isArray(alignItems)) {
                alignStyle.justifyContent = ab(ALIGN[alignItems ? alignItems[0] : ALIGN.left], ALIGN.left);
                alignStyle.alignItems = ab(ALIGN[alignItems ? alignItems[1] : ALIGN.top], ALIGN.top);
            }
            return Object.assign({ alignSelf: align ? ALIGN[align] : '' }, alignStyle);
        };
        this.initParallax = () => {
            const { parallax } = this.props;
            if (this.parent && parallax) {
                this.updateParallax();
                window.onscroll = () => {
                    this.updateParallax();
                };
            }
        };
        this.display = () => {
            const { children, gap, lg, md, sm, xl, xs } = this.props;
            if (!children) {
                return null;
            }
            else if (_.isString(children)) {
                return children;
            }
            return React.Children.map(children, (child) => {
                if (typeof child !== 'number' && typeof child !== 'string') {
                    return (React.cloneElement(child, Object.assign({ spacing: {
                            gap,
                            lg: lg ? (typeof lg === 'number' ? lg : (lg.gap ? lg.gap : 0)) : 0,
                            md: md ? (typeof md === 'number' ? md : (md.gap ? md.gap : 0)) : 0,
                            sm: sm ? (typeof sm === 'number' ? sm : (sm.gap ? sm.gap : 0)) : 0,
                            xl: xl ? (typeof xl === 'number' ? xl : (xl.gap ? xl.gap : 0)) : 0,
                            xs: xs ? (typeof xs === 'number' ? xs : (xs.gap ? xs.gap : 0)) : 0
                        }, style: Object.assign({}, child.props.style) }, child.props)));
                }
                else {
                    return child;
                }
            });
        };
        this.state = {
            alignClassName: '',
            classNames: ''
        };
    }
    render() {
        const { container, disabled } = this.props;
        const { classNames, alignClassName } = this.state;
        const defaultClassName = CLASSES[abc(container, CONTAINER_TYPE.row, CONTAINER_TYPE.column)];
        return (React.createElement("div", { className: classes(defaultClassName, classNames, alignClassName), ref: (parent) => {
                this.parent = parent;
            } },
            this.display(),
            React.createElement("div", { className: classes(CLASSES.disableWrapper, disabled ? CLASSES.disableWrapperActive : null) })));
    }
    componentDidMount() {
        const { parallax } = this.props;
        const updatedClasses = this.updateClasses();
        if (parallax) {
            this.initParallax();
        }
        this.setState({
            alignClassName: _style(updatedClasses.alignStyles),
            classNames: _style(...updatedClasses.styles)
        });
    }
    updateClasses() {
        const { align, alignItems, container, spacing, style } = this.props;
        const self = this;
        const viewWidths = Object.assign({}, VIEW_WIDTHS);
        const styles = style ? [style] : [];
        for (const key in viewWidths) {
            if (viewWidths[key]) {
                const viewWidth = this.iterateViewWidth(viewWidths[key], key);
                const styleByViewWidth = this.createStyleByColumnName(key);
                if (styleByViewWidth) {
                    styles.push(styleByViewWidth);
                }
                if (spacing) {
                    if (spacing[key]) {
                        styles.push(viewWidth);
                    }
                }
            }
        }
        return {
            alignStyles: this.createAlignStyle(align, alignItems),
            styles
        };
    }
    createStyleByColumnName(name) {
        const column = this.props[name];
        if (_.isNumber(column)) {
            return populateGridStyle(name, column, null, column);
        }
        else if (_.isPlainObject(column)) {
            const { align, alignItems } = column;
            const alignStyle = this.createAlignStyle(align, alignItems);
            if (column || column.style) {
                return populateGridStyle(name, Object.assign({}, column.style, alignStyle), null, column.size);
            }
            else {
                return false;
            }
        }
    }
    updateParallax() {
        const { parallax } = this.props;
        const yOffset = window.pageYOffset;
        if (this.parent) {
            const parent = this.parent;
            if (typeof parallax === 'object' && parallax.speed) {
                parent.style.backgroundPosition = `50% ${yOffset * parallax.speed}px`;
            }
            else {
                parent.style.backgroundPosition = `50% ${yOffset * 0.5}px`;
            }
        }
    }
}
export default Grid;
//# sourceMappingURL=grid.js.map